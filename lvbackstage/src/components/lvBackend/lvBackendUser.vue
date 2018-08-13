<template>
  <el-row class="block-col-2">
    <el-col :span="12">
      <span class="demonstration"></span>
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        欢迎您<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "lvBackendUser"
    }
</script>

<style scoped>
  /*.block-col-2{*/
    /*margin-right: 20px;*/
  /*}*/
  /*.el-dropdown-link{*/
    /*width: 100px;*/
  /*}*/
  .el-col{
    display: flex;
    justify-content: flex-end;
  }
  .block-col-2{
    display: flex;
    justify-content: flex-end;
  }
  .el-dropdown{
    width: 200px;
  }
  .el-dropdown-link{
    color: #fff;
  }
</style>
