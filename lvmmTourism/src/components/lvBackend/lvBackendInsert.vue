<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item>
      <el-select v-model="formInline.region" placeholder="姓名">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="primary" @click="onSubmit">新增</el-button>

    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "lvBackendInsert",
      data() {
        return {
          formInline: {
            user: '',
            region: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style scoped>
  .el-form{
    width: 100%;
    background: #f5f6f7;
    height: 50px;
    line-height: 45px;
    vertical-align: center;
    padding: 10px;
  }
</style>
