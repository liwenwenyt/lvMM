<template>
    <section>
      <lvtravel></lvtravel>
      <lvstay></lvstay>
      <lvelse></lvelse>
      <lvidea></lvidea>
    </section>
</template>

<script>
  import lvtravel from './lvtravel.vue'
  import lvstay from './lvstay.vue'
  import lvelse from './lvelse'
  import lvidea from './lvidea'
    export default {
        name: "lvServiceSection",
        components:{
          lvtravel,
          lvstay,
          lvelse,
          lvidea
        }
    }
</script>

<style scoped>
  section{
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
