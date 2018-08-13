<template>
  <div class="detailsText">
    <p class="detailsText_top">
      {{text.title}}
    </p>
    <div class="detailsText_bot">
      <div class="detailsText_bot_T">
        <div class="detailsText_bot_TL">
          <img src="/static/img/sundetailsTextpic1.png"/>
          <span>￥</span>
          <span>{{text.price}}</span>
          <span>起</span>
        </div>
        <p>剩余{{text.num}}份</p>
      </div>
      <div class="detailsText_bot_B">
        <div class="detailsText_bot_BR">
          <img src="../../../../static/img/sundetailsTextpic2.png"/>
          <span>距离结束:</span>
          <div class="clock">
            <span class="time day">00</span>
            <span class="colon">天</span>
            <span class="time hour">00</span>
            <span class="colon">:</span>
            <span class="time minute">00</span>
            <span class="colon">:</span>
            <span class="time sec">00</span>
          </div>
        </div>
        <p>抢购中</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "saleDetailspageText",
      props:["text"],
      mounted(){
        $(function(){
          $.fn.extend({
            countDown: function (options) {
              var defaults = {
                  endTime: '2018/09/30',  //结束时间,90年后
                  day: '.day',
                  hour: '.hour',
                  minute: '.minute',
                  sec: '.sec'
                },
                opts = $.extend({}, defaults, options); //对象扩展到opts
              this.each(function () {     //遍历
                var $this = $(this);
                times();    //先执行一次，防止刷新时数字都显示为0
                var timer = setInterval(times, 1000);   //定时器执行

                function times() {
                  var nowDate = new Date(),
                    endDate = $this.data('end') ? new Date($this.data('end')) : new Date(opts.endTime),// 定义了两种方式，data-end和defaults.endTime,优先data-end
                    tms = endDate - nowDate,    //时间差
                    days = Math.floor(tms / 1000 / 60 / 60 / 24),
                    hours = Math.floor(tms / 1000 / 60 / 60 % 24),
                    minutes = Math.floor(tms / 1000 / 60 % 60),
                    secs = Math.floor(tms / 1000 % 60);
                  if (tms > 0) {  //如果时间差大于0，显示倒计时
                    $this.find(opts.day).text(addZero(days));
                    $this.find(opts.hour).text(addZero(hours));
                    $this.find(opts.minute).text(addZero(minutes));
                    $this.find(opts.sec).text(addZero(secs));
                  } else {    //否则清除定时器，倒计时结束
                    clearInterval(timer);
                  }
                }
              });

              function addZero(t) {  //一位数加0
                if (t < 10) {
                  return t = '0' + t;
                } else {
                  return t;
                }
              }
              return this; //返回this方便链式调用
            }
          });
          $('.clock').countDown();//默认调用方法
        })
      }
    }
</script>

<style scoped>
  .detailsText {
    width: 100%;
    padding: 0 0.09rem;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.01rem; }

  .detailsText_top {
    font-size: 0.14rem;
    color: #181818;
    text-indent: 0.14rem;
    padding: 0.05rem 0; }

  .detailsText_bot {
    display: flex;
    flex-direction: column; }

  .detailsText_bot_T {
    background: #fff8fb;
    height: 0.53rem;
    padding-right: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4; }
  .detailsText_bot_T p {
    font-size: 0.1rem;
    color: #b3b3b3; }

  .detailsText_bot_TL {
    display: flex;
    justify-content: center;
    align-items: center; }
  .detailsText_bot_TL img {
    width: 0.88rem;
    height: 0.53rem; }
  .detailsText_bot_TL span:nth-child(2) {
    font-size: 0.1rem;
    color: #d20172; }
  .detailsText_bot_TL span:nth-child(3) {
    font-size: 0.2rem;
    color: #d20172; }
  .detailsText_bot_TL span:nth-child(4) {
    margin-left: 0.03rem;
    font-size: 0.1rem;
    color: #4b4a4a; }

  .detailsText_bot_B {
    background: #fff8fb;
    height: 0.53rem;
    padding-right: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center; }
  .detailsText_bot_B p {
    font-size: 0.1rem;
    color: #ff6500; }

  .detailsText_bot_BR {
    display: flex;
    justify-content: center;
    align-items: center; }
  .detailsText_bot_BR img {
    width: 0.17rem;
    height: 0.17rem;
    margin: 0 0.04rem; }
  .detailsText_bot_BR span:nth-child(2) {
    font-size: 0.11rem;
    color: #9c9d9d; }

  .clock {
    width: 1.5rem;
    height: 0.33rem;
    display: flex;
    align-items: center;
    justify-content: center; }
  .clock span {
    font-size: 0.13rem; }
  .clock span:nth-child(4) {
    color: #333; }

  .time {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #7f7c7d;
    color: #fff;
    width: 0.22rem;
    height: 0.22rem;
    border-radius: 0.02rem; }

  .colon {
    margin: 0 0.04rem;
    color: #333; }
</style>
