<template>
  <div id="zong" class="zongMain">
    <sale-onelevel-flashsale :listb ="lista"></sale-onelevel-flashsale>
    <sale-onelevel-advertisingdisplay></sale-onelevel-advertisingdisplay>
    <sale-onelevel-product-everydaychoose :everytwo="everyone"></sale-onelevel-product-everydaychoose>
    <sale-onelevel-randomdisplay :changetwo="changeone"></sale-onelevel-randomdisplay>
    <sale-onelevel-banner></sale-onelevel-banner>
    <sale-onelevel-goodlist :goodslisttwo="goodslistone"></sale-onelevel-goodlist>
  </div>
</template>

<script>
    import SaleOnelevelFlashsale from "./saleOnelevelFlashsale";
    import SaleOnelevelAdvertisingdisplay from "./saleOnelevelAdvertisingdisplay";
    import SaleOnelevelProductEverydaychoose from "./saleOnelevelProductEverydaychoose";
    import SaleOnelevelRandomdisplay from "./saleOnelevelRandomdisplay";
    import SaleOnelevelBanner from "./saleOnelevelBanner";
    import SaleOnelevelGoodlist from "./saleOnelevelGoodlist";
    export default {
        name: "saleOnelevelPageMain",
      components: {
        SaleOnelevelGoodlist,
        SaleOnelevelBanner,
        SaleOnelevelRandomdisplay,
        SaleOnelevelProductEverydaychoose, SaleOnelevelAdvertisingdisplay, SaleOnelevelFlashsale},
      props:["lista","everyone","changeone","goodslistone"]
    }
</script>

<style scoped>
  .zongMain {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden; }
</style>
