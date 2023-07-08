const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

//middleware nos permite modificar el formato en el que queremos recibir nuestro cuerpo. Se utiliza el metodo use de expres para poder hacerlo.
app.use(express.json());

// Proceso con la librería de Cors para solamente permitir que algunos dominion tengan acceso a determinadas partes de la API o a la API en genral
// const whiteList = ['http//localhost:8080', 'http://myapp.com'];
// const options ={
//   origin: (origin, callback) =>{
//     if(whiteList.includes(origin)){
//       callback(null, true);
//     }else{
//       callback(new Error('No permitido'));
//     }
//   }
// }
app.use(cors());

//app.get() define la ruta donde quiero alojar mi aplicación. Luego se le pasa como segundo parametro un cb donde siempre recibiremos una req y un res
app.get('/api', (req, res)=>{
  res.send('Hello world from Express')
});

app.get('/api/nueva-ruta', (req,res) =>{
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

// Es importante el orden de como se envían estas funciones debido a que si mandamos en este caso errorHandler primero
//"cortaría" el proceso de logErrors dado que errorHandler no esta usando el método next()
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

//app.listen escucha el puerto en especifico.
app.listen(port, ()=>{
  console.log(`Todo correcto en el puerto: ${port}`);
});


