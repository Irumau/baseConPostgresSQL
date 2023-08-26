const { config } = require('./../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('../db/models')

const USER = encodeURIComponent(config.dbUser);

const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


// creamos una nueva instancia de sequelize y esta por detras ya maneja el pool de conexiones por ende solo pasamos la URL. Lo que si hay que asegurarse de pasar la variable dialect.

const sequelize = new Sequelize(URI,{
  dialect: 'postgres', // Esta linea nos permite decirle a Sequelize la base de datos que estamos utilizando.
  logging: console.log(), // logging hace que por la consola cada vez que se haga una consulta por medio del ORM va a mostrarnos el comando o el igual en SQL.
});

setupModels(sequelize);

//una vez hecho el setup vamos a realizar una sincronización, asi agarra esos modelos y crea dicha estructura para crear la tabla.
// sequelize.sync(); esta linea esta comentada por que la mejor manera de hacer esto es mediante migraciones
module.exports = sequelize;
