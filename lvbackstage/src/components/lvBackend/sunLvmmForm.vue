<template>
  <el-main>
    <el-form align="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item  label="景点名称" prop="name">
        <el-input v-model="ruleForm.name" id="text1" class="inputone"></el-input>
      </el-form-item>
      <el-form-item label="景点所属" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域"  id="text2">
          <el-option label="周边游" value="shanghai"></el-option>
          <el-option label="国内游" value="beijing"></el-option>
          <el-option label="出境游" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="6">
          <el-form-item class="timeinput1" prop="date1">
            <el-date-picker id="text3" type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 217px;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col align="center" class="line" :span="1" >-</el-col>
        <el-col :span="6">
          <el-form-item prop="date2">
            <el-time-picker id="text4" type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 217px;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="立即上线" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="景点分类" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="旅游美食类景区" name="type"></el-checkbox>
          <el-checkbox label="探险类景区" name="type"></el-checkbox>
          <el-checkbox label="刺激类景区" name="type"></el-checkbox>
          <el-checkbox label="节事活动类景区" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助" name="sub"></el-radio>
          <el-radio label="线下场地免费" name="sub"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动主题" prop="desc">
        <el-input id="text5" class="inputtwo" type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
  export default {
    name: "sunlvmmForm",
    data() {
      return {
        productArry:[],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {

        let productArry = [];

        var textone = document.getElementById("text1").value;
        console.log(textone);
        productArry.push(textone);
        var texttwo = document.getElementById("text2").value;
        productArry.push(texttwo);
        var textthree = document.getElementById("text3").value;
        productArry.push(textthree);
        var textfour = document.getElementById("text4").value;
        productArry.push(textfour);
        var textfive = document.getElementsByName('type');
        for(var i = 0; i < textfive.length; i++) {
          var checkedoo = textfive[i].value;
          if(textfive[i].checked) {
            productArry.push(checkedoo);
          }
        }
        var textsix = document.getElementsByName('sub');
        for(var j = 0; j < textsix.length; j++) {
          var textsixov = textsix[j].value;
          if(textsix[j].checked) {
            productArry.push(textsixov);
          }
        }
        var textseven = document.getElementById("text5").value;
        productArry.push(textseven);
        console.log(productArry);

        var porduct = {
          activename:textone,
          activearea:texttwo,
          activedateone:textthree,
          activedatetwo:textfour,
          activedatexinzhi:checkedoo,
          activedatedata:textsixov,
          activexingshi:textseven
        }

        $.ajax({
          url:'http://localhost:3003/api',
          data:porduct,
          type:'POST',
          dataType:"json",
          ContentType:'application/json',     //定义头文件
          success:function(data){
            console.log(data);
          }
        })

        // $.ajax({
        //   url:'http://localhost:3002/api2',
        //   type:'GET',
        //   dataType:"json",
        //   success:function(data){
        //     console.log(data);
        //     this.List = data
        //   }
        // })

        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交成功');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){

    }
  }
</script>

<style scoped>
  .el-main {
    background-color: #fff;
    color: #333;

  }

  .inputone{
    width:217px;
  }

  .timeinput1{
    width:217px;
  }

  .inputtwo{
    width:534px;
  }

  .line{
    margin-right:10px;
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    overflow:hidden;
    margin-bottom:270px;
    /*flex:1;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
