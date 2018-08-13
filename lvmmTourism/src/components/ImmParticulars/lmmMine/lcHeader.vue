<template>
  <div class="header">
    <div class="name">
      <img src="/static/img/lc-13.png" alt="">
      <span>151****6415</span>
    </div>
    <div class="header-icon">
      <a href="javascript:;"><i class="iconfont icon-shezhi"></i></a>
      <a href="javascript:;"><i class="iconfont icon-xinxi"></i></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lcHeader",
        mounted(){
          $('.content').scroll(function () {
            var scrollTop = $(this).scrollTop();
            if(scrollTop>100){
              var a = scrollTop;
              $('header').css('background','rgba(255,255,255,'+a+')');
              $('.header').css('opacity','1');
              $('.header').css('top','.47rem');
            } else{
              $('.header').css('opacity','0');
              $('.header').css('top','0');
            }
          })
        }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 0.47rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #f6f6f6;
    background: #fff;
    opacity: 0;
    margin-top: -0.5rem;
    z-index: 10;
    transition: all .5s linear;
  }
  .header .name{
    line-height: 0.47rem;
    display: flex;
    align-items: center;
  }
  .header img{
    display: inline-block;
    width: 0.24rem;
    height: 0.24rem;
  }
  .header .header-icon{
    position: absolute;
    right: 0;
    top: 0;
    height: 0.47rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .header .header-icon a{
    display: flex;
    color: #545454;
  }
  .header .header-icon .iconfont{
    font-size: .2rem;
  }
  .header span{
    font-size: .14rem;
    padding-left: 7px;
    line-height: .47rem;
  }
</style>
