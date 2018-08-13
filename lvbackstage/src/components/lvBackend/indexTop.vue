<template>

  <div class="indexTop">
    <div class="three">
      <img src="../../assets/1.png" alt="">
      <p>第一张图</p>
      <p>"2018-08-01T01:07:44.078Z"</p>
    </div>
    <div class="three">
      <img src="../../assets/2.png" alt="">
      <p>第二张图</p>
      <p>"2018-08-01T01:07:44.078Z"</p>
    </div>
    <div class="three">
      <img src="../../assets/3.png" alt="">
      <p>第三张图</p>
      <p>"2018-08-01T01:07:44.078Z"</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexTop"
    }
</script>

<style scoped>
  .indexTop{
    display: flex;
    justify-content: space-around;
  }
  .three{
    width: 30%;
    box-shadow: 1px 1px 2px 2px #eee;
    margin: 30px 0;
  }
  .three img{
    width: 100%;
  }
  .three p{
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .three p:nth-of-type(1){
    color: #000;
  }
  .three p:nth-of-type(2){
    color: #ccc;
  }
</style>
