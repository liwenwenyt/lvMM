<template>
  <div class="section-agreement">
    <input type="checkbox" @click="test">
    <span>已阅读并同意<a href="javascript:;">驴妈妈旅游网预订条款</a></span>
  </div>
</template>

<script>
    export default {
        name: "lcOrderAgreement",
      methods:{
          test(){
            this.$emit("check")

          }
      },
    }
</script>

<style scoped>
  .section-agreement{
    height: 0.2rem;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: .14rem;
    color: #4f5054;
  }
  .section-agreement input{
    margin-right: .06rem;
    width: 0.18rem;
    height: 0.18rem;
    vertical-align: middle;
  }
  .section-agreement span{
    vertical-align: middle;
  }
  .section-agreement span a{
    color: #3982f1;
  }
</style>
