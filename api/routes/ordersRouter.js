const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createOrderSchema, getOrderSchema, updateOrderSchema } = require('../schemas/orderSchema');
const { addItemSchema } = require('../schemas/orderProductSchema');
const OrdersService = require('../services/ordersService');
const service = new OrdersService();
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
})

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (err) {
      next(err);
    }
  })


router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (err) {
      next(err);
    }
  })


router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const order = await service.update(id, body);
      res.json(order);
    } catch (err) {
      next(err);
    }
  }
)

router.delete('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const order = await service.delete(id);
      res.json(order)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router;
