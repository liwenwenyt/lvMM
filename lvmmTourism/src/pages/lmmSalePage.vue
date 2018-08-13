<template>
  <div class="main">
    <sale-header></sale-header>
    <sale-onelevel-page-main :lista="list" :everyone="everyday" :changeone="change" :goodslistone="goodslist"></sale-onelevel-page-main>
    <lv-footer></lv-footer>
  </div>
</template>

<script>
    import SaleHeader from "../components/lmmSale/saleCommon/saleHeader";
    import SaleOnelevelPageMain from "../components/lmmSale/saleSelfFile/saleOnelevelPageMain";
    import LvFooter from "../components/common/lvFooter";
    import { Indicator } from 'mint-ui';
    export default {
      name: "lmmSalePage",
      components: {LvFooter, SaleOnelevelPageMain, SaleHeader},
      data(){
        return{
          list:[],
          everyday:[],
          change:[],
          goodslist:[],
        }
      },
      methods:{
        goCity(){
          Indicator.open('正在拼命加载中...');//点击出现加载中...
          setTimeout(()=>{
            Indicator.close();
          },1000);
        },
        _initData(){
          fetch("http://localhost:3000/api/sunOnelevelOne").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.list = data;
                console.log(data);
              })
            }
          })
        },

        _initDatab(){
          fetch("http://localhost:3000/api/sunOnelevelTwo").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.everyday = data.everyday;
                console.log(this.everyday);
                this.change = data.change;
                console.log(this.change);
              })
            }
          })
        },

        _initDatac(){
          fetch("http://localhost:3000/api/sundetailsbot").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.goodslist = data;
                console.log(this.goodslist);
              })
            }
          })
        }
      },
      created(){
        this._initData();
        this._initDatab();
        this._initDatac();
      }
    }
</script>

<style scoped>
  html,body{
    height:100%;
  }
  .main{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
