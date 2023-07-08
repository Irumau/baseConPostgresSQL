function logErrors(err, req, res, next) {
  console.error(err);
  //Aca es importante indicar que el next esta siendo ejecutado como un middleware de tipo error por lo tanto se le manda como
  // parámetro el error. Si no se le manda nada es un middleware de tipo "normal"
  next(err);
}

function errorHandler(err, req, res) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  //La libreria de boom tiene una propiedad que indica si ese error que fue lanzado es de boom con isBoom.
  if (err.isBoom) {
    //el error de esta librería tiene toda la información dentro de output
    const { output } = err;
    // al querer hacer que nuestro estatus sea dinámico esta librería en el output nos permite recibir el statusCode con output.statusCode. y la información que queremos mostrar por el json viene en output.payload.
    res.status(output.statusCode).json(output.payload);
  }else{
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
