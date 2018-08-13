<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img :src="swiper.swpic1"/>
      </div>
      <div class="swiper-slide">
        <img :src="swiper.swpic2"/>
      </div>
      <div class="swiper-slide">
        <img :src="swiper.swpic3"/>
      </div>
      <div class="swiper-slide">
        <img :src="swiper.swpic4"/>
      </div>
      <div class="swiper-slide">
        <img :src="swiper.swpic5"/>
      </div>
      <div class="swiper-slide">
        <img :src="swiper.swpic6"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" style="bottom: -17px;"></div>
  </div>
</template>

<script>
  import Swiper from"swiper/dist/js/swiper";
    export default {
        name: "saleDetailspageSwiper",
      props:["swiper"],
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
//  direction: 'vertical',
//  loop: true,
          autoplay:true,

          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 1.76rem;
    margin-bottom: 1px; }

  .swiper-slide img {
    width: 3.75rem;
    height: 1.76rem; }
</style>
