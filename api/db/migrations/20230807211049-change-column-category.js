'use strict';

const {CATEGORY_TABLE } = require('../models/categoryModel');
const {DataTypes} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.changeColumn(CATEGORY_TABLE, 'category_name', {
      field: 'category_name',
      allowNull:false,
      type: DataTypes.STRING,
      unique: true,
    })
  },

  async down (queryInterface) {
    // await queryInterface.
  }
};
