<template>
  <div class="chooseWrapper">
    <lv-home-page-two :fstwo="n" :idi="index" v-for="(n,index) in itemtwo"></lv-home-page-two>
  </div>
</template>

<script>
    import LvHomePageTwo from "./lvHomePageTwo";
    export default {
        name: "lvHomePageTwoLike",
      components: {LvHomePageTwo},
      props:["itemtwo"]
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
