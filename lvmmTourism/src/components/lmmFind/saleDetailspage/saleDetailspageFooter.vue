<template>
  <div class="footer">
    <div class="footer_left">
      <i class="iconfont icon-shezhizaixianzixun"></i>
      <a href="#">咨询</a>
    </div>
    <div class="footer_right">
      <a href="#setMealP">选择套餐</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageFooter"
    }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 0.4rem;
    display: flex; }

  .footer_left {
    width: 30%;
    height: 0.4rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; }
  .footer_left i {
    font-size: 0.19rem;
    color: #444; }
  .footer_left a {
    font-size: 0.1rem;
    color: #999999; }

  .footer_right {
    width: 70%;
    height: 0.4rem;
    background: #d30775;
    display: flex;
    justify-content: center;
    align-items: center; }
  .footer_right a {
    font-size: 0.14rem;
    color: #fff; }
</style>
