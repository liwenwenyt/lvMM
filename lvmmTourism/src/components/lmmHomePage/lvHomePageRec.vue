<template>
  <div class="recommend">
    <div class="recommend_box">
      <img src="../../assets/img/wylmm.png" alt="">
      <div class="recommend_box_center">
        <p>为您推荐的当地门市</p>
        <h4>西安驴妈妈西仪坊营业部</h4>
      </div>
      <i class="iconfont icon-jiantou"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvHomePageRec"
    }
</script>

<style scoped>
  .recommend{
    padding-top: 0.10rem;
    padding-bottom: 0.1rem;
    width: 100%;
    background: #efeff7;
  }
  .recommend_box{
    width: 100%;
    height: 0.6rem;
    background: #fff;
    display: flex;
    justify-content: space-between;

  }

  .recommend_box img{
    width: 0.72rem;
    height: 0.6rem;
  }
  .recommend_box_center{
    display: flex;
    flex-direction: column;
    margin-left: -1.25rem;
  }
  .recommend_box_center p{
    font-size:0.1rem ;
    color: #c0c0c0;
    margin-top: 0.12rem;
  }
  .recommend_box_center h4{
    font-size:0.12rem ;
    color: #333333;
    margin-top: 0.06rem;
    font-weight: 100;
  }
  .recommend_box .iconfont{
    font-size:0.12rem ;
    color: #999999;
    margin-right: 0.1rem;
    margin-top:0.24rem;
  }

</style>
