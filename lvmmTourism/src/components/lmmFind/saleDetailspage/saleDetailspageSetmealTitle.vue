<template>
  <div class="setMeal_tit">
    <p>可选套餐</p>
    <p>（{{title.optionNum}}个）</p>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageSetmealTitle",
      props:["title"]
    }
</script>

<style scoped>
  .setMeal_tit {
    padding: 0 0.09rem;
    box-sizing: border-box;
    display: flex;
    border-bottom: 0.01rem solid #f2f2f2;
    align-items: center;
    height: 0.32rem; }
  .setMeal_tit p {
    font-size: 0.12rem;
    color: #151515; }
</style>
