const { Model, DataTypes, Sequelize } = require('sequelize')

const {CUSTOMER_TABLE }= require('./customerModel')
const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  //hay una propiedad en sequelize en la cual se puede generar un total y datos calculados
  total: {
    type: DataTypes.VIRTUAL,
    get(){
      if(this.items.length > 0){
        //reduce reduce todo a un solo valor en este caso el total
        return this.items.reduce((total, item) =>{
          return total + (item.price * item.OrderProduct.amount);
        },0)
      }
      return 0;
    }
  }
}


class Order extends Model {
  static associate(models){
    // belongTo hace que una orden pertenezca a varios clientes(customers)
    this.belongsTo(models.Customer,{as: 'customer'} );

    this.belongsToMany(models.Product, {
      as: 'items',
      //through seria a traves de que tabla se va a resolver la relación de muchos a muchos
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    }
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order}
