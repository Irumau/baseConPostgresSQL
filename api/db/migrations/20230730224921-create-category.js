'use strict';
const { CategorySchemaDb, CATEGORY_TABLE } = require('../models/categoryModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchemaDb);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE)
  }
};
