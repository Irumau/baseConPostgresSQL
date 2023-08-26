'use strict';

const { UserSchemaDb, USER_TABLE } = require('../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //       recibe sequelize como parámetro también
  async up (queryInterface) {
    // queryInterface nos da una API, una de esas API es para crear la tabla
    await queryInterface.createTable(USER_TABLE, UserSchemaDb);
  },
//         recibe sequelize como parámetro también
  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  }
};
