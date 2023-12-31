const { Model, DataTypes, Sequelize } = require('sequelize')

const { ORDER_TABLE }= require('./orderModel')
const { PRODUCT_TABLE }= require('./productModel');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'updated_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      //references es un objeto donde podemos decirle a que tabla esta relacionada =>
      model: ORDER_TABLE,
      key: 'id',
    },
    // este es el comportamiento que quiero que tenga en caso de actualizar o borrar
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  productId:{
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}


class OrderProduct extends Model {
  static associate(models){
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false,
    }
  }
}


module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct};
