<template>
    <div class="flashSale_main_text">
      <img :src="listc.pic"/>
      <p>{{listc.stitle}}</p>
      <div class="flashSale_main_text_mesg">
        <div class="flashSale_main_text_price">
          <span>￥</span>
          <span>{{listc.price}}</span>
          <span>起</span>
        </div>
        <div class="flashSale_main_text_qiang">
          <span>立即抢</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "saleOnelevelFlashsaleMain",
      props:["listc"]
    }
</script>

<style scoped>


  .flashSale_main_text {
    width: 1.64rem;
    height: 2rem;
    border: 1px solid #dadde2;
    margin-right: 0.08rem;
    display: flex;
    flex-direction: column; }
  .flashSale_main_text img {
    width: 1.64rem;
    height: 1.28rem; }
  .flashSale_main_text p {
    width: 1.54rem;
    height: 0.33rem;
    font-size: 0.1rem;
    color: #4c4c4c;
    padding: 0.05rem 0.05rem; }



  .flashSale_main_text_mesg {
    display: flex; }

  .flashSale_main_text_price {
    width: 1.05rem;
    height: 0.29rem;
    background: #ff2600;
    display: flex; }
  .flashSale_main_text_price span:nth-child(1) {
    margin-top: 0.09rem;
    margin-left: 0.06rem;
    font-size: 0.1rem;
    color: #fff; }
  .flashSale_main_text_price span:nth-child(2) {
    margin-top: 0.04rem;
    margin-left: 0.01rem;
    margin-right: 0.01rem;
    font-size: 0.17rem;
    color: #fff; }
  .flashSale_main_text_price span:nth-child(3) {
    margin-top: 0.09rem;
    font-size: 0.1rem;
    color: #fff; }

  .flashSale_main_text_qiang {
    width: 0.59rem;
    height: 0.29rem;
    background: #ff740d;
    display: flex;
    justify-content: center;
    align-items: center; }
  .flashSale_main_text_qiang span {
    font-size: 0.12rem;
    color: #fff; }
</style>
