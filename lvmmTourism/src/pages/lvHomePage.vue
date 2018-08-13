<template>
  <div class="boxa">
    <lv-home-page-header ></lv-home-page-header>
    <div class="boxScroll">
    <lv-home-page-swiper></lv-home-page-swiper>
    <lv-home-page-nav></lv-home-page-nav>
    <section>
       <lv-home-page-section-one :navs="n" v-for="(n,index) in listTwo"></lv-home-page-section-one>
    </section>
    <lv-home-page-line></lv-home-page-line>
    <lv-home-page-warpper :hot="listThree"></lv-home-page-warpper>
    <lv-home-page-active></lv-home-page-active>
    <lv-home-page-rec></lv-home-page-rec>
      <lv-return-top></lv-return-top>
      <lv-home-page-hot></lv-home-page-hot>
    <lv-home-page-guss></lv-home-page-guss>
      <router-view :items="like1"></router-view>
      <router-view :itemtwo="like2"></router-view>
      <router-view :itemthree="like3"></router-view>
      <router-view :itemfour="like4"></router-view>
    </div>
<lv-footer></lv-footer>
  </div>
</template>

<script>
    import LvHomePageHeader from "../components/lmmHomePage/lvHomePageHeader";
    import LvHomePageHotDoor from "../components/lmmHomePage/lvHomePageHotDoor";
    import LvHomePageNav from "../components/lmmHomePage/lvHomePageNav";
    import LvHomePageSwiper from "../components/lmmHomePage/lvHomePageSwiper";
    import LvHomePageSectionOne from "../components/lmmHomePage/lvHomePageSectionOne";
    import LvHomePageLine from "../components/lmmHomePage/lvHomePageLine";
    import LvHomePageWarpper from "../components/lmmHomePage/lvHomePageWarpper";
    import LvHomePageActive from "../components/lmmHomePage/lvHomePageActive";
    import LvHomePageRec from "../components/lmmHomePage/lvHomePageRec";
    import LvHomePageHot from "../components/lmmHomePage/lvHomePageHot";
    import LvHomePageGuss from "../components/lmmHomePage/lvHomePageGuss";
    import LvHomePageLike from "../components/lmmHomePage/lvHomePageLike";
    import LvHomePageOne from "../components/lmmHomePage/lvHomePageOne";
    import LvHomePageTwoLike from "../components/lmmHomePage/lvHomePageTwoLike";
    import LvFooter from "../components/common/lvFooter";
    import LvReturnTop from "../components/lmmFind/lvReturnTop";
    import { Indicator } from 'mint-ui';
    export default {
        name: "lvHomePage",
      components: {
        LvReturnTop,
        LvFooter,
        LvHomePageTwoLike,
        LvHomePageOne,
        LvHomePageLike,
        LvHomePageGuss,
        LvHomePageHot,
        LvHomePageRec,
        LvHomePageActive,
        LvHomePageWarpper,
        LvHomePageHotDoor,
        LvHomePageLine, LvHomePageSectionOne, LvHomePageSwiper, LvHomePageNav,LvHomePageHeader},
      data(){
        return{
          listTwo:[],
          listThree:[],
          like1:[],
          like2:[],
          like3:[],
          like4:[]
        }
      },
      methods:{
        goCity(){
          Indicator.open('正在拼命加载中...');//点击出现加载中...
          setTimeout(()=>{
            Indicator.close();
          },1000);
          },
        initData(){
          fetch("http://localhost:3000/api/like").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.like1 = data.like1;
                this.like2 = data.like2;
                this.like3 = data.like3;
                this.like4= data.like4;
                this.listTwo = data.goods;
                this.listThree = data.list;
                console.log("hdjskhdusgf")
              })
            }
          })
        }
      },
      mounted(){
        $(function(){
          var tit = document.getElementById("choose");
          var titleTop = tit.offsetTop;
          $('.boxScroll').scroll(function () {
            var scrollTop = $(this).scrollTop(); // 滚动条距离顶部的距离
            var containerH = $('.swiper-container img').height(); //
            if(scrollTop>0 && scrollTop <= containerH){
              var a = scrollTop / containerH;
              $('header').css('background','rgba(255,255,255,'+a+')');
              $("#dest").css("color","black")
            }
            if(scrollTop>600 && scrollTop <=1200){
              var containerH=500
              var a = scrollTop / containerH;
              $('header').css('background','rgba(254,83,111,'+a+')');
              $("#dest").css("color","#fff");

            }
            // 吸顶效果
            if($(this).scrollTop()>titleTop+240){
              $("#choose").addClass("fixBox")
            }else{
              $("#choose").removeClass("fixBox")
            }
          });
        })
      },
      created(){
          this.initData()
      }
    }

</script>
<style scoped>
  html,body{
    height: 100%;
  }
  .boxa{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    background:#fff;
  }
  section{
    width: 100%;
    height: 1.4rem;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
  }
  .boxScroll{
    flex: 1;
    overflow-y: scroll;
  }
</style>
