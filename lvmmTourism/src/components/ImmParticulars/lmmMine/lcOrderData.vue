<template>
  <div class="section-data">
    <span class="section-data-name">游玩日期</span>
    <a href="javascript:;" class="more-a">
      <span>
          更多日期
          <i class="iconfont icon-you"></i>
      </span>
    </a>
    <a href="javascript:;" class="red-a">
      <span>明天</span>
      <span>07-30</span>
    </a>
    <a href="javascript:;" class="grey-a a">
      <span>今天</span>
      <span>不可订</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "lcOrderData"
    }
</script>

<style scoped>
   .section-data{
    width: 100%;
    height: 0.55rem;
    background: #fff;
    margin: .08rem 0;
    padding: .08rem .1rem;
    box-sizing: border-box;
  }
 .section-data .section-data-name{
    font-size: .14rem;
    color: #555655;
    float: left;
    line-height: 0.32rem;
  }
 .section-data a{
    width: 0.59rem;
    height: 0.39rem;
    margin-left: .05rem;
    float: right;
    display: flex;
    box-sizing: border-box;
    border: .01rem solid #d4d4d3;
    border-radius: .04rem;
    align-items: center;
    justify-content: center;
  }
 .section-data .grey-a{
    width: 0.59rem;
    flex-direction: column;
  }
 .section-data .grey-a span{
    font-size: .12rem;
    color: #979797;
  }
.section-data .red-a{
    height: 0.39rem;
    flex-direction: column;
  border: .01rem solid #ff6600;
  }
.section-data .red-a span{
    font-size: .12rem;
    color: #ca0058;
  }
 .section-data .more-a{
    width: 0.79rem;
  }
 .section-data .more-a span{
    font-size: .12rem;
    color: #ca0058;
    margin-left: .1rem;
  }
 .section-data .more-a span .icon-you{
    font-size: .16rem;
    margin-left: -0.05rem;
  }
</style>
