<template>
  <div class="service">
    <lv-service-header></lv-service-header>
    <router-view></router-view>
    <lv-footer></lv-footer>
  </div>
</template>

<script>
  import lvServiceHeader from '../components/lmmService/lvServiceHeader'
  import LvOnline from "../components/lmmService/lvOnline";
  import LvServiceSection from "../components/lmmService/lvServiceSection";
  import LvFooter from "../components/common/lvFooter";
  import { Indicator } from 'mint-ui';

  export default {
    name: "lmmService",
    components:{
      LvFooter,
      LvServiceSection,
      LvOnline,
      lvServiceHeader,
    },
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
  .service{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>
