<template>
  <div class="header">
    <h3>特卖会</h3>
    <a class="header_city" href="#">
      <span>西安</span>
      <i class="iconfont icon-xiala"></i>
    </a>
  </div>
</template>

<script>
    export default {
        name: "saleHeader"
    }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 0.44rem;
    display: flex;
    background: #fff; }

  .header h3 {
    margin-left: 1.63rem;
    line-height: 0.44rem;
    font-size: 0.16rem;
    color: #2d2d2d;
    font-weight: 100; }

  .header_city {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.15rem; }

  .header_city span {
    font-size: 0.12rem;
    color: #cd0067; }

  .header_city i {
    font-size: 0.08rem;
    color: #cd0067; }
</style>
