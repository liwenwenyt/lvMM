<template>
    <section>
      <lv-particulars-swiper></lv-particulars-swiper>
      <lv-scenic-name :item="ticketlists"></lv-scenic-name>
      <lv-character></lv-character>
      <div class="preference">
        <lvre-commend :lists="ticketlists.tuijian"></lvre-commend>
        <lv-tickets :fnlists="b" v-for="(b,index) in alist" :key="index" :idb="ida"></lv-tickets>
        <lv-double></lv-double>
        <lv-scenic-warning></lv-scenic-warning>
      </div>
    </section>
</template>

<script>
  import lvDouble from './lvDouble.vue'
  import lvreCommend from './lvreCommend.vue'
  import lvTickets from './lvTickets'
  import lvParticularsSwiper from './lvParticularsSwiper.vue'
  import lvScenicName from './lvScenicName.vue'
  import lvScenicWarning from './lvScenicWarning'
  import lvCharacter from './lvCharacter.vue'
    export default {
        name: "lvSection",
        props:["ticketlists","alist","ida"],
        components:{
          lvreCommend,
          lvTickets,
          lvDouble,
          lvParticularsSwiper,
          lvScenicName,
          lvScenicWarning,
          lvCharacter,
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
  .preference{
    width: 100%;
    margin-top: 10px;
  }

</style>
