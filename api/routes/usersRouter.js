
const express = require('express');
const router = express.Router();
const UsersService = require('./../services/usersService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/userSchema');

const service = new UsersService();

//query params para GET
router.get('/', async (req, res) => {
  const users = await service.find();

  res.json(users);
});


router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id)
      res.status(200).json(user);

    } catch (err) {
      next(err)
    }
  });

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newUser = await service.create(body)
    res.status(201).json(newUser);
  });


router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body)
      res.json(user);
    } catch (err) {
      next(err)
    }
  });

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id)
      res.json(rta);
    } catch (err) {
      next(err)
    }
  });

module.exports = router
