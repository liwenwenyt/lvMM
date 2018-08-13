<template>
  <div>
  <div class="nav">
    <div class="nav_top">
      <div class="nav_top_left">
        <a href="#">门票</a>
      </div>
      <div class="nav_top_right">
        <a href="#">境外门票</a>
        <a href="#">火车票*汽车票</a>
        <a href="#">国内机票</a>
        <a href="#">游轮</a>
      </div>
    </div>
    <div class="nav_middle">
      <a href="#">酒店</a>
      <a href="#">酒+景</a>
      <a href="#">机酒自由行</a>
    </div>
    <div class="nav_bottom">
      <a href="#">周边游</a>
      <a href="#">国内游</a>
      <a href="#">出境游</a>
      <a href="#">康旅专区</a>
      <a href="#">定制游</a>
      <a href="#">跟团游</a>
    </div>
  </div>
  </div>
</template>

<script>
    import LvHomePageSectionOne from "./lvHomePageSectionOne";
    export default {
        name: "lvHomePageNav",
      components: {LvHomePageSectionOne}

    }
</script>

<style scoped>
  .nav{
    width: 100%;
    /*height: 2.13rem;*/
    border-top-right-radius: 0.1rem;
    border-top-left-radius: 0.1rem;
    background: #fff;
    top: -0.07rem;
    z-index: 100;
    position: relative;
    box-sizing: border-box;
    padding:0.06rem;
  }
  .nav a{
    font-size: 0.13rem;
    color: #fff;
  }
  .nav_top{
    display: flex;
  }
  .nav_top_left{
    display: flex;
    background: url(../../assets/img/wydoorbg.png) center top no-repeat;
    background-size:100%;
    padding-top: 0.15rem;
    padding-left: 0.18rem;
    box-sizing: border-box;
    width: 1.2rem;
    height: 0.88rem;
    border-right: 1px solid #fe9cb0;
  }
  .nav_top_left a{
    width: 1.2rem;
    height: 0.88rem;

  }
  .nav_top_right{
    display: flex;
    flex-wrap: wrap;
  }
  .nav_top_right a{
    width:1.2rem ;
    /*height:0.40rem;*/
    background: #fe5d6e;
    text-align: center;
    line-height: 0.37rem;
    border-left: 1px solid #fe9cb0;
  }
  .nav_top_right a:nth-child(1){
    border-bottom: 1px solid #fe9cb0;
  }
  .nav_top_right a:nth-child(2){
    border-top-right-radius: 0.09rem;
    border-bottom: 1px solid #fe9cb0;
  }
  .nav_middle{
    display: flex;
    margin-top:-0.06rem;
  }
  .nav_middle a{
    width: 1.2rem;
    height: 0.48rem;
    background: #4b97eb;
    text-align:center;
    line-height: 0.48rem

  }
  .nav_middle a:nth-child(1){
    background: url(../../assets/img/wyhostbg.png) center top no-repeat;
    background-size:100%;
    text-indent: -0.58rem;
  }
  .nav_middle a:nth-child(2){
    border-left: 1px solid #9bc4f4;
    border-right: 1px solid #9bc4f4;
    background-size:100%;
  }
  .nav_middle a:nth-child(3){
    border-top-right-radius: 0.09rem;
  }
  .nav_bottom {
    display: flex;
    flex-wrap: wrap;
    margin-top: -0.06rem;
  }
  .nav_bottom a{
    width: 1.2rem;
    height: 0.4rem;
    background: #22b79a;
    line-height: 0.4rem;
    text-align: center;
  }
  .nav_bottom a:nth-child(1){
    background: url(../../assets/img/wynearbybg.png) center top no-repeat;
    background-size:100%;
    box-sizing: border-box;
    border-bottom: 1px solid #fe9cb0;
    text-indent: -0.5rem;
  }


  .nav_bottom a:nth-child(2){
    border-bottom: 1px solid #90dcbf;
    border-right: 1px solid #90dcbf;
    border-left: 1px solid #90dcbf;

  }
  .nav_bottom a:nth-child(3){
    border-bottom: 1px solid #90dcbf;
    border-top-right-radius: 0.09rem;

  }
  .nav_bottom a:nth-child(5){
    border-left: 1px solid #90dcbf;
    border-right: 1px solid #90dcbf;
  }
  .nav_bottom a:nth-child(4){
    border-bottom-left-radius: 0.09rem;
    text-indent: -0.40rem;
  }
  .nav_bottom a:nth-child(6){
    border-bottom-right-radius: 0.09rem;
  }
</style>
