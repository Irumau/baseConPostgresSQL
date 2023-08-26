'use strict';

const { ProductSchemaDb, PRODUCT_TABLE } = require('../models/productModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'Category_Id', ProductSchemaDb.CategoryId);

  },

  async down (queryInterface, ) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'Category_Id');
  }
};
