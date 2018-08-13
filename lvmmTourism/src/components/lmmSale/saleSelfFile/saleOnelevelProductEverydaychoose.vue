<template>
  <div class="everydaychoose">
    <div class="everydaychoose_title">
      <img src="../../../../static/img/suneverydaychoosepic1.png"/>
      <span>不选贵的，只选对的</span>
    </div>
    <div class="everydaychoose_main">
      <sale-onelevel-product :everythree="n" v-for="(n,index) in everytwo"></sale-onelevel-product>
    </div>
  </div>
</template>

<script>
    import SaleOnelevelProductRow from "./saleOnelevelProductRow";
    import SaleOnelevelProduct from "./saleOnelevelProduct";
    export default {
        name: "saleOnelevelProductEverydaychoose",
      components: {SaleOnelevelProduct, SaleOnelevelProductRow},
      props:["everytwo"]
    }
</script>

<style scoped>
  .everydaychoose {
    width: 100%;
    /*height: 4.25rem;*/
    background: #fff;
    padding-left: 0.08rem;
    padding-right: 0.08rem;
    box-sizing: border-box;
    margin-bottom: 0.09rem;
    display: flex;
    flex-direction: column; }

  .everydaychoose_title {
    width: 100%;
    height: 0.4rem;
    display: flex; }
  .everydaychoose_title img {
    width: 0.96rem;
    height: 0.4rem; }
  .everydaychoose_title span {
    font-size: 0.08rem;
    color: #b0b0b0;
    padding-top: 0.15rem;
    padding-left: 0.05rem; }

  .everydaychoose_main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
