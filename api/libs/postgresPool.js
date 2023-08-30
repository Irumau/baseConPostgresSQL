const { Pool } = require('pg');
const { config } = require('../config/config');

let URI = ''

if(config.isProd){
  URI = config.dbUrl;
}else{
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

// para conectarnos a nuestro base de datos, si esta la tenemos de manera remota estas mayormente nos dan un URL de conexión. El cual el formato es el siguiente.

  //(protocolo)://=>Usuario : => PASSWORD @ => HOST: => PUERTO DONDE CORRE LA DB/ => NOMBRE DE LA BASE DE DATOS



//Para poder mandar esta URL pool tiene un atributo que este reconoce llamado connectionString: y luego concatenamos la URL.
const pool = new Pool({ connectionString: URI});

module.exports = pool;

