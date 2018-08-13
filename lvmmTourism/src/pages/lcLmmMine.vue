<template>
  <div class="app">
    <lc-header></lc-header>
    <lc-content></lc-content>
    <lv-footer></lv-footer>
  </div>
</template>

<script>
    import lcHeader from "../components/lmmMine/lcHeader";
    import LcContent from "../components/lmmMine/lcContent";
    import LvFooter from "../components/common/lvFooter";
    import { Indicator } from 'mint-ui';
    export default {
        name: "lcLmmMine",
      components: {LvFooter, LcContent, lcHeader},
      methods:{
        goCity(){
          Indicator.open('正在拼命加载中...');//点击出现加载中...
          setTimeout(()=>{
            Indicator.close();
          },1000);
        },
      }
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
  }
</style>
