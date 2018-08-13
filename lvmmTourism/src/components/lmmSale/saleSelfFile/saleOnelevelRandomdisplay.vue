<template>
  <div class="randomDisplay">
    <div class="randomDisplay_title">
      <img src="../../../../static/img/sunrandomdisplaypic1.png"/>
      <p>joyce</p>
      <span>路在长，也长不过我35码半的脚步！</span>
    </div>
    <sale-onelevel-randomdisplay-product-list :changethree="changetwo"></sale-onelevel-randomdisplay-product-list>
  </div>
</template>
<script>

    import SaleOnelevelRandomdisplayProduct from "./saleOnelevelRandomdisplayProduct";
    import SaleOnelevelRandomdisplayProductList from "./saleOnelevelRandomdisplayProductList";
    export default {
        name: "saleOnelevelRandomdisplay",
      components: {
        SaleOnelevelRandomdisplayProductList, SaleOnelevelRandomdisplayProduct
        },
      props:["changetwo"],
      methods:{

      }
    }
</script>

<style scoped>
  .randomDisplay {
    width: 100%;
    height: 2.61rem;
    background: #fff;
    padding: 0 0.09rem;
    margin-bottom: 0.09rem;
    box-sizing: border-box; }

  .randomDisplay_title {
    display: flex;
    height: 0.4rem;
    border-bottom: 1px solid #ebebeb; }
  .randomDisplay_title img {
    width: 0.18rem;
    height: 0.18rem;
    margin-top: 0.11rem; }
  .randomDisplay_title p {
    font-size: 0.13rem;
    font-weight: 600;
    color: #000;
    margin-left: 0.02rem;
    margin-right: 0.48rem;
    margin-top: 0.1rem; }
  .randomDisplay_title span {
    margin-top: 0.11rem;
    font-size: 0.08rem;
    color: #b0b0b0; }




</style>
