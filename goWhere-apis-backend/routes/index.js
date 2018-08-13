const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
var arr = [];
var arr2=[];
router.post("/api",function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");     //ajax跨域获取方式
    console.log(req.body);
    arr.push(req.body);
    fs.writeFile("./json/form.json",JSON.stringify(arr),(err)=>{
        res.json({"code":"nice"})
    })
});



router.get('/api2',function(req,res){                      //
    res.header("Access-Control-Allow-Origin", "*");     //ajax跨域获取方式
    fs.readFile('./json/form.json','utf-8',(err,data)=>{
        console.log(data);
        const s = JSON.parse(data);
        res.json(s);
    })

});
router.post("/api3",function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");     //ajax跨域获取方式
    console.log(req.body);
    arr2.push(req.body);
    fs.writeFile("./json/order.json",JSON.stringify(arr2),(err)=>{
        res.json({"code":"nice"})
    })
});
router.get('/api4',function(req,res){                      //
    res.header("Access-Control-Allow-Origin", "*");     //ajax跨域获取方式
    fs.readFile('./json/order.json','utf-8',(err,data)=>{
        console.log(data);
        const a = JSON.parse(data);
        res.json(a);
    })

});
fs.readFile('../json/city.json','utf-8',(err,data)=>{           //test
    // console.log(data);
});



module.exports = router;
