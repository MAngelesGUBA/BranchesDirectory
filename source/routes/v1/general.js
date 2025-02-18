const express = require('express');
const router = express.Router();

router.get('/home',async(req,res)=>{
  res.response('Hello world');
});

module.exports = router;

