<template>

  <el-row class="tac">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#3797a8"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title" style="width:100%;display: flex;align-items: center">
            <i class="el-icon-location"></i>
            <router-link to="/lvBackHomePage">
            <span>首页</span>
            </router-link>
          </template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title" class="title">
              <i class="el-icon-menu"></i>
              <span slot="title">景点管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/addsub">
              <el-menu-item index="1-1">新增景点</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">表单管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/sunlvmmForm">
            <el-menu-item index="1-1">表单一</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
  </el-row>


</template>
<script>
    export default {
        name: "lvBackendAs",
      data() {
        return {
          isCollapse: true
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }

    }
</script>

<style >
.tac{
  width: 100%;
  height: 100%;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
    height: 100%;
  }
  .el-submenu{
    display: flex;

  }
  a{
    color: white;
  }
  li{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  element.style {
    padding-left: 20px;
    color: rgb(255, 255, 255);
    background-color: rgb(55, 151, 168);
  }
  li .el-submenu__title {
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .el-menu-item, .el-submenu__title {
    height: 56px;
    line-height: 56px;
    position: relative;
    box-sizing: border-box;
    white-space: nowrap;
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
  }
  /*.el-menu-item, .el-submenu__title{*/
    /*display: flex;*/
    /*align-items: center;*/
  /*}*/
</style>
