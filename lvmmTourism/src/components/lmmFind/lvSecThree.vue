<template>
  <div class="sec_three">

    <div class="site">
     <lv-attraction  :sitem="n" :idi="index" :idw="qid" v-for="(n,index) in item.attractions" ></lv-attraction>

    </div>
    <div class="logal" >
      <img :src="item.pic" alt="">
    </div>

    <div class="sec_two">
      <div class="two_top">
        <img :src="item.img" alt="">
        <div class="two_top_cont">
          <div class="two_cont_top">
            <span>微攻略</span>
          </div>
          <div class="two_cont_bot">
            <span>{{item.place}}</span>
            <span>【微攻略】{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="two_bot">
       <lv-travel :sitem="n" v-for="(n,index) in item.travels" ></lv-travel>
      </div>
    </div>
  </div>
</template>

<script>
    import LvAttraction from "./lvAttraction";
    import LvSecTwo from "./lvSecTwo";
    import LvTravel from "./lvTravel";
    export default {
        name: "lvSecThree",
      props:["item","slist","sitem","qid"],
      components: {LvTravel, LvSecTwo, LvAttraction}
    }
</script>

<style scoped>
  .sec_three{
    width: 100%;
    height: auto;
  }

  /*site*/
  .site{
    width: 100%;
    height: 1rem;
    overflow-x: scroll;
    display: flex;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }

  .logal img{
    width: 3.55rem;
    height: 1.2rem;
    margin: auto;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
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
  .sec_two{
    width: 3.55rem;
    height: 4rem;
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
  .two_bot_cont{
    width: 100%;
    height: 1.05rem;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 0.15rem;
  }
  .cont_top{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.8rem;
    margin-bottom:0.06rem ;
  }
  .cont_top_left{
    width: 2.04rem;
    height: 100%;
  }
  .cont_top_left h6{
    font-size: 0.14rem;
    color: #0f0f0f;
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .cont_top_left p{
    font-size: 0.12rem;
    color: #a9a9a9;
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0.05rem;
  }
  .cont_top_right{
    width: 1.2rem;
    height: 100%;
    position: relative;
  }
  .cont_top_right img{
    width: 100%;
    height: 100%;
    border-radius: 3px;
    position: absolute;
  }
  .cont_top_right span{
    font-size: 0.12rem;
    color: #fff;
    position: absolute;
    z-index: 2;
    margin-top: 0.55rem;
    margin-left: 0.1rem;
  }
  .cont_bot{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .cont_bot_left{
    display: flex;
  }
  .cont_bot_left p{
    height: 0.13rem;
    border: 1px solid #ffb0b8;
    display: flex;
    margin-right: 0.05rem;
    align-items: center;
  }
  .cont_bot_left p span{
    font-size: 0.12rem;
    transform:scale(0.8);
    color:#ffb0b8 ;
  }
  .cont_bot_right{
    display: flex;
  }
  .cont_bot_right p{
    display: flex;
    align-items: center;
    margin-right: 0.05rem;
  }
  .icon-dianzan{
    font-size: 0.13rem;
    color: #b1b1b1;
  }
  .cont_bot_right p span{
    font-size: 0.12rem;
    color:#b1b1b1 ;
    transform: scale(0.8);
  }
  .icon-yanjing{
    font-size: 0.14rem;
    color: #b1b1b1;
  }
  .two_bot_cont:last-child{
    border-bottom: none;
  }
</style>
