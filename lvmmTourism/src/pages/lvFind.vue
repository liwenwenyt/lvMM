<template>
  <div class="box">
    <lv-find-header></lv-find-header>
    <lv-second :list="sort" :listone="listOne" :tlist="lists"></lv-second>
    <lv-return-top></lv-return-top>
   <lv-footer></lv-footer>
  </div>
</template>

<script>
    import LvFindHeader from "../components/lmmFind/lvFindHeader";
    import LvSecond from "../components/lmmFind/lvSecond";
    import LvSecThree from "../components/lmmFind/lvSecThree";
    import LvTitle from "../components/lmmFind/lvTitle";
    import LvReturnTop from "../components/lmmFind/lvReturnTop";
    import LvFooter from "../components/common/lvFooter";
    import { Indicator } from 'mint-ui';
    export default {
        name: "lvFind",
      components: {LvFooter, LvReturnTop, LvTitle, LvSecThree, LvSecond, LvFindHeader},
      data(){
          return{
            sort:[],
            listOne:{},
            lists:[]
          }
      },
      methods:{
        goCity(){
          Indicator.open('正在拼命加载中...');//点击出现加载中...
          setTimeout(()=>{
            Indicator.close();
          },1000);
        },
        initData(){
          fetch("http://localhost:3000/api/findSort").then(response=> {
            if (response.ok) {
              response.json().then(data => {
                this.sort = data;
              })
            }
          })
          fetch("http://localhost:3000/api/findListOne").then(response=> {
            if (response.ok) {
              response.json().then(data => {
                this.listOne = data;
                // console.log(data.travels)
              })
            }
          })
            fetch("http://localhost:3000/api/findLists").then(response=>{
              if(response.ok){
                response.json().then(data=>{
                  this.lists=data;
                })
              }
            })
          // fetch("http://localhost:3000/api/detail").then(response=>{
          //   if(response.ok){
          //     response.json().then(data=>{
          //       this.lists=data;
          //       console.log(data)
          //     })
          //   }
          // })
        }
      },

      created(){
       this.initData()
      },

      updated(){

      },
      watch:{

      }
    }
</script>

<style scoped>
.box{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
