<template>
  <div id="xiangqingTab" class="detailsOfInstructions_title">
    <a href="#xiangqingP">详情</a>
    <a href="#xingchengP">行程</a>
    <a href="#feiyongP">费用须知</a>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageDetailsofinstructionsTitle",
      mounted(){
        $(function(){
          var tit = document.getElementById("xiangqingTab");
          var bodyBox = document.getElementById("zong");
          var titleTop = tit.offsetTop;
          bodyBox.onscroll = function(){
            var btop = bodyBox.scrollTop;
            if(btop>titleTop){
              tit.style.cssText = "width:100%;background:#fff;position:fixed;top:0.38rem;left:0;";
            }else{
              tit.style.cssText = "";
            }
          }
        }),
        //   $("#zong").scroll(function () {
        //     var scrolltop = $("#zong").scrollTop();
        //     console.log(scrolltop)
        //     if (scrolltop >= 700) {
        //       $("#xiangqingTab").css({
        //         "width": "100%",
        //         "background": "#fff",
        //         "position": "fixed",
        //         "top": "0.38rem",
        //         "left": 0
        //       })
        //     } else {
        //       $("#xiangqingTab").css()
        //     }
        //   })
        $(function(){
          $(".detailsOfInstructions .detailsOfInstructions_title a").click(function(){
            $(this).css({"font-size":"0.12rem",
              "color":"#d30775",
              "border-bottom":"0.03rem solid #d30775"}).siblings().css({"font-size":"0.12rem",
              "color":"#585858","border":"none"});

          })
        })
      }
    }
</script>

<style scoped>
  .detailsOfInstructions_title {
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e4e4e4; }
  .detailsOfInstructions_title a {
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #585858; }
  .detailsOfInstructions_title a:nth-child(1) {
    font-size: 0.12rem;
    color: #d30775;
    border-bottom: 0.03rem solid #d30775; }

</style>
