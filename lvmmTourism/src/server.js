const path = require("path");
const express = require("express");
const app = express();
const like = require("./mocks/like.json");
const lvParticularRe = require("./mocks/particulars/lvParticularRe")
const lvParticularfn = require("./mocks/particulars/lvParticularfn")
const sunOnelevelOne = require("./mocks/sunSalePage/sunOnelevelOne.json");
const sunOnelevelTwo = require("./mocks/sunSalePage/sunOnelevelTwo.json");
const saledetailsdata = require("./mocks/sunSalePage/saledetails.json");
const sundetailsbot = require("./mocks/sunSalePage/sundetailsbot.json");
const findSort=require("./mocks/lvFind/findSort.json");
const listOne=require("./mocks/lvFind/findListOne.json");
const lists=require("./mocks/lvFind/findLists.json");
const details=require("./mocks/lvFind/detail.json");
const lcorder=require("./mocks/order/lcorder.json");
const findlcorder=require("./mocks/lvFind/findlcorder.json");
const lcorders = require("./mocks/particulars/lcorders.json")
app.use(express.static(path.resolve(__dirname)));

app.use("/api/lvParticularRe",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  var id=req.query.id
  function select(id){
    for(var i = 0; i < lvParticularRe.length;i++) {
      if(lvParticularRe[i].id== id){
        return lvParticularRe[i];
      }
    }
  }
  var good = select(id);
  res.json(good);
})

app.use("/api/lvParticularfn",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(lvParticularfn);
})

app.use("/api/like",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(like)
})

app.use("/api/sunOnelevelOne",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(sunOnelevelOne)
});

app.use("/api/sunOnelevelTwo",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(sunOnelevelTwo)
});



app.use("/api/sundetailsbot",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(sundetailsbot)
});


app.use("/api/findSort",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");

  res.json(findSort);
})
app.use("/api/findListOne",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");

  res.json(listOne);
})
app.use("/api/findLists",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");

  res.json(lists);
})

``
app.use("/api/saledetailsdata",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  var id = req.query.id
  function select(id){
    for(var i=0; i<saledetailsdata.length; i++){
      if(i == id){
        return saledetailsdata[i]
      }
    }
  }
  var details = select(id)
  res.json(details)
});
app.use("/api/lcorder",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  var id = req.query.id
  var idx = req.query.idx
  function selectx(id){
    for(var k=0; k<lcorder[k].length; k++) {
      if (k == id) {
        return lcorder[idx][k]
      }
    }
  }
  var lcorderer = selectx(id)
  res.json(lcorderer)
});
app.use("/api/lcorders",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  var id=req.query.id
  var idA = req.query.id
  function choose(id){
    for(var i=0;i<lcorders[idA].length;i++){
      if(i== id){
        return lcorders[idA][i];
      }
    }
  }
  var good = choose(id);
  res.json(good);
});

app.use("/",(req,res)=>{
    res.sendFile(path.resolve(__filename,"index.html"))
});

app.use("/lvParticularRe",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
});
app.use("/sale",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
})

app.use("/saledetails",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
})

app.use("/saledetailsorder",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
})

app.listen(3000,()=>{
    console.log("server is ready on port 3000")
});

