$(function(){
  var tit = document.getElementById("choose");
  var titleTop = tit.offsetTop;
  $('.boxScroll').scroll(function () {
    var scrollTop = $(this).scrollTop(); // 滚动条距离顶部的距离
    var containerH = $('.swiper-container img').height(); //
    if(scrollTop>0 && scrollTop <= containerH){
      var a = scrollTop / containerH;
      $('header').css('background','rgba(255,255,255,'+a+')');
      $("#dest").css("color","black")
    }
    if(scrollTop>600 && scrollTop <=1200){
      var containerH=500
      var a = scrollTop / containerH;
      $('header').css('background','rgba(254,83,111,'+a+')');
      $("#dest").css("color","#fff");

    }
    // 吸顶效果
    if($(this).scrollTop()>titleTop+240){
      $("#choose").addClass("fixBox")
    }else{
      $("#choose").removeClass("fixBox")
    }
  });
})
//
// $(function () {
//   $(".hiddenD").click(function () {
//     $(" #defaultList").css("display","none")
//   })
// })
//
// jQuery.fn.extend({
//   check: function() {
//     return this.each(function() { this.checked = true; });
//   },
//   uncheck: function() {
//     return this.each(function() { this.checked = false; });
//   }
// })
//
// $(function () {
//   if($("#chture").check()){
//     $(".footer-right").css("background","red")
//   }else {
//     $(".footer-right").css("background","green")
//   }
// })
