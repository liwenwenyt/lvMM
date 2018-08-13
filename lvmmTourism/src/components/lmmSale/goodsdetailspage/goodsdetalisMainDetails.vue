<template>
  <div class="goodsdetalis">
    <goodsdetails-main-details-title></goodsdetails-main-details-title>
    <goodsdetalis-main-details-main :itemb="b" v-for="(b,index) in itema"></goodsdetalis-main-details-main>
  </div>
</template>

<script>
    import GoodsdetailsMainDetailsTitle from "./goodsdetailsMainDetailsTitle";
    import GoodsdetalisMainDetailsMain from "./goodsdetalisMainDetailsMain";
    export default {
        name: "goodsdetalisMainDetails",
      components: {GoodsdetalisMainDetailsMain, GoodsdetailsMainDetailsTitle},
      props:["itema"]
    }
</script>

<style scoped>
  .goodsdetalis {
    width: 100%;
    background: #fff;
    border-bottom:0.01rem solid #f4f4f4;
    display: flex;
    flex-direction: column; }
</style>
