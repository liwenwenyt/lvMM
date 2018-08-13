<template>
  <div class="box">
    <goods-details-title></goods-details-title>
    <goodsdetails-main :item="product"></goodsdetails-main>
  </div>
</template>

<script>
    import GoodsDetailsTitle from "../components/lmmSale/goodsdetailspage/goodsDetailsTitle";
    import GoodsdetailsMain from "../components/lmmSale/goodsdetailspage/goodsdetailsMain";
    export default {
        name: "goodsdetailspage",
      components: {GoodsdetailsMain, GoodsDetailsTitle},
      data(){
        return{
          product:[]
        }
      },
      methods:{
        initData(){
          fetch("http://localhost:3003/api2").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.product=data;
                console.log(this.product);
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
.box{
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
