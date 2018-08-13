<template>
  <div class="goodlistclassTab_bot">
    <a href="#">
      <span>目的地</span>
      <i class="iconfont icon-xiala"></i>
    </a>
    <a href="#">
      <span>出游类型</span>
      <i class="iconfont icon-xiala"></i>
    </a>
    <a href="#">
      <span>价格</span>
      <i class="iconfont icon-xiala"></i>
    </a>
    <a href="#">
      <span>出游月份</span>
      <i class="iconfont icon-xiala"></i>
    </a>
  </div>
</template>

<script>
    export default {
        name: "saleOnelevelGoodlistclassTabbot"
    }
</script>

<style scoped>
  .goodlistclassTab_bot {
    width: 100%;
    height: 0.37rem;
    padding: 0.07rem 0.09rem;
    box-sizing: border-box;
    display: flex; }
  .goodlistclassTab_bot a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%; }
  .goodlistclassTab_bot a span {
    font-size: 0.1rem;
    color: #626262; }
  .goodlistclassTab_bot a i {
    font-size: 0.11rem;
    color: #626262; }
</style>
