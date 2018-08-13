<template>
  <div class="detailsOfInstructions">
    <sale-detailspage-detailsofinstructions-title></sale-detailspage-detailsofinstructions-title>
    <sale-detailspage-details-textidea></sale-detailspage-details-textidea>
    <sale-detailspage-details-textidea1></sale-detailspage-details-textidea1>
    <sale-detailspage-details-textidea2></sale-detailspage-details-textidea2>
  </div>
</template>

<script>
    import SaleDetailspageDetailsofinstructionsTitle from "./saleDetailspageDetailsofinstructionsTitle";
    import SaleDetailspageDetailsTextidea from "./saleDetailspageDetailsTextidea";
    import SaleDetailspageDetailsTextidea1 from "./saleDetailspageDetailsTextidea1";
    import SaleDetailspageDetailsTextidea2 from "./saleDetailspageDetailsTextidea2";
    export default {
        name: "saleDetailspageDetailsofinstructions",
      components: {
        SaleDetailspageDetailsTextidea2,
        SaleDetailspageDetailsTextidea1,
        SaleDetailspageDetailsTextidea, SaleDetailspageDetailsofinstructionsTitle}
    }
</script>

<style scoped>
  .detailsOfInstructions {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff; }
</style>
