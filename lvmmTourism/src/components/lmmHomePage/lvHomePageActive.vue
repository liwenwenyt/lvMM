<template>
  <div class="active">
    <div class="hot_top">
      <div class="hot_top_left">
        <h4>—精选活动—</h4>
        <p>特惠活动全攻略</p>
      </div>
    </div>
    <div class="swiper-containerB">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/wytwo01.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/wytwo02.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/wytwo03.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/wytwo04.png" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!--<div class="swiper-pagination" style="top:2.53rem"></div>-->
    </div>
    <div class="active_bottom">
      <div class="active_bottom_one">
        <h5>天天特价</h5>
        <p>每日限时秒杀</p>
        <img src="../../assets/img/wyactive01.png" alt="">
      </div>
      <div class="active_bottom_one">
        <h5>天天特价</h5>
        <p>每日限时秒杀</p>
        <img src="../../assets/img/wyactive02.png" alt="">
      </div>
      <div class="active_bottom_one">
        <h5>天天特价</h5>
        <p>每日限时秒杀</p>
        <img src="../../assets/img/wyactive03.png" alt="">
      </div>
      <div class="active_bottom_one">
        <h5>天天特价</h5>
        <p>每日限时秒杀</p>
        <img src="../../assets/img/wyactive04.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>

    import Swiper from 'swiper/dist/js/swiper'
    export default {
      name: "lvHomePageActive",
      mounted(){
        new Swiper (".swiper-containerB", {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay:true,
        })
      }
    }
</script>

<style scoped>
  .hot_top{
    display: flex;
    height: 0.61rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: #fff;
  }
  .hot_top_left{
    display:flex;
    flex-direction: column;
    margin-left: 1.29rem;
    text-align: center;
  }
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

  .swiper-containerB{
    box-sizing: border-box;
    width:100%;
    height:1.01rem;
    overflow: hidden;
    background: #fff;
    padding-left: 0.1rem;
    box-sizing: border-box;
  }

  .swiper-containerB .swiper-wrapper img{
    width:3.56rem ;
    height: 0.7rem;
  }

  .active_bottom{
    display: flex;
  }
  .active_bottom_one{
    width: 25%;
    height: 1.12rem;
    background: #fff;
    border-right: 1px solid #f1f1f2;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }
  .active_bottom .active_bottom_one:last-child{
    border: none;
  }
  .active_bottom_one h5{
    font-size: 0.1rem;
    color:#333 ;
    font-weight: 100;
    margin-top: 0.08rem;
  }
  .active_bottom_one p{
    font-size:0.1rem ;
    color: #cdcdcd;
    font-weight: 100;
    margin-top: 0.04rem;
  }
  .active_bottom_one img{
    width:0.54rem ;
    height:0.54rem ;
    margin-top: 0.06rem;
  }
</style>
