<template>
  <div class="section-bill">
    <span class="box-left">发票信息</span>
    <span class="box-right">不需要<i class="iconfont icon-you"></i></span>
  </div>
</template>

<script>
    export default {
        name: "lcOrderBill"
    }
</script>

<style scoped>
  .section-bill{
    height: 0.44rem;
    background: #fff;
    padding: 0 .1rem;
    margin-bottom: .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .section-bill .box-left{
    font-size: .14rem;
    color: #3f4040;
  }
  .section-bill .box-right{
    font-size: .12rem;
    color: #8c8c8c;
  }
</style>
