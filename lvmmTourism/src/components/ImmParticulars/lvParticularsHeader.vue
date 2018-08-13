<template>
    <header>
        <div class="head">
          <router-link to="/" flag="a">
            <div class="back">
                <i class="iconfont icon-jiantou_zuo"></i>
            </div>
          </router-link>
            <div class="righthead">
                <div class="scenic">
                    <p class="scenicText">上海野生动物园</p>
                </div>
                <div class="morethan">
                    <i class="iconfont icon-fenxiang1"></i>
                    <i class="iconfont icon-gengduo"></i>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default{

    }
</script>

<style>
    .icon-gengduo,.icon-fenxiang1,.icon-jiantou_zuo{
      font-size:.26rem!important;
      width: .36rem;
      height: .36rem;
      text-align: center;
      line-height: .36rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, .2);
      color: white;
    }
    header{
        width: 100%;
        height: .5rem;
        background-color: rgba(255, 255, 255, 0);
        position: fixed;
        z-index: 222;
    }
    .head{
        width: 3.55rem;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .back{
        display: flex;
    }
    .righthead{
        width: 2.48rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .scenic{
        font-size: .18rem;
    }
    .scenicText{
        opacity: 0;
    }
    .morethan{
        width: .78rem;
        display: flex;
        justify-content: space-between;
    }
</style>
