const { Model, DataTypes, Sequelize } = require('sequelize')

const { USER_TABLE }= require('./userModel')

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone:{
    allowNull: true,
    type: DataTypes.STRING,
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
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references:{
      //references es un objeto donde podemos decirle a que tabla esta relacionada =>
      model: USER_TABLE,
      key: 'id',
    },
    // este es el comportamiento que quiero que tenga en caso de actualizar o borrar
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}


class Customer extends Model {
  static associate(models){
    // belongTo hace que la clase customer este asociada a un modelo en especifico.
    this.belongsTo(models.User,{as: 'user'} );
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    }
  }
}


module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer}
