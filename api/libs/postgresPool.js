const { Pool } = require('pg');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// para conectarnos a nuestro base de datos, si esta la tenemos de manera remota estas mayormente nos dan un URL de conexión. El cual el formato es el siguiente.

  //(protocolo)://=>Usuario : => PASSWORD @ => HOST: => PUERTO DONDE CORRE LA DB/ => NOMBRE DE LA BASE DE DATOS
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


//Para poder mandar esta URL pool tiene un atributo que este reconoce llamado connectionString: y luego concatenamos la URL.
const pool = new Pool({ connectionString: URI});




module.exports = pool;

