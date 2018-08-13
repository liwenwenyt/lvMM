var express = require('express');
var router = express.Router();
var fs = require("fs")
var a1 = require("../aa/aa.json")
var https = require("https");

/* gGET home pae. */
router.get('/', function(req, res) {
    res.json({"title":"welcome copyrights api homepage"});
});

router.get('/api/a1', function(req, res) {      //定义接口
    res.json(a1);              //打印到前端的数据
});

router.get('/api/a2', function(req, res) {
    res.json({});
});

router.post("api/add",function (req,res) {
    var datas=[{"a1":"1"}]
    fs.writeFile("apis/a2.json",JSON.stringify(datas),(err)=>{
        res.json({"code":"nice"})
    })
})

router.get("/api/tq",function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");     //ajax跨域获取方式
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    https.get("https://www.sojson.com/open/api/weather/json.shtml?city=%E8%A5%BF%E5%AE%89",(response)=>{
        let datas = "";
        response.on("data",(chunk)=>{
           datas+=chunk;
        })

        response.on("end",()=>{
            let jsdata = JSON.parse(datas.toString())
            res.json(jsdata)                                //将数据打印
            console.log(jsdata);
        })
    })
})

module.exports = router;