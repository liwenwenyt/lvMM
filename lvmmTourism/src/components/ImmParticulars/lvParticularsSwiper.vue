<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../../static/img/Hefirst.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Hesecond.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Hethirdly.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Hefourthly.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Hefifth.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Hesixth.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Heseventh.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Heeighth.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Heninth.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/Hetenth.jpg" alt="">
            </div>
        </div>
        <div class="pic">
                <i class="iconfont icon-14" style="font-size: .14rem"></i>
                <span style="font-size: .12rem">1/10</span>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper/dist/js/swiper'
    export default{
        mounted(){
            new Swiper(".swiper-container",{
                direction: 'horizontal',
            })
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 2.36rem;
    }
    .pic{
        position: absolute;
        width: .52rem;
        height: .18rem;
        background-color: rgba(0, 0, 0, .2);
        bottom: 14px;
        right:10px;
        border-radius: 8px;
        z-index: 222;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
</style>
