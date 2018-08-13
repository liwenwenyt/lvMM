<template>
  <el-container>
    <el-header>
      <img src="../../assets/img/wybackendbg.png" alt="">
      <lv-backend-user></lv-backend-user>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <lv-backend-as></lv-backend-as>
      </el-aside>
      <el-main>
        <lv-backend-insert></lv-backend-insert>
        <lvbackend-infor>
        </lvbackend-infor>
        <lvbackend-write></lvbackend-write>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import LvBackendAsild from "./lvBackendAsild";
  import LvBackendAs from "./lvBackendAs";
  import LvBackendUser from "./lvBackendUser";
  import LvBackendInsert from "./lvBackendInsert";
  import LvbackendInfor from "./lvbackendInfor";
  import LvbackendWrite from "./lvbackendWrite";
  export default {
    components: {LvbackendWrite, LvbackendInfor, LvBackendInsert, LvBackendUser, LvBackendAs, LvBackendAsild}
  }
</script>

<style scoped>
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

  .el-aside {
    background-color: #fff;
    color: #fff;
    /*text-align: center;*/
    overflow: scroll;
    line-height: 0px;
    margin-top: 0px;
   padding:0px;
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
