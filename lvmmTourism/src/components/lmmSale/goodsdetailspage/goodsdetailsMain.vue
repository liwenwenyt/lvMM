<template>
    <div class="zong">
      <goodsdetails-main-banner></goodsdetails-main-banner>
      <goodsdetalis-main-details :itema="item"></goodsdetalis-main-details>
    </div>
</template>

<script>
    import GoodsdetailsMainBanner from "./goodsdetailsMainBanner";
    import GoodsdetalisMainDetails from "./goodsdetalisMainDetails";
    export default {
        name: "goodsdetailsMain",
      components: {GoodsdetalisMainDetails, GoodsdetailsMainBanner},
      props:["item"]
    }
</script>

<style scoped>
.zong{
  flex:1;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
