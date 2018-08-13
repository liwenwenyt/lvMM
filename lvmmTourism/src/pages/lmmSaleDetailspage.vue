<template>
    <div class="mainx">
      <sale-detailspage-header></sale-detailspage-header>
      <sale-detailspage-main :list="dataList" :ida = "idt"></sale-detailspage-main>
      <sale-detailspage-footer></sale-detailspage-footer>
      <sale-detailspage-backtop></sale-detailspage-backtop>
    </div>
</template>

<script>
    import SaleDetailspageHeader from "../components/lmmSale/saleDetailspage/saleDetailspageHeader";
    import SaleDetailspageMain from "../components/lmmSale/saleDetailspage/saleDetailspageMain";
    import SaleDetailspageFooter from "../components/lmmSale/saleDetailspage/saleDetailspageFooter";
    import SaleDetailspageBacktop from "../components/lmmSale/saleDetailspage/saleDetailspageBacktop";
    import { Indicator } from 'mint-ui';
    export default {
      name: "lmmSaleDetailspage",
      components: {SaleDetailspageBacktop, SaleDetailspageFooter, SaleDetailspageMain, SaleDetailspageHeader},
      data() {
        return {
          dataList: [],
          idt:0
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
          var id = this.$route.query.id;
          fetch("http://localhost:3000/api/saledetailsdata?id="+id).then(response=>{
            if(response.ok){
              response.json().then(data=>{
                // this.dataList=data[this.$route.query.id];
                this.dataList=data;
                this.idt= id;
                console.log(this.idt)
                console.log(this.dataList)
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
