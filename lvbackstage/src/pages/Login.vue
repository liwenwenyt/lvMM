<template>
    <div class="login-wrap">
        <div class="ms-title">驴妈妈后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-checkbox v-model="checked" class="sevenCheck">7天内免登录</el-checkbox>
                <a href="javascript:;" class="lvforget">忘记密码</a>
                <div class="login-btn">
                    <router-link to="/lvBackend">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </router-link>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                checked: true,
                ruleForm: {
                    username: '魏瑶',
                    password: '123123'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        created() {//页面创建完成之后拿信息
            this.$axios()//url地址
            .then(res=>{
                console.log(res.data);//拿数据
            })
            .catch(error=>{//错误信息
                console.log(error);
            })
        },
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    .lvforget{
        font-size: 13px;
        color: black;
        position: relative;
        left: 140px;
        bottom: 16px;
    }
    .sevenCheck{
        position: relative;
        bottom: 16px;
    }
</style>