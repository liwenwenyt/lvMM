<template>
  <div class="goodlistclassMain_row" @click="godetailspage()">
    <div class="goodlistclassMain_row_left">
      <img :src="goodsn.pic"/>
    </div>
    <div class="goodlistclassMain_row_right">
      <p>{{goodsn.stitle}}</p>
      <p>爆款</p>
      <div class="goodlistclassMain_row_right_text">
        <span>￥</span>
        <span>{{goodsn.price}}</span>
        <span>起</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "saleOnelevelGoodlistclassMainProduct",
      props:["goodsn","goodsid"],
      methods: {
        godetailspage() {
          this.$router.push({
            name: 'saledetailspage',
            path: '/saledetails',
            query: {
              id:this.goodsid
            }
          })
        }
      }
    }
</script>

<style scoped>
  .goodlistclassMain_row {
    display: flex;
    justify-content: space-between;
    padding: 0.09rem 0;
    border-top: 1px solid #f3f3f3; }

  .goodlistclassMain_row_left {
    width: 1rem;
    margin-right: 0.08rem; }
  .goodlistclassMain_row_left img {
    width: 1rem;
    height: 0.73rem; }

  .goodlistclassMain_row_right {
    width: 2.45rem;
    display: flex;
    flex-direction: column; }
  .goodlistclassMain_row_right p:nth-child(1) {
    height: 0.27rem;
    font-size: 0.12rem;
    color: #333; }
  .goodlistclassMain_row_right p:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 0.08rem;
    color: #df2c88;
    border: 1px solid #ff5a8c;
    border-radius: 0.02rem;
    margin-top: 0.08rem; }

  .goodlistclassMain_row_right_text {
    display: flex; }
  .goodlistclassMain_row_right_text span:nth-child(1) {
    margin-top: 0.04rem;
    font-size: 0.1rem;
    color: #c20041; }
  .goodlistclassMain_row_right_text span:nth-child(2) {
    margin-left: 0.01rem;
    margin-right: 0.01rem;
    font-size: 0.17rem;
    color: #c20041; }
  .goodlistclassMain_row_right_text span:nth-child(3) {
    margin-top: 0.04rem;
    font-size: 0.1rem;
    color: #c20041; }
</style>
