<template>

    <div class="site_cont" @click="route">
      <img :src="sitem.img" alt="">
      <div class="textbox">
        <span>{{sitem.place}}</span>
        <span>{{sitem.num}}人想去</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "lvAttraction",
      props:["sitem","idi","idw"],
      methods:{

          route(){
            this.$router.push({
              name:'lvFindDetal',
              path:'/detal',
              query:{
                id:this.idi,
                sid:this.idw
              }
            })
          }
      }
    }
</script>

<style scoped>
  .site_cont{
    width: 1.5rem;
    height: 100%;
    display: flex;
    position: relative;
    margin-right: 0.1rem;
  }
  .site_cont:last-child{
    padding-right: 0.1rem;
  }
  .site_cont img{
    width: 1.5rem;
    height: 100%;
    border-radius: 3px;
  }
  .textbox{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .textbox span:nth-of-type(1){
    font-size: 0.14rem;
    color: #fff;
  }
  .textbox span:nth-of-type(2){
    font-size: 0.12rem;
    color: #fff;
    transform: scale(.8);
  }
</style>
