<template>
  <div class="sec_one">
    <div class="sec_one_cont">
      <div class="one_cont_top">
        <img src="../../assets/img/we_ditu.jpg" alt="">
        <span>玩转当地：西安</span>
      </div>
      <div class="one_cont_bot">
        <lv-sort :item="n" v-for="(n,index) in sort" ></lv-sort>
      </div>
    </div>
  </div>
</template>

<script>
    import LvSort from "./lvSort";
    export default {
        name: "lvSecOne",
      props:["sort"],
      components: {LvSort}
    }
</script>

<style scoped>
  .sec_one{
    width: 100%;
    height: 0.4rem;
    background:  #fd3e70;
    margin-bottom: 0.7rem;
  }
  .sec_one_cont{
    width: 3.55rem;
    height: 0.9rem;
    margin: auto;
    background: #fff;
    border-radius: 3px;
    padding-top: 0.1rem;
  }
  .one_cont_top{
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
  }
  .one_cont_top img{
    width: 0.15rem;
    height: 0.13rem;
  }
  .one_cont_top span{
    font-size: 0.12rem;
    color: #5e5e5e;
  }
  .one_cont_bot{
    display: flex;
    justify-content: space-around;
    margin-top: 0.1rem;
  }

</style>
