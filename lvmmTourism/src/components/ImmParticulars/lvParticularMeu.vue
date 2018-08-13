<template>
    <div class="menu">
      <li class="tickets-click">
        <span class="tickets-title">{{lists.name}}</span>
        <div class="moreThan">
          <p class="startPrice">
            <span class="symbol">￥</span><b>{{lists.price}}</b>起
          </p>
          <i class="iconfont icon-xiala"></i>
        </div>
      </li>
      <ul class="tickets-list">
        <lv-particulars-li :item="m" :idi="index" v-for="(m,index) in lists.items" :key="index" :idd="idc"></lv-particulars-li>
      </ul>
    </div>
</template>

<script>
  import lvParticularsLi from './lvParticularsLi'
    export default {
        name: "lvParticularMeu",
        props:["lists","item","idc"],
        components:{lvParticularsLi},
        mounted(){
          $(".tickets-click").click(function(){
            // console.log($(this));
            $(this).next($(".tickets-list")).slideToggle("5000");
          })
        }
    }
</script>

<style scoped>
  .tickets-click{
    width: 3.44rem;
    height: .58rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f8f8fd;
  }
  .tickets-list{
    width: 3.44rem;
    margin: 0 auto;
  }
  b{
    color: #ff7910;
    font-size: .2rem;
  }
  .moreThan{
    width: .84rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon-xiala{
    margin-top: 2px;
  }
  .symbol{
    color: #ff7910;
  }
  .tickets-title{
    font-size: .14rem;
  }
  .startPrice{
    font-size: .12rem;
    text-align: center;
    color: #747c74ed;
  }


</style>
