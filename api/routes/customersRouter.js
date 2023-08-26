const express = require('express');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../schemas/customerSchema');
const validatorHandler = require('../middlewares/validatorHandler');
const customerService = require('../services/customersService');

const service = new customerService();
const router = express.Router();

router.get('/', async (req, res) => {
  const customers = await service.find();

  res.json(customers);
})

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id)
      res.json(customer);
    } catch (err) {
      next(err)
    }
  })


router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      res.status(201).json(await service.create(body));
    }catch(err){
      next(err);
    }
  }
)

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const customer = await service.update(id, body);

      res.json(customer);
    } catch (err) {
      next(err);
    }
  }
)


router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.delete(id);
      res.json(customer)
    } catch (err) {
      next(err);
    }
  }
)


module.exports = router
