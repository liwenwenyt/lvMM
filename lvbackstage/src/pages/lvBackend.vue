<template>
  <el-container>
    <el-header>
      <img src="/static/img/lvlogo.png" alt="">
      <lv-backend-user></lv-backend-user>
    </el-header>
    <el-container style="flex: 1">
      <div class="aside2" style="height: 100%;display: flex;flex-direction: column">
        <div class="aside1" style="height: 100%">
          <el-aside style="height: 100%;width:200px" >
            <lv-backend-as></lv-backend-as>
          </el-aside>
        </div>
      </div>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import LvBackendAs from "../components/lvBackend/lvBackendAs";
  import LvBackendUser from "../components/lvBackend/lvBackendUser";

  export default {
    components: { LvBackendUser, LvBackendAs}
  }
</script>

<style >
  html{
    width: 100%;
    height: 100%;
  }
  body{
    width: 100%;
    height: 100% !important;
  }
  .el-header{
    display: flex;
    justify-content: space-between;
  }
  .el-header, .el-footer {
    background-color: #3797a8;
    color: #333;
    /*text-align: center;*/
    line-height: 60px;
  }
  .el-header img{
    width: 184px;
    height: 60px;
  }
  /*el-container{*/
    /*padding: 0px;*/
  /*}*/
section{
  flex: 1;
}
  .el-aside {
    background-color: #fff;
    color: #fff;
    /*text-align: center;*/
    overflow: scroll;
    line-height: 0px;
    margin-top: 0px;
    padding:0px;
    height: 100%;
    width: 200px;
  }
  .el-aside::-webkit-scrollbar{
    display: none;
  }
  .el-main {
    background-color: #fff;
    color: #333;

  }

  /*body > .el-container {*/
    /*margin-bottom: 40px;*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
    /*line-height: 320px;*/
  /*}*/
</style>
