'use strict';


const { ProductSchemaDb, PRODUCT_TABLE } = require('../models/productModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchemaDb);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
