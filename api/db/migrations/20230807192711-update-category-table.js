'use strict';

const { CategorySchemaDb, CATEGORY_TABLE } = require('../models/categoryModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(CATEGORY_TABLE, 'image', CategorySchemaDb.image)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(CATEGORY_TABLE, 'image');
  }
};
