<template>
    <div>
      <div class="preName">
        <div class="recommendBox">
          <div class="recommend">
            <i class="iconfont icon-icon30"></i>
            <span class="tuijian">{{fnlists.title}}</span>
          </div>
        </div>
      </div>
      <div class="tickets-box">
        <ul class="tickets">
          <lv-particular-meu :lists="a" :item="a" v-for="(a,index) in fnlists.lists" :key="index" :idc="idb"></lv-particular-meu>
        </ul>
      </div>
    </div>
</template>

<script>
  import lvParticularMeu from "./lvParticularMeu.vue"
    export default {
        name: "lvTickets",
        components:{lvParticularMeu},
        props:["fnlists","idb"]

    }
</script>

<style scoped>

  .tickets-box{
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
  }
  .tickets{
    width: 3.44rem;
    margin: 0 auto;
  }
  li{
    width: 3.44rem;
    height: 1.46rem;
    display: flex;
    border-bottom:1px solid #eeeef7;
  }
  b{
    color: #ff7910;
    font-size: .2rem;
  }
  .icon-icon30{
    font-size: .2rem!important;
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
