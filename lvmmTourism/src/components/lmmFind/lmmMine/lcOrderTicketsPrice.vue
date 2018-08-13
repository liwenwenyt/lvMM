<template>
  <div>
  <div class="section-ticket-num">
    <div class="section-ticket-num-box">
      <span class="box-left">{{item.title}}</span>
      <span class="box-right">￥<span id="ticketsPrice">{{item.price}}</span></span>
    </div>
    <div class="section-ticket-num-box section-ticket-num-box2">
      <span class="box-left">数量：</span>
      <span class="box-right">
        <a href="javascript:;" class="minus" @click="minus" >-</a>
        <span class="centerNum">{{item.qal}}</span>
        <a href="javascript:;" class="add" @click="add">+</a>
      </span>
    </div>
    <div class="section-ticket-num-box">
      <span class="box-left">入园须知、退改说明</span>
      <i class="iconfont icon-you box-right inform"></i>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "lcOrderTicketsPrice",
        props:["item"],
        methods:{
        add(i){
          this.item.qal++;
          this.$emit("lAdd",i);
        },
        minus(i){
          if(this.item.qal<=1){
            this.item.qal = 1;
          }else{
           this.item.qal--;
            this.$emit("lminus",i)
          }
        }
      }
    }
</script>

<style scoped>
  .section-ticket-num{
    height: 1.32rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    flex-direction: column;
  }
 .section-ticket-num .section-ticket-num-box{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.section-ticket-num .section-ticket-num-box2{
    box-sizing: border-box;
    border-top: .02rem solid #f2f2f2;
    border-bottom: .02rem solid #f2f2f2;
  }
 .section-ticket-num .section-ticket-num-box .box-left{
    font-size: .14rem;
    color: #3b3c3b;
  }
.section-ticket-num .section-ticket-num-box .box-right{
    font-size: .12rem;
    color: #c40044;
    display: flex;
  }
.section-ticket-num .section-ticket-num-box .box-right span{
    font-size: .14rem;
    color: #c40044;
  }
.section-ticket-num .section-ticket-num-box .inform{
    font-size: .20rem;
    color: #676c6f;
  }
.section-ticket-num .section-ticket-num-box2 .box-right a{
    width: 0.23rem;
    height: 0.23rem;
    border: .02rem solid #e8e8e8;
    border-radius: .03rem;
    line-height: .23rem;
    text-align: center;
    display: inline-block;
    vertical-align: bottom;
    font-size: .14rem;
  }
  .section-ticket-num .section-ticket-num-box2 .box-right a:nth-of-type(1){
    border-right: 0;
    color: #c7c7c6;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
.section-ticket-num .section-ticket-num-box2 .box-right a:nth-of-type(2){
    border-left: 0;
    color: #363636;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .section-ticket-num .section-ticket-num-box2 .box-right .centerNum{
    border: .02rem solid #d8d8d8;
    color: #d1006d;
    width: 0.38rem;
    height: 0.22rem;
    font-size: .12rem;
    text-align: center;
    vertical-align: bottom;
    line-height: .22rem;
  }
</style>
