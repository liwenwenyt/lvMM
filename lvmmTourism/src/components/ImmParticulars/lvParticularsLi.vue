<template>
  <li>
    <div class="tickets-messsge">
      <div class="tickets-messsge-title">
        <span class="tickets-messsge-text">
            <div class="tickets-messsge-miaosha">{{item.markets}}</div>
            {{item.tickets}}
        </span>
      </div>
      <div class="tickets-know">
        <div class="know-hongbao">
          <a href="javascript:;" class="tickets-know-hongbao" v-for="t in item.hongbao">{{t}}</a>
        </div>
        <div class="time">
          <span class="tickets-time">
              <i class="iconfont icon-right-1"></i>
              09:00前可订今日票
          </span>
          <span class="tickets-time">
              <i class="iconfont icon-right-1"></i>
              随时退
          </span>
        </div>
        <a class="shouldKnow" href="javascript:;">
          订票须知
          <i class="iconfont icon-you"></i>
        </a>
      </div>
    </div>
    <div class="tickets-price">
      <p class="startPrice">
        <span class="symbol">￥</span><b>{{item.price}}</b>起
      </p>
      <span class="startPrice-jian" v-for="p in item.discounts">{{p}}</span>
      <a href="javascript:;" class="tickets-rob" @click="buy">{{item.reserve}}</a>
    </div>
  </li>
</template>

<script>
    export default {
        name: "lvParticularsLi",
        props:["item","idi","idd"],
        methods:{
          buy(){
            console.log(this.idd)
            this.$router.push({
              path:"/serverOrder",
              name:"serverOrder",
              query:{
                id:this.idi,
                idA:this.idd
              }
            })
          }
        }
    }
</script>

<style scoped>
  li{
    width: 3.44rem;
    height: 1.46rem;
    display: flex;
    border-bottom:1px solid #eeeef7;
  }
  .tickets-messsge{
     width: 2.48rem;
     height: 1.36rem;
     display: flex;
     flex-direction: column;
   }
  .tickets-messsge-miaosha{
    width: .26rem;
    height: .14rem;
    border-radius: 2px;
    background-color: #ff8100;
    color:white;
    font-size: .12rem;
    transform: scale(.8);
    text-align: center;
    line-height: .14rem;
  }
  .tickets-messsge-text{
    font-size: .13rem;
    display: flex;
    padding-top: .22rem;
  }
  .tickets-know{
    width: 2.48rem;
    height: .76rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .know-hongbao{
    display: flex;
  }
  .tickets-know-hongbao{
    padding: 3px;
    border:1px solid #f8cb98;
    color: #ffbb6d;
    padding: 3px;
    font-size: .12rem;
    -webkit-transform-origin-x: 0;
    transform: scale(.94);
  }
  .time{
    width: 1.72rem;
    display: flex;
    justify-content: space-between;
  }
  .tickets-time{
    display: flex;
    color: #9c9c9c;
    font-size: .12rem;
    -webkit-transform-origin-x: 0;
    transform: scale(.94);
  }
  .shouldKnow{
    width: .7rem;
    font-size: .12rem;
    display: flex;
    justify-content: space-between;
    color: #989898;
  }
  .tickets-price{
    width: .62rem;
    height: .5rem;
    display: flex;
    flex-direction: column;
    margin-top: .2rem;
    margin-left: .32rem;
  }
  .tickets-messsge-title{
    width: 2.48rem;
    height: .6rem;
    display: flex;
  }
  .startPrice{
    font-size: .12rem;
    text-align: center;
    color: #747c74ed;
  }
  .tickets-rob{
    width: .62rem;
    height: .24rem;
    color: white;
    font-size: .12rem;
    font-weight: bold;
    background-color: #ff6e00;
    border-radius: 12px 12px;
    text-align: center;
    line-height: .24rem;
  }
  .symbol{
    color: #ff7910;
  }
  b{
    color: #ff7910;
    font-size: .2rem;
  }
  .startPrice-jian{
    font-size: .12rem;
    transform: scale(.94);
    -webkit-transform-origin-x: 0;
    color: #ff6e00;
    text-align: center;
  }
</style>
