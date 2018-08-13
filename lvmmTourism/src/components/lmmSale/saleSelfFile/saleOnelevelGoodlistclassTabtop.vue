<template>
  <div class="goodlistclassTab_top">
    <a href="#">周边游</a>
    <a href="#">国内游</a>
    <a href="#">出境游</a>
    <a href="#">门票</a>
    <a href="#">酒店</a>
    <a href="#">机票</a>
  </div>
</template>

<script>
    export default {
        name: "saleOnelevelGoodlistclassTabtop",
      mounted(){
        $(function(){
          $(".goodlist").children(".goodlistclassMain:nth-child(1)").siblings().css("display","none");
          $(".goodlistclassTab .goodlistclassTab_top a:first-child").css({"font-size":"0.11rem","color":"#d40675","border-bottom":"0.03rem solid #d40675"});

          $(".goodlistclassTab .goodlistclassTab_top a").click(function(){
            var indexx = $(this).index();
            $(".goodlist>div").eq(indexx+1).show().siblings().hide();
            $(this).css({"font-size":"0.11rem",
              "color":"#d40675",
              "border-bottom":"0.03rem solid #d40675"});
            $(this).siblings().css({"font-size":"0.11rem",
              "color":"#525252","border-bottom":"0"});
          });
        })
      }
    }
</script>

<style scoped>
  .goodlistclassTab_top {
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
    padding: 0 0.12rem;
    box-sizing: border-box; }
  .goodlistclassTab_top a {
    display: flex;
    align-items: center;
    font-size: 0.11rem;
    color: #525252; }
  .goodlistclassTab_top a:nth-child(1) {
    font-size: 0.11rem;
    color: #d40675;
    border-bottom: 0.03rem solid #d40675; }
</style>
