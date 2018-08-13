<template>
    <div class="everydaychoose_main_row">
      <sale-onelevel-product></sale-onelevel-product>
      <sale-onelevel-product></sale-onelevel-product>
    </div>
</template>

<script>
    import SaleOnelevelProduct from "./saleOnelevelProduct";
    export default {
        name: "saleOnelevelProductRow",
      components: {SaleOnelevelProduct}
    }
</script>

<style scoped>
  .everydaychoose_main_row {
    display: flex;
    justify-content: space-between;
    height: 1.85rem;
    margin-bottom: 0.09rem; }
</style>
