<template>
  <div class="chooseWrapper">
    <lv-home-page-four :fsfour="n"  :idi="index" v-for="(n,index) in itemfour"></lv-home-page-four>
  </div>
</template>
<script>
  import LvHomePageFour from "./lvHomePageFour";
  export default {
    name: "lvHomePageFourLike",
    components: {LvHomePageFour},
    props:["itemfour"]
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
