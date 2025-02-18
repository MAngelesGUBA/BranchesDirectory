const express = require('express');
const router = express.Router(); 

//Vista de los usuarios
router.get('/searchExtensions', async(req,res)=>{
  res.response('vista busqueda usuarios');
}); 

module.exports = router; 