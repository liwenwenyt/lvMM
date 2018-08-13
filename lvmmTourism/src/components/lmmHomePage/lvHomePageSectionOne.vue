<template>
    <a href="#">
      <img v-lazy="navs.img" alt="">
      <span>{{navs.title}}</span>
    </a>
</template>

<script>
    export default {
        name: "lvHomePageSectionOne",
      props:["navs"]
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 1.4rem;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
  }
  section a{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section a img{
    width: 0.3rem;
    height: 0.3em;
    margin-top: 0.1em;
  }
  section a span{
    font-size:0.11rem ;
    color: #7b7b7b;
    margin-top: 0.06rem;
  }
</style>
