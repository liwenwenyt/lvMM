<template>
  <section>
    <div class="indent">
      <div class="indentitle">
        <div class="indentickets">
          <i class="iconfont icon-menpiao"></i>
          <span class="indentxt">门票</span>
        </div>
        <p class="status">已取消</p>
      </div>
      <!-- 门票信息 -->
      <div class="indentMessage">
        <div class="indentLeft">
          <p class="indentName">世纪公园游乐场200元代金券【赠2张...</p>
          <p class="indentMany">数量：3份</p>
          <p class="indenTime">游玩日期：2018-7-29、2018-7-29</p>
        </div>
        <div class="indentRight">
          <span class="indentPrice">￥<b>160</b></span>
        </div>
      </div>
      <!-- 详情咨询 -->
      <div class="indentConsult">
        <div class="consultBox">
          <a href="javascript:;" class="consultOne">详情</a>
          <a href="javascript:;" class="consultTwo">咨询</a>
        </div>
      </div>
    </div>
    <p class="finish">已加载显示完全部内容</p>
  </section>
</template>

<script>
    export default {
        name: "lvIndent"
    }
</script>

<style scoped>
  section{
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .indent{
    width: 100%;
    height: 2.12rem;
    background-color: white;
    margin-top: 8px;
  }
  .indentitle{
    width: 3.44rem;
    height: .5rem;
    margin: 0 auto;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .indentickets{
    width: .58rem;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-menpiao{
    font-size: .22rem;
  }
  .indentxt{
    font-size: .16rem;
    color: #797979;
  }
  .status{
    font-size: .14rem;
    color: #777777;
  }
  /* 门票信息 */
  .indentMessage{
    width: 3.44rem;
    height: 1.02rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .indentLeft{
    width: 2.74rem;
    height: 1.02rem;
  }
  .indentName{
    font-size: .15rem;
    font-weight: bold;
  }
  .indentMany{
    font-size: .12rem;
    color: #adadad;
    margin-top: .16rem;
  }
  .indenTime{
    font-size: .12rem;
    color: #adadad;
    margin-top: 8px;
  }
  .indentRight{
    width: .68rem;
    display: flex;
    justify-content: flex-end;
  }
  .indentPrice{
    color: #f7883f;
    font-size: .12rem;
  }
  b{
    font-size: .2rem;
    color: #f7883f;
  }
  /* 详情咨询 */
  .indentConsult{
    width: 3.44rem;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  }
  .consultBox{
    width: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
  .consultOne{
    display: flex;
    width: .7rem;
    height: .26rem;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
    color: black;
    border-radius: .13rem .13rem;
  }
  .consultTwo{
    display: flex;
    width: .7rem;
    height: .26rem;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
    color: white;
    border-radius: .13rem .13rem;
    background-color: #ff616f;
  }
  .finish{
    font-size: .14rem;
    margin-top:6px;
    text-align: center;
  }
</style>
