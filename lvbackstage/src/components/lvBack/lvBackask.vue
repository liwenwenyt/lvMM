<template>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "lvBackask",
        data() {
          return {
            input10: ''
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

</style>
