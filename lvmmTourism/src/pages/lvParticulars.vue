<template>
  <div class="lv">
    <lv-particulars-header></lv-particulars-header>
    <lv-section :ticketlists="lvLists" :alist="bigBoxlists" :ida = "idt"></lv-section>
  </div>
</template>

<script>
  import lvParticularsHeader from '../components/ImmParticulars/lvParticularsHeader.vue'
  import lvSection from '../components/ImmParticulars/lvSection'
  import { Indicator } from 'mint-ui';
    export default {
      components:{
        lvParticularsHeader,
        lvSection
      },
        name: "lvParticulars",
        data(){
          return {
            lvLists:{},
            bigBoxlists:[],
            idt:0
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
            var id=this.$route.query.id
            fetch("http://localhost:3000/api/lvParticularRe?id="+id).then(response=>{
              if(response.ok){
                response.json().then(data=>{
                  console.log(data)
                  // console.log(this.idt)
                  this.lvLists = data;
                  this.idt = id;
                  console.log(this.idt)
                  console.log(id)
                })
              }
            })
            fetch("http://localhost:3000/api/lvParticularfn").then(response=>{
              if(response.ok){
                response.json().then(data=>{
                  this.bigBoxlists = data;
                })
              }
            })
          }
        },
        created(){
          this.initData()
        },
        mounted(){
          $("section").scroll(function(){
            var scrollTop = $(this).scrollTop();
            var containeH = $(".swiper-container img").height();
            if(scrollTop>0 && scrollTop<=containeH){
              var a = scrollTop/containeH;
              $('header').css('backgroundColor','rgba(255,255,255,'+a+')');
              $(".scenicText").css('opacity',a);
            }
            if(scrollTop>225){
              $(".icon-gengduo, .icon-fenxiang1, .icon-jiantou_zuo").css({'backgroundColor':'white','color':'black'});
            }
            else if(scrollTop<=225){
              $(".icon-gengduo, .icon-fenxiang1, .icon-jiantou_zuo").css({'backgroundColor':'rgba(0, 0, 0, .2)','color':'white'});
            }
          })
        }

    }
</script>

<style scoped>
  .lv{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>
