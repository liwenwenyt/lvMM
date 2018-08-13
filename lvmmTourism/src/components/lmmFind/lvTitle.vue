<template>
  <div class="title">
    <div class="title_cont">
      <span></span>
      <img src="../../assets/img/we_liang.jpg" alt="">
      <h5>凉夏季</h5>
      <span></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvTitle"
    }
</script>

<style scoped>
  .title{
    width: 100%;
    height: 0.49rem;
    display: flex;
    justify-content: center;
  }
  .title_cont{
    display: flex;
    align-items: center;
  }
  .title_cont span{
    width: 0.15rem;
    height: 2px;
    background: #c3c3c7;
  }
  .title_cont img{
    width: 0.17rem;
    height: 0.2rem;
    margin-left: 0.1rem;
    margin-right: 0.04rem;
  }
  .title_cont h5{
    font-size: 0.14rem;
    color: #131311;
    margin-right: 0.1rem;
  }
</style>
