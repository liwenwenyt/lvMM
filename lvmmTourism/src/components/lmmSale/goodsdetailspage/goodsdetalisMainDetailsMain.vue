<template>
  <div class="goodsdetalis_main">
    <div class="goodsdetalis_main_one">
      <img src="/static/img/sungoodspic3.png"/>
      <p>景点名称 : {{itemb.activename}}</p>
    </div>
    <div class="goodsdetalis_main_one">
      <img src="/static/img/sungoodspic4.png"/>
      <p>景点所属 : {{itemb.activearea}}</p>
    </div>
    <div class="goodsdetalis_main_one">
      <img src="/static/img/sungoodspic5.png"/>
      <p>活动时间 : {{itemb.activedateone}} - {{itemb.activedatetwo}}</p>
    </div>
    <div class="goodsdetalis_main_one">
      <img src="/static/img/sungoodspic6.png"/>
      <p>景点分类 : {{itemb.activedatexinzhi}}</p>
    </div>
    <div class="goodsdetalis_main_one">
      <img src="/static/img/sungoodspic7.png"/>
      <p>特殊资源 : {{itemb.activedatedata}}</p>
    </div>
    <div class="goodsdetalis_main_one">
      <img src="/static/img/sungoodspic8.png"/>
      <p>活动说明 : {{itemb.activexingshi}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodsdetalisMainDetailsMain",
      props:["itemb"]
    }
</script>

<style scoped>
  .goodsdetalis_main {
    width: 100%;
    display: flex;
    background: #fff;
    padding: 0 0.1rem;
    border-bottom:0.03rem solid #f4f4f4;
    box-sizing: border-box;
    flex-direction: column; }

  .goodsdetalis_main_one {
    width: 100%;
    height: 0.38rem;
    display: flex;
    align-items: center; }
  .goodsdetalis_main_one img {
    width: 0.28rem;
    height: 0.28rem; }
  .goodsdetalis_main_one p {
    font-size: 0.13rem;
    color: #333;
    margin-left: 0.05rem; }

</style>
