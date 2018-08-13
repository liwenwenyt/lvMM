<template>
  <div id="xiangqingP" class="detailsTextIdea">
    <p>推荐理由</p>
    <p>
      <span>沉醉水镇风光  悠闲假期  乐活生活</span>
      <span>山岭之歌，徒步长城</span>
      <span>漫步长城脚下，畅游山水小镇...</span>
      <span>流年美味餐，旧时回忆，特色手工体验券</span>
    </p>
    <img src="../../../../static/img/sunxiangqingyepic1.png"/>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageDetailsTextidea"
    }
</script>

<style scoped>
  .detailsTextIdea {
    display: flex;
    flex-direction: column;
    border-bottom: 0.1rem solid #ededed; }
  .detailsTextIdea p:nth-child(1) {
    padding: 0.05rem 0.09rem;
    font-size: 0.12rem;
    border-bottom: 1px solid #ededed;
    color: #333333;
    font-weight: 600; }
  .detailsTextIdea p:nth-child(2) {
    padding: 0.05rem 0.09rem;
    display: flex;
    flex-direction: column; }
  .detailsTextIdea p:nth-child(2) span {
    font-size: 0.12rem;
    color: #666; }
  .detailsTextIdea img {
    padding: 0 0.09rem;
    width: 3.55rem; }
</style>
