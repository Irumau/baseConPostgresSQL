const { Pool } = require('pg');
const { config } = require('../config/config');


const options = {}

if(config.isProd){
  options.connectionString = config.dbUrl;
  options.ssl = {
    rejectUnauthorized: false
  }
}else{
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  options.connectionString = URI;
}
// para conectarnos a nuestro base de datos, si esta la tenemos de manera remota estas mayormente nos dan un URL de conexión. El cual el formato es el siguiente.
  //(protocolo)://=>Usuario : => PASSWORD @ => HOST: => PUERTO DONDE CORRE LA DB/ => NOMBRE DE LA BASE DE DATOS
//Para poder mandar esta URL pool tiene un atributo que este reconoce llamado connectionString: y luego concatenamos la URL.
const pool = new Pool(options);

module.exports = pool;

