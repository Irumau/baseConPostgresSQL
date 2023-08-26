'use strict';

const { UserSchemaDb, USER_TABLE } = require('../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE,'update_at', UserSchemaDb.updatedAt);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE,'update_at');
  }
};
