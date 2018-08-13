<template>
  <div class="header">
    <div class="space"></div>
    <div class="header-content">
      <i class="iconfont icon-jiantou_zuo"></i>
      订单填写
    </div>
  </div>
</template>

<script>
    export default {
        name: "lcOrderHeader"
    }
</script>

<style scoped>
  .header{
    display: flex;
    height: 0.64rem;
    background: #fff;
    flex-direction: column;
    padding: 0 .1rem;
  }
  .header .space{
    width: 100%;
    height: 0.16rem;
    background: #fff;
  }
  .header .header-content{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: .2rem;
    color: #000;
    flex: 1;
  }
  .header .header-content .iconfont{
    position: absolute;
    color: #000;
    font-size: .2rem;
    left: .1rem;
    top: 55%;
    transform: translateY(-50%);
  }
</style>
