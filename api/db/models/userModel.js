const {Model, DataTypes, Sequelize} = require('sequelize');


const USER_TABLE = 'users';


const UserSchemaDb = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  }
}


class User extends Model {
  static associate(models){
    //hasOne indica en este caso B (customer) va a cargar con la relación.
    this.hasOne(models.Customer, { as: 'customer', foreignKey: 'userId'})
                           // se le debe especificar el alias de la asociación, y también la FK (foreignKey)
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
    }
  }
}


module.exports = { USER_TABLE, UserSchemaDb, User};
