<template>
  <div id="setMealP" class="setMeal">
    <sale-detailspage-setmeal-title :title="option"></sale-detailspage-setmeal-title>
    <div class="setMeal_main">
      <sale-detailspage-setmeal-main :ids="ida" :cid="bid" :main="n" :idi="index" v-for="(n,index) in option.options"></sale-detailspage-setmeal-main>
    </div>
  </div>
</template>

<script>
    import SaleDetailspageSetmealTitle from "./saleDetailspageSetmealTitle";
    import SaleDetailspageSetmealMain from "./saleDetailspageSetmealMain";
    export default {
        name: "saleDetailspageSetmeal",
      props:["option","ida","bid"],
      components: {SaleDetailspageSetmealMain, SaleDetailspageSetmealTitle}
    }
</script>

<style scoped>
  .setMeal {
    width: 100%;
    background: #fff;
    margin-bottom: 0.07rem;
    display: flex;
    flex-direction: column; }
  .setMeal_main {
    padding: 0 0.09rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; }
</style>
