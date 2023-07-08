const Joi = require('joi'); //Joi es una libreria muy potente para realizar validaciones de campos, ya sea en Apis o formularios, etc


// Se debe empezar con joi y luego seguidamente especificar que tipo de campo es el que estamos tratando y luego la validación

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const img = Joi.string().uri()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required().strict(),
  image: img.required(),
});


const updateProductSchema = Joi.object({
  name: name,
  price: price.strict(),
  image: img,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema}
