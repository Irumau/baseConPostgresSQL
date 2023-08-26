const Joi = require('joi');


const customerId = Joi.number().integer();
const id = Joi.number().id();


const getOrderSchema = Joi.object({
  id: id.required()
})

const createOrderSchema = Joi.object({
  customerId: customerId.required()
})

const updateOrderSchema = Joi.object({
  customerId: customerId
})


module.exports = {
  getOrderSchema,
  createOrderSchema,
  updateOrderSchema,
}
