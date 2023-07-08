const boom = require('@hapi/boom')

function validatorHandler(schema,property) {
  return (req,res,next) =>{
    const data = req[property]; // puede venir en body, params, o query
    // si es un schema construid mediante joi este va a tener un método llamado validate en el cual vamos a mandar la info que queremos validar
    const { error } = schema.validate(data, { abortEarly: false}); // para que envíe todos los errores juntos
    if(error) {
      next(boom.badRequest(error));
    }
    next(); //si no hay error sigue con normalidad el programa.
  }
}



module.exports = validatorHandler;
