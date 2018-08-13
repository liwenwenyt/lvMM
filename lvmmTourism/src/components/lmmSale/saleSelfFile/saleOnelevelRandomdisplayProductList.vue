<template>
  <div class="randomDisplay_main">
    <div class="randomDisplay_main_top">
      <p>门票 | 旅行的深度，决定回味的长度，山峦，海洋与田野，永远都会在这里等你。</p>
      <p @click="change(a)">换一换</p>
    </div>
    <div class="randomDisplay_main_bot">
      <sale-onelevel-randomdisplay-product :changefour="p" v-for="(p,index) in changethree"></sale-onelevel-randomdisplay-product>
    </div>
  </div>
</template>

<script>

  import SaleOnelevelRandomdisplayProduct from "./saleOnelevelRandomdisplayProduct";
    export default {
        name: "saleOnelevelRandomdisplayProductList",
      components: {SaleOnelevelRandomdisplayProduct},
      props:["changethree"]
    }
</script>

<style scoped>
  .randomDisplay_main {
    display: flex;
    flex-direction: column; }
  .randomDisplay_main_top {
    height: 0.46rem;
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .randomDisplay_main_top p:first-child {
    width: 2.76rem;
    font-size: 0.1rem;
    color: #515151;
    text-indent: 0.1rem; }
  .randomDisplay_main_top p:last-child {
    font-size: 0.1rem;
    color: #d8107a;
    width: 0.55rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border: 1px solid #d8107a;
    border-radius: 0.12rem; }
  .randomDisplay_main_bot {
    display: flex;
    justify-content: space-between; }
</style>
