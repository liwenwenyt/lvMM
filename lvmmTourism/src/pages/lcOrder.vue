<template>
  <div class="app">
    <lc-order-header></lc-order-header>
    <lc-order-section :lists="product" @addb="addc" @minusb="minusc"></lc-order-section>
    <lc-order-footer :tm="totalmoney"></lc-order-footer>
  </div>
</template>

<script>
    import LcOrderHeader from "../components/lmmMine/lcOrderHeader";
    import LcOrderSection from "../components/lmmMine/lcOrderSection";
    import LcOrderFooter from "../components/lmmMine/lcOrderFooter";
    import { Indicator } from 'mint-ui';
    export default {
        name: "lcOrder",
        components: {LcOrderFooter, LcOrderSection, LcOrderHeader},
        data(){
          return{
            product:[],
            totalmoney: 0
          }
        },
        methods:{

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
            var id = this.$route.query.id
            var idx = this.$route.query.idx
            console.log(id)
            fetch("http://localhost:3000/api/lcorder?id="+id+"&idx="+idx).then(response=>{
              if(response.ok){
                response.json().then(data=>{
                  this.product=data;
                  console.log(this.product);
                  console.log("jjkjuj");
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
