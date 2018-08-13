<template>
  <div class="mainx">
    <sale-detailspage-header></sale-detailspage-header>
    <sale-detailspage-main :list="dataList" :idx="firstId" :aid="secId"></sale-detailspage-main>
    <sale-detailspage-footer></sale-detailspage-footer>
    <sale-detailspage-backtop></sale-detailspage-backtop>
  </div>
</template>
<script>
  import SaleDetailspageHeader from "../components/lmmFind/saleDetailspage/saleDetailspageHeader";
  import SaleDetailspageMain from "../components/lmmFind/saleDetailspage/saleDetailspageMain";
  import SaleDetailspageFooter from "../components/lmmFind/saleDetailspage/saleDetailspageFooter";
  import SaleDetailspageBacktop from "../components/lmmFind/saleDetailspage/saleDetailspageBacktop";
  import { Indicator } from 'mint-ui';
  export default {
    name: "lvFindDetal",
    components: {SaleDetailspageBacktop, SaleDetailspageFooter, SaleDetailspageMain, SaleDetailspageHeader},
    data() {
      return {
        dataList: [],
        firstId:0,
        secId:0
      }
    },
    methods: {
      goCity(){
        Indicator.open('正在拼命加载中...');//点击出现加载中...
        setTimeout(()=>{
          Indicator.close();
        },1000);
      },
      __initData() {
        var id=this.$route.query.id;
        var sid=this.$route.query.sid
        fetch("http://localhost:3000/api/detail?sid="+sid+"&id="+id).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.dataList = data;
              this.firstId=id;
              this.secId=sid;
              // this.item=data[this.$route.query.id];
              console.log(this.secId);
            })
          }
        })
      },
    },

    created() {
      this.__initData();
    }
  }
</script>

<style scoped>
  html,body{
    height:100%;
  }
  .mainx{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
