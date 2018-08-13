<template>
  <div class="everydaychoose_main_row_T">
    <img :src="everythree.pic"/>
    <div class="everydaychoose_main_row_TO"><span>{{everythree.time}}</span></div>
    <p>{{everythree.stitle}}</p>
    <div class="everydaychoose_main_row_Ttext">
      <span>￥</span>
      <span>{{everythree.price}}</span>
      <span>起</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleOnelevelProduct",
      props:["everythree"]
    }
</script>

<style scoped>
  .everydaychoose_main_row_T {
    width: 48%;
    height: 1.84rem;
    border: 1px solid #eaeaea;
    position: relative;
    display: flex;
    flex-direction: column; }
  .everydaychoose_main_row_T img {
    width: 100%;
    height: 1.19rem; }
  .everydaychoose_main_row_T p:nth-child(3) {
    width: 100%;
    height: 0.33rem;
    font-size: 0.1rem;
    color: #4c4c4c;
    padding: 0.04rem 0.05rem; }

  .everydaychoose_main_row_TO {
    height: 0.23rem;
    width: 100%;
    display: flex;
    background: #000;
    opacity: 0.7;
    position: absolute;
    top: 0.96rem;
    left: 0; }
  .everydaychoose_main_row_TO span {
    line-height: 0.23rem;
    text-indent: 0.04rem;
    font-size: 0.08rem;
    color: #fff;
    z-index: 111;
    opacity: 1; }

  .everydaychoose_main_row_Ttext {
    display: flex; }
  .everydaychoose_main_row_Ttext span:nth-child(1) {
    margin-top: 0.04rem;
    margin-left: 0.06rem;
    font-size: 0.1rem;
    color: #c20041; }
  .everydaychoose_main_row_Ttext span:nth-child(2) {
    margin-left: 0.01rem;
    margin-right: 0.01rem;
    font-size: 0.17rem;
    color: #c20041; }
  .everydaychoose_main_row_Ttext span:nth-child(3) {
    margin-top: 0.04rem;
    font-size: 0.1rem;
    color: #c20041; }
</style>
