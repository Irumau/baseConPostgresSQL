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
