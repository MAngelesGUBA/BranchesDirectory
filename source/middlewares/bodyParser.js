const express = require('express');

const setUpBodyParser = (app)=>{
  /*
    Permite manejar solicitudes con cuerpo en formato JSON --
    --> Las convierte en objetos accesibles a través de req.body
  */
  app.use(express.json());  
  
  /*
    * Convierte datos enviados por formularios en un objeto
    accesible por req.body
    * extended:true ---> Utilia la biblioteca qs para analizar
    datos y manejar objetos anidados en el cuerpo de la solicitud
      * qs EXTIENDE las capacidades de querystring(biblioteca)
    * Si extended: false --> usa la biblioteca querystring. No 
    soporta objetos anidados, ej. arrays/objetos
  */
  app.use(express.urlencoded({extended:true}));
}; 

module.exports = setUpBodyParser;