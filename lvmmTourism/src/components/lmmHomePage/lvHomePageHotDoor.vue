<template>
  <div class="wrapper_box">
    <img src="../../assets/img/wyhot01.jpg" alt="" class="imgsbox">
    <div class="wrapper_box_pro">
      <h3>{{hotthree.title}}</h3>
      <p>{{hotthree.go}}</p>
    </div>
    <div class="wrapper_box_two">
      <div class="wrapper_box_small">
        <img :src="hotthree.pico" alt="">
        <p>{{hotthree.cont1}}</p>
        <div class="wrapper_box_two_bottom">
          <span>{{hotthree.price1}}</span>
          <span>起</span>
        </div>
      </div>
      <div class="wrapper_box_small">
        <img v-lazy="hotthree.pict" alt="">
        <p>{{hotthree.cont2}}</p>
        <div class="wrapper_box_two_bottom">
          <span>{{hotthree.price2}}</span>
          <span>起</span>
        </div>
      </div>
    </div>
    <!-- 更多西安好产品 -->
    <div class="more">
      <p>{{hotthree.more}}</p>
      <img src="../../assets/img/wymore.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvHomePageHotDoor",
      props:["hotthree"]

    }
</script>

<style scoped>

  .hot_top_left h4{
    font-size:0.16rem ;
    color: #333333;
  }
  .hot_top_left p{
    font-size:0.1rem ;
    color: #c0c0c0;
  }
  .hot_top .iconfont{
    font-size:0.2rem ;
    color: #d3d3d3;
    margin-right: 0.1rem;
  }
  .hot_wrapper{
    display: flex;
    /*flex-shrink: 1;*/
    overflow-x: scroll;
    background: #fff;

  }
  .hot_wrapper::-webkit-scrollbar{
    display: none;
  }
  .wrapper_box{
    display: flex;
    flex-direction: column;
    margin-left: 0.1rem;
    position: relative;

  }
  .imgsbox{
    width:3.44rem;
    height: 1.41rem;
  }
  .wrapper_box_pro{
    display: flex;
    position: absolute;
    top:0.2rem;
    left: 0.18rem;
    align-items: center;
  }
  .wrapper_box_pro h3{
    font-size:0.19rem ;
    color:#fff ;
    margin-right: 0.22rem;
  }
  .wrapper_box_pro p{

    font-size:0.1rem;
    color:#fff ;
    margin-left: 0.06rem;
  }
  .wrapper_box_two{
    display: flex;
    margin-top:-0.6rem;
    z-index: 100;
  }
  .hot_wrapper .wrapper_box:last-child{
    padding-right: 0.12rem;
  }
  .wrapper_box_small{
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 1.58rem;
    /*padding: 0.04rem;*/
    padding:0.04rem 0.04rem 0rem 0.04rem;
    margin-left: 0.09rem;
    box-sizing: border-box;
    box-shadow: 0 0 1rem #f4f4f4;
  }

  .wrapper_box_small img{
    width:1.51rem ;
    height:1rem;
  }
  .wrapper_box_small p{
    font-size:0.11rem ;
    color: #393939;
    /*text-indent: 0.11rem;*/
    margin-top: 0.07rem;
    width: 100%;
    height: 0.2rem;
    /*display: flex;*/
    vertical-align: center;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    box-sizing: border-box;
  }
  .wrapper_box_two_bottom{
    display: flex;
    align-items: center;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
    margin-left: 0.02rem;
  }
  .wrapper_box_two_bottom span:nth-child(1){
    font-size:0.15rem ;
    color: #ff6600;

  }
  .wrapper_box_two_bottom span:nth-child(2){
    font-size: 0.11rem;
    color:#aaaaaa ;

  }
  /*更多西安好产品*/
  .more{
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.5rem;
    justify-content: center;
  }
  .more p{
    font-size:0.11rem ;
    color:#63a6f8;
  }
  .more img{
    width: 0.14em;
    height: 0.14rem;
    margin-left: 0.07rem;
  }

</style>
