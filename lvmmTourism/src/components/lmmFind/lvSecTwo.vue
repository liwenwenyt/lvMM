<template>

      <div class="sec_two">
        <div class="two_top">
          <img :src="slist.img" alt="">
          <div class="two_top_cont">
            <div class="two_cont_top">
              <span>微攻略</span>
            </div>
            <div class="two_cont_bot">
              <span>{{slist.place}}</span>
              <span>【微攻略】{{slist.text}}</span>
            </div>
          </div>
        </div>
        <div class="two_bot">
          <lv-travel :sitem="i" v-for=" i in slist.travels" ></lv-travel>
        </div>
      </div>
</template>
<script>
    import LvTravel from "./lvTravel";
    export default {
        name: "lvSecTwo",
      components: {LvTravel},
      props:["slist"]
    }
</script>

<style scoped>
  .sec_two{
    width: 3.55rem;
    height: auto;
    margin: auto;
    margin-top: 0.1rem;
  }
  .two_top{
    width: 100%;
    height: 1.38rem;
    position: relative;
  }
  .two_top img{
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 3px;
  }
  .two_top_cont{
    width: 100%;
    height: 100%;
    z-index: 2;
    background: transparent;
    position: absolute;
    padding: 0.1rem 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .two_cont_top{
    width: 0.52rem;
    height:0.2rem;
    background: rgba(92,98,105,.6);
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .two_cont_top span{
    font-size: 0.12rem;
    color: #fff;
    transform: scale(0.9);
  }
  .two_cont_bot{
    display: flex;
    flex-direction: column;

  }
  .two_cont_bot span{
    font-size: 0.14rem;
    color: #fff;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .two_bot{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    margin-top: 0.1rem;
    border-radius: 3px;
    padding: 0.1rem;
    box-sizing: border-box;
  }


</style>
