const Joi = require('joi'); //Joi es una librería muy potente para realizar validaciones de campos, ya sea en Apis o formularios, etc


// Se debe empezar con joi y luego seguidamente especificar que tipo de campo es el que estamos tratando y luego la validación

const id = Joi.number().id();
const name = Joi.string().min(3);
const price = Joi.number().integer().min(10);
const stock = Joi.number().integer();
const img = Joi.string().uri();
const description = Joi.string().min(10);
const category = Joi.string().min(3);
const categoryId = Joi.number().id();
const CategoryId = Joi.number().id();

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const price_min = Joi.number().integer();
const price_max = Joi.number().integer();




const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  stock: stock.required(),
  image: img.required(),
  description:description.required(),
  categoryId: categoryId.required(),
  CategoryId: CategoryId.required(),
  category: category,
});


const updateProductSchema = Joi.object({
  name: name,
  price: price,
  stock: stock,
  image: img,
  description: description,
  categoryId: categoryId,
  CategoryId: CategoryId,
  category: category,
});

const getProductSchema = Joi.object({
  id: id.required(),
});


const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: price_min.required(),
    then: Joi.required(),
  })
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema,queryProductSchema}
