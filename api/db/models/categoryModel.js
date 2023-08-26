const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';


const CategorySchemaDb = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  category: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'category_name',
    unique: true,
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValueL: Sequelize.DATE,
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  }
}

class Category extends Model {
  static associate(models) {
    //puede estar relacionada con muchos productos
    this.hasMany(models.Product,{
      as:'products', //probar con products por las dudas...
      foreignKey: 'CategoryId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: true,
    }
  }
}


module.exports = { CATEGORY_TABLE, CategorySchemaDb, Category};
