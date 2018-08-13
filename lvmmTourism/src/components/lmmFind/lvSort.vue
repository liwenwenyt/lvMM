<template>
  <p>
    <img :src="item.pic" alt="">
    <span>{{item.title}}</span>
  </p>
</template>

<script>
    export default {
        name: "lvSort",
      props:["item"]
    }
</script>

<style scoped>
   p{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 p img{
    width: 0.36rem;
    height: 0.36rem;
    margin-bottom: 0.05rem;
  }
 p span{
    font-size: 0.12rem;
    color: #9e9e9e;
  }
</style>
