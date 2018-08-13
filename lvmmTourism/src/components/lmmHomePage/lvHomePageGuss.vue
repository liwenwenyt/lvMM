<template>
    <div>
      <div id="choose">
        <router-link to="/door1">
          <a class="hit">门票</a>
        </router-link>
        <router-link to="/door2">
            <a  class="hit">周边游</a>
        </router-link>
        <router-link to="/door3">
             <a  class="hit">国内游</a>
        </router-link>
        <router-link to="/door4">
            <a  class="hit">出境游</a>
        </router-link>
      </div>
    </div>
</template>
<script>
    import LvHomePageHot from "./lvHomePageHot";
    export default {
        name: "lvHomePageGuss",
      components: {LvHomePageHot},
      data(){
        return{
          list:[]
        }
      },
      methods:{
        initData(){
          fetch("http://localhost:3000/api/like").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.list = data;
                console.log("bbb");
                console.log(this.list);
              })
            }
          })
        },
      },
      created(){
        this.initData();
        },
     mounted(){
       $("#choose a").click(function () {
         $(this).addClass("hid").parent().find(".hit").removeClass("hid")
      })
     }
    }
</script>

<style scoped>
  #choose{
    width: 100%;
    height: 0.45rem;
    display: flex;
    justify-content: space-around;
    padding-top: 0.15rem;
    box-sizing: border-box;
    /*align-items: center;*/
    border-bottom: 1px solid #e1e1e1;
  }
  #choose a{
    font-size: 0.13rem;
    color: #848484;
    padding-bottom: 0.12rem;
  }
  #choose a:nth-child(1){
    font-size: 0.13rem;
    color: #333333;

  }
  .hid{
    color: #333333;
    border-bottom: 3px solid #fe5e6e;
  }
  .fixBox{
    position: fixed;
    background: #fff;
    top:0.44rem;
  }
</style>
