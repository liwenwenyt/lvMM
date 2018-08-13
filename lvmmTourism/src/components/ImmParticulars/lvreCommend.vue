<template>
    <div>
      <div class="preName">
        <div class="recommendBox">
          <div class="recommend">
            <i class="iconfont icon-xinxing"></i>
            <p class="tuijian">推荐</p>
          </div>
        </div>
      </div>
      <!-- 门票 -->
      <div class="tickets-box">
        <ul class="tickets">
          <lv-particulars-li :item="n" :idi="index" v-for="(n,index) in lists" ></lv-particulars-li>
        </ul>
      </div>
      <div class="advertising">
        <img src="../../../static/img/110.png" alt="">
      </div>
    </div>
</template>

<script>
  import lvParticularsLi from './lvParticularsLi'
    export default {
        name: "lvreCommend",
        props:["lists"],
        components:{lvParticularsLi}
    }
</script>

<style scoped>
  @import "../../assets/css/iconfont.css";

  .tickets-box{
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
  }
  .tickets{
    width: 3.44rem;
    margin: 0 auto;
  }
  .advertising{
    margin: 0 0 10px 0;
  }
  .preName{
    width: 100%;
    height: .5rem;
    background-color: white;
  }
  .recommendBox{
    width: 3.44rem;
    height: .5rem;
    margin: 0 auto;
    border-bottom: 1px solid #f8f8fd;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .recommend{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tuijian{
    font-size: .16rem;
    font-weight: bold;
    margin-left: .12rem;
  }
  .preName{
    width: 100%;
    height: .5rem;
    background-color: white;
  }
  .recommendBox{
    width: 3.44rem;
    height: .5rem;
    margin: 0 auto;
    border-bottom: 1px solid #f8f8fd;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .recommend{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tuijian{
    font-size: .16rem;
    font-weight: bold;
    margin-left: .12rem;
  }
</style>
