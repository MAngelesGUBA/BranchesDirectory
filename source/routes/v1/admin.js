const express = require('express');
//instancia de router | manejo de endpoints se manera modularizada
const router = express.Router();

//Vista de administrador
router.get('/manageExtensions',async(req,res)=>{
  res.response(':D');
});

//CRUD Extenciones ------------------------------

router.get('/obtainExtensions',async(req,res)=>{
  res.response('list -----------------');
});

router.post('/insertExtension',async(req,res)=>{
  res.response('insert ##############');
});

router.patch('/updateExtension',async(req,res)=>{
  res.response('update *************');
})

router.delete('/deleteExtension',async(req,res)=>{
  res.response('delete !!!!!!!!!!!'); 
}); 

module.exports = router;