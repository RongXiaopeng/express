const express = require('express');
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path');
router.get('/add-product',(req,res,next)=>{
    console.log('this is add-product page')
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.send(`title content: ${req.body.title}`);
});

module.exports = router;
