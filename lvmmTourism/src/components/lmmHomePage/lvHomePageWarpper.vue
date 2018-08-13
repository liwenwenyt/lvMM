<template>
<div>
  <div class="hot">
    <lv-home-page-hot></lv-home-page-hot>
    <div class="hot_wrapper">
      <lv-home-page-hot-door :hotthree="n" v-for="(n,index) in hot"></lv-home-page-hot-door>
    </div>
  </div>
  </div>
</template>

<script>
    import LvHomePageHot from "./lvHomePageHot";
    import LvHomePageHotDoor from "./lvHomePageHotDoor";
    export default {
        name: "lvHomePageWarpper",
      components: {LvHomePageHotDoor, LvHomePageHot},
      props:["hot"]
    }
</script>

<style scoped>
  .hot{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    background: #efeff7;
  }
  .hot_wrapper{
    display: flex;
    /*flex-shrink: 1;*/
    overflow-x: scroll;
    background: #fff;

  }
  .hot_wrapper::-webkit-scrollbar{
    display: none;
  }
</style>
