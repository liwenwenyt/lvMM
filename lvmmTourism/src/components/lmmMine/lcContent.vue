<template>
  <div class="content">
    <div class="content-top">
      <div class="content-icon">
        <a href="javascript:;"><i class="iconfont icon-shezhi"></i></a>
        <a href="javascript:;"><i class="iconfont icon-xinxi"></i></a>
      </div>
      <img src="../../assets/img/lc-15.png" alt="" class="content-userPhoto">
      <div class="content-page">
        <img src="../../assets/img/lc-1.png" alt="" class="content-page-bg">
        <div class="content-page-word">
          <p class="content-phone">151****6415</p>
          <div class="content-huiyuan">
            <a href="javascript:;"><img src="../../assets/img/lc-14.png" alt=""></a>
            <a href="javascript:;">
              <i class="iconfont icon-shumiaofaya"></i>
              成长值
              <span>0</span>
            </a>
          </div>
          <p class="content-signature">“旅行的意义，就在于不断发现新的世界和新的自己。”</p>
        </div>
      </div>
      <div class="content-hint">
        <i class="iconfont icon-gantanhao"></i>
        资料完成度30%，资料完善可以获得<span>1000积分</span>;
        <i class="iconfont icon-you"></i>
      </div>
    </div>
    <div class="content-order">
      <div class="content-order-top">
        <span>我的订单</span>
        <span>全部订单<i class="iconfont icon-you"></i></span>
      </div>
      <div class="content-order-bottom">
        <a href="javascript:;">
          <img src="../../assets/img/lc-16.png" alt="">
          待审核
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-17.png" alt="">
          待支付
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-18.png" alt="">
          待出行
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-19.png" alt="">
          待点评
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-20.png" alt="">
          退款
        </a>
      </div>
    </div>
    <div class="content-quan">
      <div class="content-quan-top">
            <span class="box">
                <span class="boxLeft">
                    <i class="iconfont icon-youhuiquan"></i>
                    优惠券
                </span>
                <span class="boxRight">
                    14张
                    <i class="iconfont icon-you"></i>
                </span>
            </span>
        <span class="box">
                <span class="boxLeft">
                    <i class="iconfont icon-jifen"></i>积分
                </span>
                <span class="boxRight">
                    105分
                    <i class="iconfont icon-you"></i>
                </span>
            </span>
      </div>
      <div class="content-quan-bottom">
            <span>
                <i class="iconfont icon-hongbao"></i>
                我的钱包
            </span>
        <span>
                权益/余额/奖金/礼品卡
                <i class="iconfont icon-you"></i>
            </span>
      </div>
    </div>
    <div class="content-func">
      <div class="content-func-title">
        常用功能
      </div>

      <div class="func-list">
        <a href="javascript:;">
          <i class="iconfont icon-shoucang1"></i>
          我的收藏
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-lishi"></i>
          浏览历史
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-zuanshi"></i>
          会员俱乐部
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-liwu"></i>
          领会员权益
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-geren_blue"></i>
          常用信息
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-fuwusheshishuaqia-"></i>
          小驴白条
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-shu"></i>
          我的游记
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-icon-test"></i>
          我的发票
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-dian"></i>
          门市查询
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-woshou"></i>
          供应商合作
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-xiazai"></i>
          离线游记
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-kefu1"></i>
          在线客服
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-jiudian"></i>
          信用住
        </a>
      </div>
    </div>
    <div class="content-banner">
      <img src="../../assets/img/lc-21.png" alt="">
    </div>
    <div class="content-member">
      <div class="content-member-title">
        <img src="../../assets/img/lc-22.png" alt="">
      </div>
      <div class="content-member-details">
        <a href="javascript:;">
          <img src="../../assets/img/lc-23.png" alt="">
          专属活动
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-24.png" alt="">
          首单返现
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-25.png" alt="">
          生日礼包
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-26.png" alt="">
          等级优惠券
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-27.png" alt="">
          等级专享价
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-28.png" alt="">
          邮轮优先登船
        </a>
        <a href="javascript:;">
          <img src="../../assets/img/lc-29.png" alt="">
          WiFi特权
        </a>
      </div>
    </div>
    <div class="content-bottom">
      <img src="../../assets/img/lc-30.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "lcContent"
    }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-X: hidden;
    overflow-Y: scroll;
  }
  .content .content-top{
    width: 100%;
    height: 2.52rem;
    position: relative;
    background: url(../../assets/img/lc-2.png) no-repeat;
    background-size: 100%;
    display: flex;
  }
  .content-top .content-icon{
    position: absolute;
    right: 0;
    top: 0;
    height: 0.47rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #545454;
  }
  .content-top .content-icon a{
    display: flex;
    color: #fff;
  }
  .content-top .content-icon a .iconfont{
    font-size: .2rem;
  }
  .content-top .content-page{
    width: 88.8%;
    height: 1.46rem;
    background: #fff;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: .05rem;
    display: flex;
    flex-direction: column;
  }
  .content-top .content-page .content-page-bg{
    width: 100%;
    height: 0.32rem;
  }
  .content-top .content-page .content-page-word{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .content-top .content-page .content-page-word .content-phone{
    font-size: .16rem;
    color: #020202;
  }
  .content-top .content-page .content-page-word .content-huiyuan{
    display: flex;
  }
  .content-top .content-page .content-page-word .content-huiyuan a{
    width: 0.82rem;
    height: 0.23rem;
    margin: 0 .05rem;
  }
  .content-top .content-page .content-page-word .content-huiyuan a:nth-of-type(1){
    display: flex;
  }
  .content-top .content-page .content-page-word .content-huiyuan a:nth-of-type(2){
    box-sizing: border-box;
    border: .01rem solid #e7e7e7;
    border-radius: .1rem;
    text-align: center;
    line-height: .22rem;
    font-size: .12rem;
    color: #3c3c3c;
    position: relative;
    text-indent: .05rem;
  }
  .content-top .content-page .content-page-word .content-huiyuan a img{
    width: 100%;
    height: 100%;
  }
  .content-top .content-page .content-page-word .content-huiyuan a .icon-shumiaofaya{
    position: absolute;
    font-size: .25rem;
    left: -10%;
    top: 0;
  }
  .content-top .content-page .content-page-word .content-signature{
    font-size: .12rem;
    color: #505050;
  }
  .content .content-top .content-userPhoto{
    width: 0.63rem;
    height: 0.63rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 9%;
    z-index: 1;
  }
  .content .content-top .content-hint{
    width: 88.8%;
    height: 0.3rem;
    border-radius: .12rem;
    font-size: .13rem;
    color: #151618;
    background: #fff7df;
    line-height: .3rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3%;
  }
  .content .content-top .content-hint .icon-gantanhao{
    font-size: .14rem;
    color: #f49f12;
    margin-left: .1rem;
  }
  .content .content-top .content-hint span{
    color: #f49f12;
  }
  .content .content-top .icon-you{
    font-size: .16rem;
    color: #b9b7b3;
    margin-left: .1rem;
  }
  .content .content-order{
    display: flex;
    flex-direction: column;
    height: 1.19rem;
    padding: 0 .15rem;
    background: #fff;
  }
  .content .content-order .content-order-top{
    height: 0.41rem;
    display: flex;
    justify-content: space-between;
    line-height: .41rem;
    border-bottom: .02rem solid #f9f9f9;
  }
  .content .content-order .content-order-top span:nth-of-type(1){
    font-size: .14rem;
    color: #161616;
  }
  .content .content-order .content-order-top span:nth-of-type(2){
    font-size: .12rem;
    color: #525252;
  }
  .content .content-order .content-order-top span:nth-of-type(2) i{
    margin-left: .05rem;
    font-size: .16rem;
  }
  .content .content-order .content-order-bottom{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .content .content-order .content-order-bottom a{
    display: flex;
    flex-direction: column;
    font-size: .12rem;
    color: #363636;
    align-items: center;
  }
  .content .content-order .content-order-bottom a img{
    margin-bottom: .14rem;
    width: 0.24rem;
    height: 0.24rem;
  }
  .content .content-order .content-order-bottom a:nth-of-type(5) img{
    width: 0.26rem;
  }
  .content-quan{
    display: flex;
    flex-direction: column;
    height: 1.06rem;
    padding: 0 .15rem;
    margin: .1rem 0;
    background: #fff;
  }
  .content-quan-top{
    height: 0.52rem;
    border-bottom: .02rem solid #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-quan-top .box{
    display: flex;
    flex: 1;
    justify-content: space-between;
    position: relative;
    height: .52rem;
    box-sizing: border-box;
    border-right: .02rem solid #fafafc;
    align-items: center;
  }
  .content-quan-top .box:nth-of-type(2){
    padding-left: .05rem;
    border-right: 0;
  }
  .content-quan .box .boxLeft{
    font-size: .14rem;
  }
  .content-quan .box .boxLeft .iconfont{
    font-size: .16rem;
  }
  .content-quan .box .boxRight{
    font-size: .12rem;
  }
  .content-quan .box .boxRight .icon-you{
    font-size: .14rem;
    margin: 0 .05rem;
  }
  .content-quan .box .boxLeft .iconfont{
    font-size: .16rem;
  }
  .content-quan-bottom{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-quan-bottom span{
    font-size: .14rem;
    color: #000;
  }
  .content-quan-bottom span .icon-hongbao{
    font-size: .14rem;
  }
  .content-quan-bottom span .icon-you{
    font-size: .14rem;
    margin: 0 .05rem;
  }
  .content-quan-bottom span:nth-of-type(2){
    font-size: .12rem;
    color: #3b3b3b;
  }
  .content .content-func{
    display: flex;
    flex-direction: column;
    height: 3.23rem;
    padding: 0 .15rem;
    margin-bottom: .1rem;
    background: #fff;
  }
  .content .content-func .content-func-title{
    display: flex;
    height: 0.41rem;
    align-items: center;
    font-size: .13rem;
    color: #363636;
    border-bottom: .01rem solid #f6f6f6;
  }
  .content .content-func .func-list{
    display: flex;
    flex: 1;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .content .content-func .func-list a{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: .12rem;
    color: #474747;
    height: 0.66rem;
  }
  .content .content-func .func-list a .iconfont{
    font-size: .18rem;
    margin-bottom: .1rem;
  }
  .content-banner{
    display: flex;
    height: 0.67rem;
    margin-bottom: .1rem;
    background: #fff;
  }
  .content-banner img{
    width: 100%;
    height: 100%;
  }
  .content-member{
    display: flex;
    height: 2.34rem;
    background: #fff;
    flex-direction: column;
    padding: 0 .1rem;
    border-bottom: .01rem solid #ebebf3;
  }
  .content-member .content-member-title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .58rem;
    width: 100%;
  }
  .content-member .content-member-title img{
    width: 2.37rem;
    height: 0.14rem;
  }
  .content-member-details{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .content-member-details a{
    width: 25%;
    height: 0.87rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: .1rem;
    color: #7f7f7f;
    align-items: center;
  }
  .content-member-details a:nth-of-type(1){
    color: #5b5b5b;
  }
  .content-member-details a img{
    width: 0.43rem;
    height: 0.42rem;
    margin-bottom: .12rem;
  }
  .content-bottom{
    display: flex;
    height: 0.67rem;
    justify-content: center;
    align-items: center;
  }
  .content-bottom img{
    width: 100%;
    height: 100%;
  }
</style>
