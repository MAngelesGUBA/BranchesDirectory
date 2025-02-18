const setUpBodyParser = require('./bodyParser');
const setUpSwagger = require('./swagger');
const setUpStaticAssets = require('./staticAssets');

const setUpMiddleware = (app) =>{
  //Configura el manejo de datos en el cuerpo de la solicitud
  setUpBodyParser(app);
  //Sirve los archivos estaticos
  setUpStaticAssets(app);
  //Establece doc de la API en swagger
  setUpSwagger(app);
}; 

module.exports = setUpMiddleware;