<template>
  <div id="backtopV" class="backTop">
    <i class="iconfont icon-huidingbu"></i>
    <p>顶部</p>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageBacktop",
      mounted(){
        $(function(){
          $("#backtopV").hide();
          $("#zong").scroll(function(){
            if($(this).scrollTop() >= 667){
              $("#backtopV").show();
            }else{
              $("#backtopV").hide();
            }
          })
          $("#backtopV").click(function(){
            $("#zong").animate({scrollTop:0}, 'slow');
          })
        })
      }
    }
</script>

<style scoped>
  .backTop {
    width: 0.41rem;
    height: 0.41rem;
    position: fixed;
    bottom: 0.6rem;
    right: 0.1rem;
    border-radius: 50%;
    background: #e71a87;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; }
  .backTop i {
    font-size: 0.12rem;
    color: #fff; }
  .backTop p {
    font-size: 0.1rem;
    color: #fff; }
</style>
