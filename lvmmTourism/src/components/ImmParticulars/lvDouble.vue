<template>
    <div>
      <div class="preName other">
        <div class="recommendBox">
          <div class="recommend">
            <i class="iconfont icon-qunzu"></i>
            <p class="tuijian">双人票</p>
          </div>
          <i class="iconfont icon-xiala"></i>
        </div>
      </div>
      <div class="preName other">
        <div class="recommendBox">
          <div class="recommend">
            <i class="iconfont icon-menpiao-"></i>
            <p class="tuijian">相关票</p>
          </div>
          <i class="iconfont icon-xiala"></i>
        </div>
      </div>
      <div class="preName other">
        <div class="recommendBox">
          <div class="recommend">
            <i class="iconfont icon-menpiao-"></i>
            <p class="tuijian">组合套餐</p>
          </div>
          <i class="iconfont icon-xiala"></i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "lvDouble"
    }
</script>

<style scoped>
  @import "../../assets/css/iconfont.css";
  .other{
    margin-bottom: 10px;
  }
  .icon-qunzu{
    font-size: .18rem!important;
    margin-top: 2px;
  }
  .icon-menpiao-{
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
