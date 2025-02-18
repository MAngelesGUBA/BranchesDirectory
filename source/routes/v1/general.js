const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
  //Redirige a la ruta que seria la principal -->  home
  res.redirect('/v1/home'); 
}); 

router.get('/home',async(req,res)=>{
  res.render('pages/index');
});

module.exports = router;

