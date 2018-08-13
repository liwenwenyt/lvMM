<template>
  <div id="headerchange" class="header">
    <router-link to="/find">
      <div class="header_back">
        <i class="iconfont icon-jiantou_zuo"></i>
      </div>
    </router-link>
    <h3 class="headerC_Text">产品详情</h3>
    <div class="header_more" href="#">
      <a class="header_more_a" href="#">
        <i class="iconfont icon-shoucang"></i>
      </a>
      <a class="header_more_a" href="#">
        <i class="iconfont icon-fenxiang"></i>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageHeader",
      mounted(){
        $(function(){

          $(".header .headerC_Text").css("visibility","hidden");

          $("#zong").scroll(function(){
            if($(this).scrollTop() >= 100){
              $(".header .headerC_Text").css("visibility","visible");
              $(".header").css("background","#fff");
              $(".header .header_back").css("background","#fff").children().css("color","#333");
              $(".header .header_more .header_more_a i").css("color","#333");
            }else if($(this).scrollTop() == 0){
              $(".header .headerC_Text").css("visibility","hidden");
              $(".header").css("background","transparent");
              $(".header .header_back").css({"background":"#333","width":"0.3rem","height":"0.3rem","border-radius":"50%","opacity":"0.7"}).children().css("color","#fff");
              $(".header .header_more .header_more_a i").css("color","#fff");
            }
          })
        })
      }
    }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 0.38rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1111; }

  .header_back {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: #000;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center; }
  .header_back i {
    font-size: 0.25rem;
    color: #fff; }

  .headerC_Text {
    justify-content: center;
    align-items: center;
    width: 2.63rem;
    height: 0.38rem;
    display: flex;
    font-size: 0.16rem;
    color: #2d2d2d;
    font-weight: 100;
    margin: 0;
    z-index: 111; }

  .header_more {
    width: 0.62rem;
    height: 0.38rem;
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .header_more a {
    display: flex; }
  .header_more a i {
    font-size: 0.2rem;
    color: #fff; }
  .header_more a:first-child {
    display: flex; }
  .header_more a:first-child i {
    font-size: 0.3rem;
    color: #fff; }
  .header_more a:last-child {
    display: flex; }
  .header_more a:last-child i {
    font-weight: 600; }
</style>
