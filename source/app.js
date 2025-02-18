//Importa express al contexto del proyecto
const express  = require('express');
//Importa la configuración del middleware al contexto del proyecot
const setUpMiddleware = require('./middlewares/index');
//importa el modulo path -- Trabaja con rutas dentro del sistema de archivos
const path = require('path'); 
//Importa las rutas -----------------------------------
const generalRoutes = require('./routes/v1/general');
const adminRoutes = require('./routes/v1/admin');
const userRoutes = require('./routes/v1/user');

//Define una instancia de express
const app = express();

//---------------------------------------------------------------------
// Establece el motor de vistas
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'./views'));

//---------------------------------------------------------------------
//Establece los middlewares | pasa la instancia de app
setUpMiddleware(app);

//--------------------------------------------------------------------
//Establece las rutas que seran utilizadas
app.use('/v1', generalRoutes);
app.use('/v1/admin', adminRoutes);
app.use('/v1/user', userRoutes);

module.exports = app;