<template>
  <div class="idea">
    <div class="ideafeedback">
      <a class="ideaTxt" href="javascript:;">意见反馈</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvidea"
    }
</script>

<style scoped>
  .idea{
    width: 100%;
    height: .72rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ideafeedback{
    width: 3.46rem;
    height: .54rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:.27rem .27rem;
  }
  .ideaTxt{
    font-size: .14rem;
    color: black;
  }
</style>
