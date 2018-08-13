<template>
  <div id="zong" class="main">
    <sale-detailspage-swiper :swiper="list"></sale-detailspage-swiper>
    <sale-detailspage-text :text="list"></sale-detailspage-text>
    <sale-detailspage-activitypreferences :active="list"></sale-detailspage-activitypreferences>
    <sale-detailspage-quintessence-review-top></sale-detailspage-quintessence-review-top>
    <sale-detailspage-quintessence-review></sale-detailspage-quintessence-review>
    <sale-detailspage-setmeal :option="list" :idb="ida"></sale-detailspage-setmeal>
    <sale-detailspage-detailsofinstructions></sale-detailspage-detailsofinstructions>
  </div>
</template>

<script>
    import SaleDetailspageSwiper from "./saleDetailspageSwiper";
    import SaleDetailspageText from "./saleDetailspageText";
    import SaleDetailspageActivitypreferences from "./saleDetailspageActivitypreferences";
    import SaleDetailspageQuintessenceReviewTop from "./saleDetailspageQuintessenceReviewTop";
    import SaleDetailspageQuintessenceReview from "./saleDetailspageQuintessenceReview";
    import SaleDetailspageSetmeal from "./saleDetailspageSetmeal";
    import SaleDetailspageDetailsofinstructions from "./saleDetailspageDetailsofinstructions";
    export default {
        name: "saleDetailspageMain",
      props:["list","ida"],
      components: {
        SaleDetailspageDetailsofinstructions,
        SaleDetailspageSetmeal,
        SaleDetailspageQuintessenceReview,
        SaleDetailspageQuintessenceReviewTop,
        SaleDetailspageActivitypreferences, SaleDetailspageText, SaleDetailspageSwiper}
    }
</script>

<style scoped>
  .main {
    -webkit-flex: 1;
    overflow-y: scroll;
    overflow-x: hidden; }
</style>
