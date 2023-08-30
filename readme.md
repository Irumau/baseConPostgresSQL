# EndPoints


## Rest: Representational State Transfer

Es una convección que se refiere a servicios web por protocolo HTTP
Métodos:

- Get: Obtener
- Put: Modificar/Actualizar
- Patch: Modificar/Actualizar
- Post: Crear
- Delete: Eliminar

La convención de REST nos dice que por cada casi entidad que tengamos tendremos una ruta, un endpoint con un nombre, y también deberíamos tener un id por cada producto
# NOTAS
## Conceptos

### Middleware

El término middleware se refiere a un sistema de software que ofrece servicios y funciones comunes para las aplicaciones. En general, el middleware se encarga de las tareas de gestión de datos, servicios de aplicaciones, mensajería, autenticación y gestión de API.

<h3>Uses cases:</h3>

- Funcionan como Pipes
- Validar datos
- Capturar errores
- Validar permisos
- Controlar accesos

### Servicios

Los servicios es donde encapsulamos todos los casos de usos y comenzar a interactuar con la lógica de negocio.
En el caso de una tienda: hacer compras, transacciones, etc.

### Estructura

Esta arquitectura está definida por capas.

### Entidades:

- En esta capa encontramos las entidades base del negocio.
- En nuestro caso: productos, categorías, órdenes de compra.

### Casos de uso

- En esta capa tenemos lo relacionado a la lógica de negocio
- En esta capa se encuentra los servicios

### Controladores

- En esta capa se brinda el acceso.
- Aquí encontramos el routing

### Flujo de trabajo:

- Controladores: Encontramos los routes y middleware.
- Los controladores acceden a la capa de servicios
- Servicios: donde se encuentra la lógica de negocio
- Los servicios usan las librerías.
- Las librerías se encargan de contactarse a la capa de entidades
- Las librerías se contactan a otras fuentes de datos: API externa o base de datos.

### Joi

Joi es la herramienta más poderosa para la validación de datos en JavaScript. Este módulo permite crear esquemas de datos usando un lenguaje simple, comprensible e intuitivo.
A la hora de interactuar con una API, es muy importante que se validen los datos tanto en el lado del servidor como en el del cliente para tener controlados posibles errores y la forma en la que se interactúa con la base de datos.

<a href="https://joi.dev">Documentación de Joi</a>

### Middlewares populares en Express.js

#### CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación.
<a href="http://expressjs.com/en/resources/middleware/cors.html">Cors middleware </a>

#### Morgan

Un logger de solicitudes HTTP para Node.js. <a href="http://expressjs.com/en/resources/middleware/morgan.html">Morgan</a>

#### Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! <a href="https://github.com/helmetjs/helmet">Helmet</a>

#### Express Debug

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando.
<a href="https://github.com/devoidfury/express-debug">Express Debug </a>

#### Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas.
<a href="https://github.com/ericf/express-slash">Express Slash </a>

#### Passport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. <a href="https://github.com/jaredhanson/passport">Passport </a>

Puedes encontrar más middlewares populares en el siguiente enlace: <a href="http://expressjs.com/en/resources/middleware.html">Middleware populares</a>

## Docker

### Que es docker?

Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos

### Por que aprender docker?

El aprender una tecnología multifacética como lo es Docker, nos permite extender nuestras capacidades de desarrollo.
Docker no sólo es un entorno de trabajo de virtualización de instancias, es una distro que nos permite abstraer varias capas del desarrollo de software, describiendo el concepto de DevOps.

### ¿Qué beneficios me da el aprender Docker?

Varias, pero la más importante es la abstracción de entornos de trabajo (develop, testing / staging, production, etc.) y extenderlos a conceptos vivos en la nube.

### ServerLess

Es un tipo de arquitectura que nos permite descentralizar los diferentes recursos existentes de nuestra aplicación.
En ocasiones, a serverless se le denomina sistemas distribuidos ya que permite, abstraer desde servidores hasta módulos denominados cloud functions.
Una de las principales ventajas de implementar serverless es la creación de arquitecturas como cliente-servidor, micro-servicios, entre otros.

### Clean architecture

Es un conjunto de principios cuya finalidad principal es ocultar los detalles de implementación a la lógica de dominio de la aplicación.
Las principal característica de Clean Architecture frente a otras arquitecturas es la regla de dependencia.
En Clean Architecture, una aplicación se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.

### Pool de conexiones

Un pool de conexiones es un conjunto limitado de conexiones a una base de datos, que es manejado por un servidor de aplicaciones de forma tal, que dichas conexiones pueden ser reutilizadas por los diferentes usuarios.

<img src="https://i.stack.imgur.com/OOFTe.png">

### ORM

ORM (Object Relational Mapping) es una técnica de programación que nos ayuda a manipular y consultar la información almacenada dentro de una base de datos usando programación orientada a objetos. Un ORM se encarga de la conexión y también de manejar todo con base en modelos o entidades.
Una principal característica de un ORM es que hace más transparente las conexiones a PostgreSQL y MySQL, además nos protege de algunas vulnerabilidades de SQL y facilita algunas validaciones a la información.

#### Para que sirve un ORM

Un ORM nos ayuda en la extracción de código complejo SQL, sin embargo, nunca esta de mas que en verdad sepas cómo hacer tus propias consultas SQL en caso de que necesites una consulta muy potente o avanzada.

### Migraciones

Las migraciones son:

- Las migraciones son la forma en que Django propaga cambios en los modelos y los refleja en el esquema de bases de datos. - Django.

- Las migraciones son como un sistema de control de versiones para la base de datos. - Laravel.

- Es como un sistema de control de versiones para manejar los cambios desde el código y trackear los cambios en la base de datos. - Sequelize.

Básicamente, las migraciones mantienen el historial del esquema que se lleva en la base de datos. Es un sistema muy usado en ambientes de producción para trackear los cambios sin tener que replicar todo nuevamente (creación de tablas, llaves foráneas, etc). Es decir, permite saber en qué punto estaba para saber qué es lo que se tiene que modificar.

- sequelize.sync() empieza a leer los modelos, crea tablas y hace relist (se sobrescribe información), no se aconseja que se corra en producción. Es mejor sincronizar con un sistema de migraciones.

- Para correr migraciones se utiliza la librería sequelize-cli y se instala como dependencia de desarrollo con el comando npm i sequelize-cli -D.

Posteriormente, se crea un archivo de configuración .sequelizerc en la carpeta principal.

.sequelizerc:

```Javascript
  module.exports = {
  'config': './db/config.js',
  'models-paths: './db/models',
  'migrations-paths: './db/migrations',
  'seeders-path': './db/seeders',
}
```

- config → Dónde se encuentra la configuración, esta configuración se encuentra la conexión hacia la BD. El cli tiene su propia conexión, independientemente de la conexión de la aplicación porque esas conexiones corren a nivel de terminal.

- models-paths → Dónde se encuentran los modelos.

- migrations-paths → Dónde se encuentran las migraciones.

- seeders-path → Dónde se encuentran las semillas de información, sirve mucho para pruebas unitarias, end to end, donde se necesitan semillas de información que es como cargar varios datos de información a la BD.

### Relaciones en una base de datos
Sequelize tiene dos metodos que permiten expresar este tipo de relaciones:
- HasOne: Se utiliza cuando se quiere que la segunda entidad cargue con la relacion.
- BelongsTo: Permite que sea la entidad “A” la que carga con la relacion.
Las relaciones se definen en el metodo associate() del modelo.

```javascript
class Costumer extends Model {
  // static permite que los metodos sean llamados sin necesidad de una instancia.
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: COSTUMERS_TABLE,
      modelName: 'Costumer',
      timestamps: false
    }
  }
}
```

- db/models/index.js

```javascript
function setUpModel(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Costumer.init(costumerSchema, Costumer.config(sequelize));
  Product.init(productsSchema, Product.config(sequelize));
  Categorie.init(categorieSchema, Categorie.config(sequelize));

  //Relaciones
  Costumer.associate(sequelize.models);
}
```
- Se agrega la FK al costumerSchema
- /db/models/costumers.model.js
```javascript
const costumerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
    field: 'last_name'
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  //FK
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}
```
- Se hace la migración.
- Se modifica el schema de validación:
- /schemas/costumer.schema.js
```javascript
const createCostumerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
})

const updateCostumerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
})
```

## Comandos de consola para Docker

- docker-compose up -d postgres: Levanta una baser de datos en base a la configuración que se tenga en el docker-compose.yml .
- docker-compose down (nombre): Desconecta o remueve esa base de datos, si no se le especifica un nombre tira todas.
- docker-compose ps: Muestra todas las base de datos que hay activas en el momento.
- docker-compose exec (nombre de la base) bash: Para conectarse a la base de datos via terminal. Especificando el nombre de la base.
- docker-compose up -d pgadmin: Este comando sirve para correr el comando de pgadmin.
- docker ps: Sirve para poder ver mas informacion sobre las bases de datos que tenes levantada como el id,nombre,ruta, etc.
- docker inspect +#id: Sirve para ver todo el contenido de nuestra base de dato IP entre otras cosas.



## Comandos para sequelize 

Sequelize-cli Commands:

- sequelize-cli db:migrate:schema:timestamps:add Update migration table to have timestamps
- sequelize-cli db:migrate:status List the status of all migrations
- sequelize-cli db:migrate Run pending migrations
- sequelize-cli db:migrate:undo Reverts a migration
- sequelize-cli db:migrate:undo:all Revert all migrations ran
- sequelize-cli db:seed Run specified seeder
- sequelize-cli db:seed:undo Deletes data from the database
- sequelize-cli db:seed:all Run every seeder
- sequelize-cli db:seed:undo:all Deletes data from the database
- sequelize-cli db:create Create database specified by configuration
- sequelize-cli db:drop Drop database specified by configuration
- sequelize-cli init Initializes project
- sequelize-cli init:config Initializes configuration
- sequelize-cli init:migrations Initializes migrations
- sequelize-cli init:models Initializes models
- sequelize-cli init:seeders Initializes seeders
- sequelize-cli migration:generate Generates a new migration file [aliases: migration:create]
- sequelize-cli model:generate Generates a model and its migration [aliases: model:create]
- sequelize-cli seed:generate Generates a new seed file
