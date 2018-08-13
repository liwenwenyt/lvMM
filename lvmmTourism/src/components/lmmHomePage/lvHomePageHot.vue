<template>
  <div class="hot_top">
    <div class="hot_top_left">
      <h4>—热门旅行地—</h4>
      <p>为您推荐当季全球好出去</p>
    </div>
    <i class="iconfont icon-rightarrow"></i>
  </div>
</template>

<script>
    export default {
        name: "lvHomePageHot"
    }
</script>

<style scoped>
  .hot_top{
    display: flex;
    height: 0.61rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: #fff;
  }
  .hot_top_left{
    display:flex;
    flex-direction: column;
    margin-left: 1.29rem;
    text-align: center;
  }
  .hot_top_left h4{
    font-size:0.16rem ;
    color: #333333;
  }
  .hot_top_left p{
    font-size:0.1rem ;
    color: #c0c0c0;
  }
  .hot_top .iconfont{
    font-size:0.2rem ;
    color: #d3d3d3;
    margin-right: 0.1rem;
  }
</style>
