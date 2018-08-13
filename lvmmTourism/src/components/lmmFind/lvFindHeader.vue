<template>
  <header>
    <p>
      <i class="iconfont icon-sousuo"></i>
      <span>你想去哪里？</span>
    </p>
  </header>
</template>

<script>
    export default {
        name: "lvFindHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 0.48rem;
    background: #fd3e70;
    display: flex;
  }
  header p{
    width: 3.15rem;
    height: 0.28rem;
    background: #fff;
    margin: auto;
    border-radius: 0.12rem;
    display: flex;
    align-items: center;
  }
  header p i{
    font-size: 0.14rem;
    color: #bebebe;
    margin-left: 0.1rem;
  }
  header p span{
    font-size: 0.14rem;
    color: #bebebe;
    margin-left: 0.07rem;
  }
</style>
