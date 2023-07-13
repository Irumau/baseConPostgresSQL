# EndPoints 

## Products
- GET: https://api-rest-con-expres-js.vercel.app/api/v1/products
- GET: https://api-rest-con-expres-js.vercel.app/api/v1/products/:id
- POST: https://api-rest-con-expres-js.vercel.app/api/v1/products
- PATCH: https://api-rest-con-expres-js.vercel.app/api/v1/products/:id
- DELETE: https://api-rest-con-expres-js.vercel.app/api/v1/products/:id

## Users
- GET: https://api-rest-con-expres-js.vercel.app/api/v1/users
- GET: https://api-rest-con-expres-js.vercel.app/api/v1/users/:id 
- POST: https://api-rest-con-expres-js.vercel.app/api/v1/users
- PATCH: https://api-rest-con-expres-js.vercel.app/api/v1/users/:id
- DELETE: https://api-rest-con-expres-js.vercel.app/api/v1/users/:id





# NOTAS

## Rest: Representational State Transfer

Es una convección que se refiere a servicios web por protocolo HTTP
Métodos:

- Get: Obtener
- Put: Modificar/Actualizar
- Patch: Modificar/Actualizar
- Post: Crear
- Delete: Eliminar

La convención de REST nos dice que por cada casi entidad que tengamos tendremos una ruta, un endpoint con un nombre, y también deberíamos tener un id por cada producto

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

## Comandos de consola para Docker

 - docker-compose up -d postgres: Levanta una baser de datos en base a la configuración que se tenga en el docker-compose.yml .
 - docker-compose down (nombre): Desconecta o remueve esa base de datos, si no se le especifica un nombre tira todas.
 - docker-compose ps: Muestra todas las base de datos que hay activas en el momento.
 - docker-compose exec (nombre de la base) bash: Para conectarse a la base de datos via terminal. Especificando el nombre de la base.
 - docker-compose up -d pgadmin: Este comando sirve para correr el comando de pgadmin.
 - docker ps: Sirve para poder ver mas informacion sobre las bases de datos que tenes levantada como el id,nombre,ruta, etc.
 - docker inspect +#id: Sirve para ver todo el contenido de nuestra base de dato IP entre otras cosas.
