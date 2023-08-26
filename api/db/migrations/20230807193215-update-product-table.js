'use strict';

const { ProductSchemaDb, PRODUCT_TABLE } = require('../models/productModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'description', ProductSchemaDb.description);
    await queryInterface.addColumn(PRODUCT_TABLE, 'category_id', ProductSchemaDb.categoryId);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'description');
    await queryInterface.removeColumn(PRODUCT_TABLE, 'category_id');
  }
};
