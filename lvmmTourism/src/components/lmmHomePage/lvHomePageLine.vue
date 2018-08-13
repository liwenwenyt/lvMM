<template>
  <div class="journey">
    <img src="../../assets/img/wytou.png" alt="">
    <div class="journey_middle">
      <p>去三亚看海，这四大套路你一定要知道</p>
      <p>文化和旅游部提醒广大游客海外自助游注意安全</p>
      <p>包教包会的海外拍照秘籍，从摄影小白到老司机全靠它!</p>
      <p>江浙沪唯一的高山滑道漂流，从山顶呼啸而下，挑战400米落差的刺激感</p>
    </div>
    <i class="iconfont icon-jiantou"></i>
  </div>
</template>
<script>
    export default {
        name: "lvHomePageLine"
    }
</script>

<style scoped>
  .journey{
    display: flex;
    background:#fff;
    width: 100%;
    height: 0.46rem;
    border-top:1px solid #f1f1f1;
    overflow: hidden;
    margin-top: 0.21rem;
  }
  .journey img{
    width: 0.35rem;
    height: 0.27rem;
    margin-left: 0.15rem;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
  }
  .journey_middle p{
    font-size:0.12rem;
    color:#393939;
    margin-top: 0.16rem;
    margin-bottom: 0.14rem;
  }
  .journey .iconfont{
    font-size:0.12rem ;
    color: #999999;
    margin-right: 0.1rem;
    margin-left: 0.26rem;
    margin-top: 0.13rem;

  }
</style>
