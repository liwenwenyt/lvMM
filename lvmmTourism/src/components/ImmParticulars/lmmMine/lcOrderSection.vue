<template>
    <div class="sec">
      <lc-order-data></lc-order-data>
      <lc-order-tickets-price :item="lists" @lAdd="adda" @lminus="minusa"></lc-order-tickets-price>
      <lc-order-person-msg></lc-order-person-msg>
      <lc-order-bill></lc-order-bill>
      <lc-order-agreement></lc-order-agreement>
    </div>
</template>

<script>
    import LcOrderData from "./lcOrderData";
    import LcOrderTicketsPrice from "./lcOrderTicketsPrice";
    import LcOrderPersonMsg from "./lcOrderPersonMsg";
    import LcOrderBill from "./lcOrderBill";
    import LcOrderAgreement from "./lcOrderAgreement";
    export default {
        name: "lcOrderSection",
      components: {LcOrderAgreement, LcOrderBill, LcOrderPersonMsg, LcOrderTicketsPrice, LcOrderData},
      props:["lists"],
      methods:{
        adda(){
          this.$emit("addb")
        },
        minusa(){
          this.$emit("minusb")
        }
      }
    }
</script>

<style>
  .sec{
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    overflow-X: hidden;
  }
</style>
