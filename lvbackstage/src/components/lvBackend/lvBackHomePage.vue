<template>
    <div>
      <p class="shouye">首页</p>
      <index-top></index-top>
      <echarts></echarts>
    </div>
</template>

<script>
    import IndexTop from "./indexTop";
    import Echarts from "./echarts";
    export default {
        name: "rightContent",
      components: {Echarts, IndexTop}
    }
</script>

<style scoped>
  .shouye{
    font-size: 14px;
    font-weight: 600;
  }
</style>
