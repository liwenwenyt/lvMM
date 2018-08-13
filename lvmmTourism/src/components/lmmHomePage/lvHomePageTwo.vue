<template>
  <div class="chooseBox" @click="godetails">
    <img v-lazy="fstwo.pic" alt="">
    <h4>{{fstwo.title}}</h4>
    <div class="like_bottom">
      <div class="like_bottom_left">
        <p>{{fstwo.price}}</p>
        <span>起</span>
      </div>
      <h5>{{fstwo.per}}</h5>
    </div>
  </div>
</template>
<script>
  export default {
    name: "lvHomePageTwo",
    props:["fstwo","idi"],
    methods:{
      godetails(){
        this.$router.push({
          name:"lvParticulars",
          path:"/lvParticularRe",
          query:{
            id:this.idi
          }
        })
      }
    }
  }
</script>

<style scoped>
  .chooseBox{
    width: 1.72rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
  }
  .chooseBox img{
    width: 1.72rem;
    height:1.14rem ;
  }
  .chooseBox h4{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    width: 1.71rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.12rem;
    color: #2e2e2e;
    margin-top: 0.07rem;
    margin-left: 0.06rem;
    padding-right: 0.1rem;
    box-sizing: border-box;
  }
  .like_bottom{
    display: flex;
    margin-top: 0.11rem;
    margin-bottom: 0.08rem;
    justify-content: space-between;
    padding-left: 0.06rem;
    padding-right: 0.06rem;
    box-sizing: border-box;
    align-items: center;
  }

  .like_bottom_left{
    display: flex;
    align-items:center;
  }
  .like_bottom_left p{
    font-size: 0.16rem;
    color:#ff3f10 ;
  }
  .like_bottom_left span{
    font-size:0.11rem ;
    color: #b8b8b8;
  }
  .like_bottom h5{
    font-weight: 100;
    font-size: 0.08rem;
    color: #c0c0c0;
  }
</style>
