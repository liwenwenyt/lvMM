<template>
  <div class="quintessenceReview">
    <div class="quintessenceReview_mid">
      <div class="quintessenceReview_mid_left">
        <p>游客点评</p>
        <p>（<span>99.3%</span>好评率）</p>
      </div>
      <div class="quintessenceReview_mid_right">
        <span>共14条点评</span>
        <i class="iconfont icon-you"></i>
      </div>
    </div>
    <div class="quintessenceReview_bot">
      <p>
        <span>4.93</span>
        <span>服务</span>
      </p>
      <img src="../../../../static/img/sundetailsreviewpic2.png"/>
      <p>
        <span>4.93</span>
        <span>设施</span>
      </p>
      <img src="../../../../static/img/sundetailsreviewpic2.png"/>
      <p>
        <span>4.93</span>
        <span>环境</span>
      </p>
      <img src="../../../../static/img/sundetailsreviewpic2.png"/>
      <p>
        <span>4.93</span>
        <span>酒店位置</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageQuintessenceReview"
    }
</script>

<style scoped>
  .quintessenceReview {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0.09rem;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 0.07rem; }

  .quintessenceReview_mid {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #f5f5f5; }

  .quintessenceReview_mid_left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.13rem 0; }
  .quintessenceReview_mid_left p:first-child {
    font-size: 0.12rem;
    color: #000;
    margin-right: 0.13rem; }
  .quintessenceReview_mid_left p:last-child {
    font-size: 0.1rem;
    color: #adadad; }
  .quintessenceReview_mid_left p:last-child span {
    font-size: 0.1rem;
    color: #cf0069; }

  .quintessenceReview_mid_right {
    display: flex;
    justify-content: center;
    align-items: center; }
  .quintessenceReview_mid_right span {
    font-size: 0.1rem;
    color: #adadad; }
  .quintessenceReview_mid_right i {
    font-size: 0.15rem;
    color: #3e4245; }

  .quintessenceReview_bot {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.54rem; }
  .quintessenceReview_bot p {
    display: flex;
    width: 24%;
    justify-content: center;
    align-items: center;
    flex-direction: column; }
  .quintessenceReview_bot p span:first-child {
    font-size: 0.12rem;
    color: #333; }
  .quintessenceReview_bot p span:last-child {
    font-size: 0.12rem;
    color: #a2a2a2; }
  .quintessenceReview_bot img {
    width: 0.01rem;
    height: 0.25rem; }
</style>
