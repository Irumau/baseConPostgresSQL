const express = require('express');
const router = express.Router();
const categoriesService = require('../services/categoriesService')
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categorySchema');
const validatorHandler = require('../middlewares/validatorHandler');

const service = new categoriesService;

router.get('/',
  async (req, res, next) => {
    try {
      const categories = await service.find();
      res.json(categories)
    } catch (err) {
      next(err)
    }
})

router.get('/:id', validatorHandler(getCategorySchema, 'params'),
async (req, res,next) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (err) {
    next(err);
  }
})

router.post('/', validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (err) {
      next(err)
    }
  })


//modificar para que maneje el servicio de la base de datos.
router.patch('/:id',
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
async (req, res, next) => {
  try{
    const { body, params: { id } } = req;

    const category = await service.update(id, body);

    res.json(category)
  }catch(err){
    next(err)
  }
})

router.delete('/:id',validatorHandler(getCategorySchema, 'params'),
 async (req, res, next) => {
  try{
    const { params: { id } } = req;
    const rta = await service.delete(id);
    res.json(rta);
  }catch(err){
    next(err)
  }
})


module.exports = router;
