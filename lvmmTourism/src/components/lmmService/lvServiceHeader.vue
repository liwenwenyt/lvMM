<template>
  <header class="headone">
    <div class="hastwo">
      <router-link to="/lmmService/lvOnline">
        <a class="choice" href="javascript:;">订单服务</a>
      </router-link>
      <router-link to="/lmmService/lvServiceSection">
        <a class="choice" href="javascript:;">咨询服务</a>
      </router-link>
    </div>
    <img class="callme" src="/static/img/pHone.png" alt="">
  </header>
</template>

<script>
    export default {
        name: "lvServiceHeader"
    }
</script>

<style scoped>
  .headone{
    width: 100%;
    height: .5rem;
    display: flex;
    background-color: white;
    border-bottom: 1px solid #eaeaea;
  }
  a{
    display: flex;
  }
  .hastwo{
    width: 1.9rem;
    height: 100%;
    display: flex;
    margin: 0 .32rem 0 .92rem;
    justify-content: space-between;
    align-items: center;
  }
  .choice{
    font-size: .16rem;
    font-weight: bold;
    color: black;
  }
  .callme{
    width: .6rem;
    height: .5rem;
  }
</style>
