'use strict';


const { ProductSchemaDb, PRODUCT_TABLE } = require('../models/productModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE,'updated_at', ProductSchemaDb.updatedAt)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE,'updated_at');
  }
};
