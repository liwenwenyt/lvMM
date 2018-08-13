<template>
  <div class="activityPreferences">
    <div class="activityPreferences_left">
      <p>活动优惠</p>
      <span>{{active.active1}}</span>
      <span v-if="active.active2">{{active.active2}}</span>
      <span v-if="active.active3">{{active.active3}}</span>
      <!--<span>文惠卡立减</span>-->
    </div>
    <div class="activityPreferences_right">
      <span>{{active.activeNum}}个</span>
      <i class="iconfont icon-you"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageActivitypreferences",
      props:["active"]
    }
</script>

<style scoped>
  .activityPreferences {
    width: 100%;
    padding: 0.12rem 0.09rem;
    box-sizing: border-box;
    display: flex;
    background: #fff;
    margin-bottom: 0.07rem;
    justify-content: space-between; }

  .activityPreferences_left {
    display: flex;
    justify-content: center;
    align-items: center; }
  .activityPreferences_left p {
    font-size: 0.12rem;
    color: #000;
    margin-right: 0.04rem; }
  .activityPreferences_left span {
    font-size: 0.1rem;
    color: #cd0060;
    padding: 0.02rem 0.02rem;
    border: 1px solid #cd0060;
    border-radius: 0.02rem;
    margin: 0 0.04rem; }

  .activityPreferences_right {
    display: flex;
    justify-content: center;
    align-items: center; }
  .activityPreferences_right span {
    font-size: 0.1rem;
    color: #000; }
  .activityPreferences_right i {
    font-size: 0.15rem;
    color: #3e4245; }

</style>
