'use strict';


const { UserSchemaDb, USER_TABLE } = require('../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    //                        addColumn(nombre de la tabla,'nombre de la columna', el esquema de esa columna.columna)
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchemaDb.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE,'role');
  }
};
