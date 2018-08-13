<template>
  <div class="goodlist">
    <sale-onelevel-goodlistclass-tab></sale-onelevel-goodlistclass-tab>
    <sale-onelevel-goodlistclass-main :goodslistthree="goodslisttwo"></sale-onelevel-goodlistclass-main>
  </div>
</template>

<script>
    import SaleOnelevelGoodlistclassTab from "./saleOnelevelGoodlistclassTab";
    import SaleOnelevelGoodlistclassMain from "./saleOnelevelGoodlistclassMain";
    export default {
        name: "saleOnelevelGoodlist",
      components: {SaleOnelevelGoodlistclassMain, SaleOnelevelGoodlistclassTab},
      props:["goodslisttwo"]
    }
</script>

<style scoped>
  .goodlist {
    width: 100%;
    display: flex;
    background: #fff;
    flex-direction: column; }
</style>
