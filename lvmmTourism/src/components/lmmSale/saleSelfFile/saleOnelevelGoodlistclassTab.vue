<template>
  <div id="classTabvue" class="goodlistclassTab">
    <sale-onelevel-goodlistclass-tabtop></sale-onelevel-goodlistclass-tabtop>
    <sale-onelevel-goodlistclass-tabbot></sale-onelevel-goodlistclass-tabbot>
  </div>
</template>

<script>
    import SaleOnelevelGoodlistclassTabtop from "./saleOnelevelGoodlistclassTabtop";
    import SaleOnelevelGoodlistclassTabbot from "./saleOnelevelGoodlistclassTabbot";
    export default {
      name: "saleOnelevelGoodlistclassTab",
      components: {SaleOnelevelGoodlistclassTabbot, SaleOnelevelGoodlistclassTabtop},
      mounted() {
        $(function () {
          var tit = document.getElementById("classTabvue");
          var bodyBox = document.getElementById("zong");
          var titleTop = tit.offsetTop;
          $("#zong").on("scroll", function () {
            var btop = bodyBox.scrollTop-320;
            if (btop > titleTop) {
              tit.style.cssText = "background:#fff;position:fixed;top:0.44rem;left:0;z-index:1;";
            } else {
              tit.style.cssText = "";
            }
          })
        })
      }
    }
</script>

<style scoped>
  .goodlistclassTab {
    width: 100%;
    height: 0.77rem;
    display: flex;
    flex-direction: column; }
</style>
