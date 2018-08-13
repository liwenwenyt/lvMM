<template>
  <div class="chooseWrapper">
    <lv-home-page-one :fs="n" :idi="index" v-for="(n,index) in items"></lv-home-page-one>
  </div>
</template>
<script>
    import LvHomePageOne from "./lvHomePageOne";
    import LvHomePageGuss from "./lvHomePageGuss";
    export default {
        name: "lvHomePageLike",
      components: {LvHomePageGuss, LvHomePageOne},
      props:["items"]
    }
</script>

<style scoped>
  .chooseWrapper{
    display: flex;
    background: #eeeefa;
    flex-wrap: wrap;
    /*padding-left:0.1rem;*/
    padding-right: 0.1rem;
    width: 100%;
    box-sizing: border-box;
  }
</style>
