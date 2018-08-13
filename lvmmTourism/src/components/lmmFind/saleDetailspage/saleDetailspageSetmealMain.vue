<template>
  <div class="setMeal_main_row">
    <div class="setMeal_main_row_L">
      <p>套餐{{main.head}}：{{main.content}}</p>
      <p>出游日期：{{main.data}}</p>
    </div>
    <div class="setMeal_main_row_R">
      <div class="setMeal_main_row_RText">
        <span>￥</span>
        <span>{{main.money}}</span>
        <span>起</span>
      </div>
      <p @click="go" >立即抢 </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageSetmealMain",
      props:["main","idi","ids","cid"],
      methods:{
          go(){
            console.log(this.ids)

            this.$router.push({

              name:"lvFindOrder",
              path:"/findOrder",
              query:{
                id:this.idi,
                xid:this.ids,
                did:this.cid
              }

            })
          }
      }
    }
</script>

<style scoped>
  .setMeal_main_row {
    display: flex;
    padding: 0.09rem 0;
    border-bottom: 1px solid #f2f2f2; }

  .setMeal_main_row_L {
    width: 2.52rem;
    padding-right: 0.22rem;
    display: flex;
    border-right: 0.01rem dashed #d8d8d8;
    flex-direction: column; }
  .setMeal_main_row_L p:first-child {
    font-size: 0.12rem;
    color: #242424;
    margin-bottom: 0.1rem; }
  .setMeal_main_row_L p:last-child {
    font-size: 0.12rem;
    color: #676767;
    margin-bottom: 0.1rem; }

  .setMeal_main_row_R {
    width: 0.69rem;
    padding-left: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; }
  .setMeal_main_row_R p {
    width: 0.73rem;
    height: 0.28rem;
    background: #d30775;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.14rem;
    border-radius: 0.04rem; }

  .setMeal_main_row_RText {
    display: flex;
    justify-content: center;
    align-items: center; }
  .setMeal_main_row_RText span:nth-child(1) {
    font-size: 0.1rem;
    color: #d20172; }
  .setMeal_main_row_RText span:nth-child(2) {
    font-size: 0.2rem;
    color: #d20172; }
  .setMeal_main_row_RText span:nth-child(3) {
    margin-left: 0.03rem;
    font-size: 0.1rem;
    color: #4b4a4a; }
</style>
