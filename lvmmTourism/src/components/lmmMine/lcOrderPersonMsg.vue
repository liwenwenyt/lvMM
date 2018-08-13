<template>
  <div class="section-person-msg">
    <div class="person-msg-box person-msg-box1">
      <span class="box-left">取票人信息</span>
      <i class="iconfont icon-qunzuduoren"></i>
      <span class="add-msg add-msg1">请补全取票人信息</span>
    </div>
    <div class="person-msg-box">
      <span class="box-left">姓名</span>
      <input type="text" placeholder="必填">
      <span class="add-msg">生僻字可用拼音代替</span>
    </div>
    <div class="person-msg-box">
      <span class="box-left">手机号</span>
      <input type="text" placeholder="请输入11位手机号">
      <span class="add-msg">请输入正确的手机号</span>
    </div>
    <div class="person-msg-box person-msg-box4">
      <span class="box-left">身份证</span>
      <input type="text" placeholder="用于景区入园等凭证">
      <span class="add-msg">请输入正确的证件号</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lcOrderPersonMsg"
    }
</script>

<style scoped>
.section-person-msg{
    height: 1.76rem;
    background: #fff;
    margin: .08rem 0;
    padding: 0 .1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 .section-person-msg .person-msg-box{
    flex: 1;
    width: 100%;
    border-bottom: .02rem solid #f4f4f4;
    display: flex;
    align-items: center;
    font-size: .14rem;
    color: #3f3f3f;
    justify-content: flex-start;
    position: relative;
  }
.section-person-msg .person-msg-box .add-msg{
    position: absolute;
    top: 0;
    left: 35%;
    transform: translateX(-50%);
    font-size: .08rem;
    color: red;
    display: none;
  }
 .section-person-msg .person-msg-box .add-msg1{
    top: 40%;
    left: 35%;
    transform: translate(-50%);
  }
 .section-person-msg .person-msg-box1{
    justify-content: space-between;
  }
 .section-person-msg .person-msg-box4{
    border: 0;
  }
 .section-person-msg .person-msg-box .box-left{
    min-width: .8rem;
  }
.section-person-msg .person-msg-box input{
    border: 0;
  }
</style>
