<template>
    <section>
       <lv-sec-one :sort="list"></lv-sec-one>
      <lv-sec-two :slist="listone"></lv-sec-two>
      <lv-title></lv-title>
      <lv-sec-three :item="n" :qid="index" v-for="(n,index) in tlist" ></lv-sec-three>
    </section>
</template>

<script>
    import LvSecOne from "./lvSecOne";
    import LvSecTwo from "./lvSecTwo";
    import LvSecThree from "./lvSecThree";
    import LvTitle from "./lvTitle";
    export default {
      name: "lvSecond",
      props:["list","listone","tlist"],
      components: {LvTitle, LvSecThree, LvSecTwo, LvSecOne}
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
