const { UserSchemaDb, User} = require('./userModel');
const { ProductSchemaDb, Product } = require('./productModel');
const { CategorySchemaDb, Category } = require('./categoryModel');
const { CustomerSchema, Customer } = require('./customerModel');
const { OrderSchema, Order } = require('./orderModel');
const { OrderProductSchema, OrderProduct } = require('./orderProductModel');




function setupModels(sequelize){
  User.init(UserSchemaDb, User.config(sequelize));
  Product.init(ProductSchemaDb, Product.config(sequelize));
  Category.init(CategorySchemaDb, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  //associated
  // los modelos se encuentras en sequelize.models
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Order.associate(sequelize.models)
}

module.exports = setupModels;
