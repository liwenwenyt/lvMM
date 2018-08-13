<template>
  <div class="footer">
    <div class="footer-left">
      <!-- <span class="unselected">您还未选择游玩日期</span> -->
      <span class="checkedSelected">应付：<span>￥<i>{{tm}}</i></span></span>
      <img src="../../assets/img/lc-32.png" alt="">
    </div>
    <div class="footer-right">
      提交订单
    </div>
  </div>
</template>

<script>
    export default {
        name: "lcOrderFooter",
        props:["tm"]
    }
</script>

<style scoped>
  .footer{
    display: flex;
    background: #fff;
    height: 0.5rem;
    border-top: 1px solid #e7e7ef;
  }
  .footer .footer-left{
    width: 60%;
    display: flex;
    align-items: center;
    position: relative;
  }
  /* .footer .footer-left .unselected{
    color: #bfbfbf;
    font-size: .12rem;
    margin-left: .1rem;
} */
  .footer .footer-left .checkedSelected{
    color: #737373;
    font-size: .12rem;
    margin-left: .1rem;
  }
  .footer .footer-left .checkedSelected span{
    color: #ff6600;
  }
  .footer .footer-left .checkedSelected span i{
    font-size: .18rem;
    font-style: normal;
  }
  .footer .footer-left img{
    position: absolute;
    right: .15rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .footer .footer-right{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../../assets/img/lc-31.png) repeat-y;
    color: #fff;
    font-size: .16rem;
  }
</style>
