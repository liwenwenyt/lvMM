<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/img/wybanner01.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/wybanner02.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/wybanner03.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/wybanner04.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/wybanner05.png" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" style="bottom: -0.10rem"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper'
  export default {
    name: "lvHomePageSwiper",
    mounted(){
      new Swiper (".swiper-container", {
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
  .swiper-container{
    width: 100%;
    height: 1.5rem;
  }
  .swiper-container .swiper-wrapper img{
    width: 100%;
    height: 1.5rem;
  }
</style>
