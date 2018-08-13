<template>
  <div class="flashSale">
    <div class="flashSale_title">
      <img src="../../../../static/img/sunflashSalepic1.png"/>
      <span>天天特价，限量狂欢</span>
    </div>
    <div class="flashSale_main">
      <sale-onelevel-flashsale-main :listc = "n" v-for="(n,index) in listb"></sale-onelevel-flashsale-main>
    </div>
  </div>
</template>

<script>
    import SaleOnelevelFlashsaleMain from "./saleOnelevelFlashsaleMain";
    export default {
        name: "saleOnelevelFlashsale",
      components: {SaleOnelevelFlashsaleMain},
      props:["listb"]
    }
</script>

<style scoped>
  .flashSale {
    width: 100%;
    height: 2.41rem;
    background: #fff;
    margin-top: 0.09rem;
    margin-bottom: 0.09rem;
    padding-left: 0.08rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; }

  .flashSale_title {
    width: 100%;
    height: 0.4rem;
    display: flex; }
  .flashSale_title img {
    width: 0.96rem;
    height: 0.4rem; }
  .flashSale_title span {
    font-size: 0.08rem;
    color: #b0b0b0;
    padding-top: 0.15rem;
    padding-left: 0.05rem; }
  .flashSale_main {
    height: 2.01rem;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex; }
  .flashSale_main::-webkit-scrollbar {
    display: none; }

</style>
