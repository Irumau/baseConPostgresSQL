const Joi = require('joi');
const {createUserSchema, updateUserSchema} = require('./userSchema');
const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const phone = Joi.string().min(3).max(15);
const userId = Joi.number().integer();


const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema,
})


const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  user: updateUserSchema,
  userId: userId
})

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema}
