const http = require('http');
const express = require('express');
const bodyParse = require('body-parser');
const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
const path = require('path')
const rootDir = require('./util/path');
const app = express();
app.use(bodyParse.urlencoded({extends:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(shopRouters);
app.use('/admin',adminRouters);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
});




app.listen(3000)

