<template>
  <div class="footer">
    <a href="#" @click="goone">
      <img src="/static/img/sunfootericon1.png"/>
      <img src="/static/img/sunfootericon11.png"/>
      <p>首页</p>
    </a>
    <a href="#" @click="gotwo">
      <img src="/static/img/sunfootericon2.png"/>
      <img src="/static/img/sunfootericon22.png"/>
      <p>特卖</p>
    </a>
    <a href="#"  @click="gothree">
      <img src="/static/img/sunfootericon3.png"/>
      <img src="/static/img/sunfootericon33.png"/>
      <p>发现</p>
    </a>
    <a href="#" @click="gofour">
      <img src="/static/img/sunfootericon4.png"/>
      <img src="/static/img/sunfootericon44.png"/>
      <p>客服</p>
    </a>
    <a href="#" @click="gofive">
      <img src="/static/img/sunfootericon5.png"/>
      <img src="/static/img/sunfootericon55.png"/>
      <p>我的</p>
    </a>
  </div>
</template>

<script>
  export default {
    name: "lvFooter",
    mounted(){
      $(function(){
        //初始化
        $(".footer a:nth-child(1)").children("img:nth-child(2)").css({"width":"0.5rem","height":"0.41rem"});
        $(".footer a:nth-child(1)").children("p:last-child").css("display","none");
        $(".footer a:nth-child(1)").children("img:nth-child(1)").css("display","none");
        $(".footer a:nth-child(1)").siblings().children("img:nth-child(2)").css("display","none");
        //点击后
        $(".footer a").on("click",function(){
          $(this).children("img:nth-child(1)").css("display","none");
          $(this).children("p:last-child").css("display","none");
          $(this).children("img:nth-child(2)").css({"display":"block","width":"0.5rem","height":"0.41rem"});
          $(this).siblings().children("img:nth-child(1)").css("display","block");
          $(this).siblings().children("p:nth-child(3)").css("display","block");
          $(this).siblings().children("img:nth-child(2)").css("display","none");
        })
      })
    },
    methods:{
      goone(){
        this.$router.push({
          name:"lvHomePage",
          path:"/",
        })
      },
      gotwo(){
        this.$router.push({
          name:"salepage",
          path:"/sale",
        })
      },
      gothree(){
        this.$router.push({
          name:"lvFind",
          path:"/find",
        })
      },
      gofour(){
        this.$router.push({
          name:"lmmService",
          path:"/lmmService",
        })
      },
      gofive(){
        this.$router.push({
          name:"lcLmmMine",
          path:"/lcLmmMine",
        })
      },

      }
  }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 0.49rem;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }

  .footer a {
    width: 20%;
    height: 0.39rem;
    padding: 0.05rem 0 0.05rem 0;
    text-align: center;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; }
  .footer a img {
    width: 0.3rem;
    height: 0.3rem; }
  .footer a p {
    font-size: 0.1rem;
    color: #aba8a2; }
</style>
