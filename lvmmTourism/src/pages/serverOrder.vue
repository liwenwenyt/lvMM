<template>
  <div class="app">
    <lc-order-header></lc-order-header>
    <lc-order-section :lists="product" @addb="addc" @minusb="minusc"></lc-order-section>
    <lc-order-footer :tm="totalmoney"></lc-order-footer>
  </div>
</template>
<script>
  import LcOrderHeader from "../components/ImmParticulars/lmmMine/LcOrderHeader";
  import LcOrderSection from "../components/ImmParticulars/lmmMine/lcOrderSection";
  import LcOrderFooter from "../components/ImmParticulars/lmmMine/lcOrderFooter";
  import { Indicator } from 'mint-ui';
  export default {
    name: "serverOrder",
    components: {LcOrderFooter, LcOrderSection, LcOrderHeader},
    data(){
      return{
        product:[],
        totalmoney: 0
      }
    },
    methods:{
      goCity(){
        Indicator.open('正在拼命加载中...');//点击出现加载中...
        setTimeout(()=>{
          Indicator.close();
        },1000);
      },
      addc(){
        this.counter(this.product)
      },
      minusc(){
        this.counter(this.product)
      },
      counter(data){
        this.totalmoney = 0;
        this.totalmoney = data.price * data.qal;
        console.log(this.totalmoney)
      },
      initData(){
        var id = this.$route.query.id;
        var idA = this.$route.query.idA;
        fetch("http://localhost:3000/api/lcorders?idA="+idA+"&id="+id).then(response=>{
          if(response.ok){
            response.json().then(data=>{
              console.log(1);
              console.log(data);
              this.product=data;
              this.totalmoney = data.price;
            })
          }
        })
      }
    },
    created(){
      this.initData()
    },
  }
</script>

<style scoped>
  html,body{
    height: 100%;
  }
  .app{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #efeff7;
  }
</style>
