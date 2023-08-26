const { Model, DataTypes, Sequelize} = require('sequelize');

const {CATEGORY_TABLE} = require('./categoryModel')

const PRODUCT_TABLE = 'products';


const ProductSchemaDb = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'product_name'
  },
  price:{
    allowNull: false,
    type:DataTypes.REAL,
  },
  stock:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'product_image',
  },
  category:{
    allowNull: true,
    type: DataTypes.STRING
  },
  description:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      //references es un objeto donde podemos decirle a que tabla esta relacionada =>
      model: CATEGORY_TABLE,
      key: 'id',
    },
    // este es el comportamiento que quiero que tenga en caso de actualizar o borrar
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  CategoryId: {
    field: 'Category_Id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Product extends Model{
  static associate(models){
    //model
    this.belongsTo(models.Category, {as:'Category'});
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: true,
    }
  }
}


module.exports = { Product, ProductSchemaDb , PRODUCT_TABLE}
