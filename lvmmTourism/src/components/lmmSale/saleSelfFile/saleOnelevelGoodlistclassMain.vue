<template>
  <div class="goodlistclassMain">
    <sale-onelevel-goodlistclass-main-product :goodsn="p" :goodsid="index" v-for="(p,index) in goodslistthree"></sale-onelevel-goodlistclass-main-product>
  </div>
</template>

<script>
    import SaleOnelevelGoodlistclassMainProduct from "./saleOnelevelGoodlistclassMainProduct";
    export default {
        name: "saleOnelevelGoodlistclassMain",
      components: {SaleOnelevelGoodlistclassMainProduct},
      props:["goodslistthree"]
    }
</script>

<style scoped>
  .goodlistclassMain {
    width: 100%;
    padding: 0 0.09rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; }
</style>
