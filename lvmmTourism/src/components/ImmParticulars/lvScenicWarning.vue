<template>
  <div class="scenic-warning">
    <div class="warning-box">
      <div class="warning-box one">
        <p class="warning-box-title">景区须知</p>
        <span class="openHours">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">开放时间</b>
        </span>
        <ul class="openClockBox">
          <li class="openClock">8:00-18:00(7月-8月)</li>
          <li class="openClock">8:00-17:00(3月-6月)</li>
          <li class="openClock">8:00-17:00(9月-11月)</li>
          <li class="openClock">8:30-16:30(12月-第二年2月)</li>
        </ul>
        <span class="openHours" style="margin-top:.22rem;">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">免票政策</b>
        </span>
        <span class="include">包括</span>
      </div>
      <div class="warning-box two">
        <ul class="policy">
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">开放时间</b>
          </li>
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">免票政策</b>
          </li>
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">优惠人群</b>
          </li>
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">开具发票</b>
          </li>
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">入园须知</b>
          </li>
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">温馨提示</b>
          </li>
          <li class="policyLists">
            <i class="iconfont icon-Shapecopy"></i>
            <b class="thisTime">安全须知</b>
          </li>
        </ul>
        <div class="allsenic">
          <span class="watchall">查看全部景区须知</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvScenicWarning"
    }
</script>

<style scoped>
  @import "../../assets/css/iconfont.css";
  .scenic-warning{
    width: 100%;
    height: 3.8rem;
    background-color: white;
  }
  .warning-box{
    width: 3.44rem;
    height: 3.8rem;
    margin: 0 auto;
    overflow: hidden;
  }
  .one{
    width: 3.44rem;
    height: 2.16rem;
  }
  .two{
    width: 3.44rem;
    height: 1.64rem;
  }
  .warning-box-title{
    font-size: .16rem;
    font-weight: bold;
    padding-top: .2rem;
  }
  .openHours{
    display: flex;
    align-items: center;
    margin-top: .16rem;
  }
  .thisTime{
    font-size: .14rem;
    margin-left: 4px;
    color: black;
  }
  .openClockBox{
    height: .7rem;
    margin-top: 10px;
  }
  .openClock{
    height: .2rem;
    text-indent: .24rem;
    font-size: .12rem;
    -webkit-transform-origin-x: 0;
    transform: scale(.94);
    color: #a7a7a7;
    border: none;
  }
  .icon-Shapecopy{
    color: #c1bfc5;
    font-size: .14rem;
  }
  .include{
    font-size: .12rem;
    -webkit-transform-origin-x: 0;
    transform: scale(.94);
    display: block;
    color: #aaabb3;
    text-align: center;
    font-weight: bold;
  }
  .policy{
    width: 3.44rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: .14rem;
  }
  .policyLists{
    width: .87rem;
    height: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
  }
  .allsenic{
    width: 1.52rem;
    height: .32rem;
    border:1px solid #daeaff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .14rem .14rem;
  }
  .watchall{
    font-size: .14rem;
    color: #3f93ff;
  }
</style>
