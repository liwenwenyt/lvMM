<template>
  <div class="chooseWrapper">
    <lv-home-page-three :fsthree="n" :idi="index" v-for="(n,index) in itemthree"></lv-home-page-three>
  </div>
</template>

<script>

  import LvHomePageThree from "./lvHomePageThree";
  export default {
    name: "lvHomePageThreeLike",
    components: {LvHomePageThree},
    props:["itemthree"]
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
