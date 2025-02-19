const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.redirect('/v1/home'); 
})

router.get('/home',async(req,res)=>{
  res.render('pages/index');
});

module.exports = router;

