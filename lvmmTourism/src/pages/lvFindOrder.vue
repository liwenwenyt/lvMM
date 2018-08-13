<template>
  <div class="app">
    <lc-order-header></lc-order-header>
    <lc-order-section :lists="product" @addb="addc" @minusb="minusc" @opt="change"></lc-order-section>
    <lc-order-footer :tm="totalmoney" :tn="totalnum" :list="product"></lc-order-footer>
  </div>
</template>

<script>
  import LcOrderHeader from "../components/lmmFind/lmmMine/lcOrderHeader";
  import LcOrderSection from "../components/lmmFind/lmmMine/lcOrderSection";
  import LcOrderFooter from "../components/lmmFind/lmmMine/lcOrderFooter";
  import { Indicator } from 'mint-ui';
  export default {
    name: "lvFindOrder",
    components: {LcOrderFooter, LcOrderSection, LcOrderHeader},
    data() {
      return {
        product: [],
        totalmoney: 0,
        totalnum:0
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
        this.totalnum=0;
        this.totalnum=data.qal
        this.totalmoney = data.price * data.qal;
        console.log(this.totalnum);
      //  this.order={}
      // this.order={
      //     title:data.title,
      //     tm:this.totalmoney,
      //     tn:data.qal,
      //   }
      //   console.log(order)
      },
      change(){
        $(".footer-right").css("background","red")
        if($(this).attr("checked", true)){
          $(".footer-right").css("background","red")
        }else if($(this).attr("checked", false)){
          $(".footer-right").css("background","greey")
        }
      },
      initData(){
        var id=this.$route.query.id
        var xid=this.$route.query.xid
        var did=this.$route.query.did
        fetch("http://localhost:3000/api/findlcorder?xid="+xid +"&id="+id+"&did="+did).then(response=>{
          if(response.ok){
            response.json().then(data=>{
              console.log(data);
              this.product=data;
              this.totalmoney = data.price;
            })
          }
        })
      },

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
