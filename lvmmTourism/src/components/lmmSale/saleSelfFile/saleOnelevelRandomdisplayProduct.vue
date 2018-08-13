<template>
      <div class="randomDisplay_main_bot_T">
        <img :src="changefour.pic"/>
        <p>{{changefour.stitle}}</p>
        <div class="randomDisplay_main_bot_Ttext">
          <span>￥</span>
          <span>{{changefour.price}}</span>
          <span>起</span>
        </div>
      </div>
</template>

<script>
    export default {
        name: "saleOnelevelRandomdisplayProduct",
      props:["changefour"]
      // data(){
      //     return{
      //       a:0
      //     }
      // },
      // methods:{
      //     change(a){
      //       a = this.a+1;
      //       if(this.a >= 4){
      //         this.a = 0;
      //         anew = this.a+1;
      //       }
      //       return anew;
      //       this.$emit("changefive",anew)
      //     }
      // }

    }
</script>

<style scoped>

  .randomDisplay_main_bot_T {
    width: 1.73rem;
    height: 1.64rem;
    border: 1px solid #eaeaea;
    position: relative;
    display: flex;
    flex-direction: column; }
  .randomDisplay_main_bot_T img {
    width: 1.73rem;
    height: 1rem; }
  .randomDisplay_main_bot_T p {
    width: 1.73rem;
    height: 0.33rem;
    font-size: 0.1rem;
    color: #4c4c4c;
    padding: 0.04rem 0.05rem; }

  .randomDisplay_main_bot_Ttext {
    display: flex; }
  .randomDisplay_main_bot_Ttext span:nth-child(1) {
    margin-top: 0.04rem;
    margin-left: 0.06rem;
    font-size: 0.1rem;
    color: #c20041; }
  .randomDisplay_main_bot_Ttext span:nth-child(2) {
    margin-left: 0.01rem;
    margin-right: 0.01rem;
    font-size: 0.17rem;
    color: #c20041; }
  .randomDisplay_main_bot_Ttext span:nth-child(3) {
    margin-top: 0.04rem;
    font-size: 0.1rem;
    color: #c20041; }
</style>
