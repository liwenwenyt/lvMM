<template>
  <div class="two_bot_cont">
    <div class="cont_top">
      <div class="cont_top_left">
        <h6>
          {{sitem.header}}
        </h6>
        <p>
          {{sitem.content}}
        </p>
      </div>
      <div class="cont_top_right">
        <img :src="sitem.img" alt="">
        <span>{{sitem.place}}</span>
      </div>
    </div>
    <div class="cont_bot">
      <div class="cont_bot_left">
        <p><span>游记</span></p>
        <p><span>游记</span></p>
      </div>
      <div class="cont_bot_right">
        <p>
          <i class="iconfont icon-dianzan"></i>
          <span>{{sitem.zan}}</span>
        </p>
        <p>
          <i class="iconfont icon-yanjing"></i>
          <span>{{sitem.find}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvTravel",
      props:["sitem"]
    }
</script>

<style scoped>
  .two_bot_cont{
    width: 100%;
    height: 1.05rem;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 0.15rem;
  }
  .cont_top{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.8rem;
    margin-bottom:0.06rem ;
  }
  .cont_top_left{
    width: 2.04rem;
    height: 100%;
  }
  .cont_top_left h6{
    font-size: 0.14rem;
    color: #0f0f0f;
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .cont_top_left p{
    font-size: 0.12rem;
    color: #a9a9a9;
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0.05rem;
  }
  .cont_top_right{
    width: 1.2rem;
    height: 100%;
    position: relative;
  }
  .cont_top_right img{
    width: 100%;
    height: 100%;
    border-radius: 3px;
    position: absolute;
  }
  .cont_top_right span{
    font-size: 0.12rem;
    color: #fff;
    position: absolute;
    z-index: 2;
    margin-top: 0.55rem;
    margin-left: 0.1rem;
  }
  .cont_bot{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .cont_bot_left{
    display: flex;
  }
  .cont_bot_left p{
    height: 0.13rem;
    border: 1px solid #ffb0b8;
    display: flex;
    margin-right: 0.05rem;
    align-items: center;
  }
  .cont_bot_left p span{
    font-size: 0.12rem;
    transform:scale(0.8);
    color:#ffb0b8 ;
  }
  .cont_bot_right{
    display: flex;
  }
  .cont_bot_right p{
    display: flex;
    align-items: center;
    margin-right: 0.05rem;
  }
  .icon-dianzan{
    font-size: 0.13rem;
    color: #b1b1b1;
  }
  .cont_bot_right p span{
    font-size: 0.12rem;
    color:#b1b1b1 ;
    transform: scale(0.8);
  }
  .icon-yanjing{
    font-size: 0.14rem;
    color: #b1b1b1;
  }
  .two_bot_cont:last-child{
    border-bottom: none;
  }
</style>
