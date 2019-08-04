const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/getProducts',(req,res)=>{
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'cart-items.json'));
})

module.exports=router;