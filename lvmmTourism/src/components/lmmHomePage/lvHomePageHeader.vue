<template>
  <header id="haederHidden">
    <div class="header_left">
      <span id="dest">西安</span>
      <i class="iconfont icon-xiala"></i>
    </div>
    <div class="header_middle">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" name="" value="玩水季">
      <i class="iconfont icon-saoyisao" id="saoyisao"></i>
    </div>
    <div class="header_right">
      <img src="../../assets/img/wyhong01.png">
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </header>
</template>

<script>
    export default {
        name: "lvHomePageHeader"
    }
</script>

<style scoped>
  header{
    display: flex;
    width: 100%;
    height: 0.44rem;
    align-items: center;
    position: absolute;
    top:0rem;
    z-index: 1000;
  }
  .header_left{
    display: flex;
  }
  .header_left span{
    font-size:0.13rem ;
    color: #fff;
    margin-left: 0.12rem;
    margin-right: 0.05rem;
  }
  .header_left .iconfont{
    font-size: 0.14rem;
    color:#fcfaf5;
  }
  .header_middle{
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin-left: 0.1rem;
  }
  .header_middle .iconfont{
    font-size: 0.12rem;
    color:#b9b9b9;
  }
  .header_middle .iconfont:nth-child(1){
    position: absolute;
    left: 0.1rem;
  }
  #saoyisao{
    position: absolute;
    left:2.18rem;
  }
  .header_middle input{
    width:2.41rem ;
    height:0.29rem;
    outline: none;
    border: 1px solid #d6dee2;
    border-radius: 0.14rem;
    font-size:0.1rem ;
    color: #b9b9b9;
    text-indent: 0.26rem;
  }
  .header_right{
    display: flex;
  }
  .header_right img{
    width:0.16rem;
    height: 0.2rem;
    margin-left: 0.14rem;
    margin-right: 0.10rem;
  }
  .header_right .iconfont{
    font-size:0.2rem ;
    color:#fff ;
  }

</style>
