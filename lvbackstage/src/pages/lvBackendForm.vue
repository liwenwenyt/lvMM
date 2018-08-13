<template>
  <div id="table">
    <div class="add">
      <input type="text" v-model="addDetail.title" name="title" value="" placeholder="标题" />
      <input type="text" v-model="addDetail.money" name="money" value="" placeholder="总价" />
      <input type="text" v-model="addDetail.num" name="num" value="" placeholder="数量" />
      <input type="date" v-model="addDetail.time" name="time" value="" placeholder="时间" />
      <button @click="adddetail">新增</button>
    </div>
    <table cellpadding="0" cellspacing="0">
      <thead>
      <tr>
        <th>序号</th>
        <th>订单标题</th>
        <th>数量</th>
        <th>总计</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in newsList" >
        <td width="5%">{{index+1}}</td>
        <td>{{item.title}}</td>
        <td width="10%">{{item.num}}</td>
        <td width="10%">{{item.money}}</td>
        <td width="10%">{{item.time}}</td>
        <td width="15%"><span @click="deletelist(item.id,index)" class="delete">删除</span><span class="edit" @click="edit(item)">编辑</span></td>
      </tr>
      </tbody>
    </table>
    <div id="mask" v-if="editlist">
      <div class="mask">
        <div class="title">
          编辑
          <span @click="editlist=false">
							X
						</span>
        </div>
        <div class="content">
          <input type="text" v-model="editDetail.title" name="title" value="" placeholder="标题" />
          <input type="text" v-model="editDetail.money" name="money" value="" placeholder="总价" />
          <input type="text" v-model="editDetail.num" name="num" value="" placeholder="数量" />
          <input type="date" v-model="editDetail.time" name="time" value="" placeholder="时间" />
          <button @click="update">更新</button>
          <button @click="editlist=false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lvBackendForm",
      data(){
      return{
        addDetail: {},
        editlist: false,
        editDetail: {},
        newsList: [],
        editid:''
      }
      },
      mounted() {

      },
      methods: {

        //新增
        adddetail() {
          //这里的思路应该是把this.addDetail传给服务端，然后加载列表this.newsList
          //this.newsList.push(this.addDetail)
          this.newsList.push({
            title: this.addDetail.title,
            money: this.addDetail.money,
            num: this.addDetail.num,
            time: this.addDetail.time,
            id:Math.floor(Math.random()*1000000+1)
          })

          //axios.post('url',this.addDetail).then((res) =>{
          //若返回正确结果，清空新增输入框的数据
          //this.addDetail.title = ""
          //this.addDetail.user = ""
          //this.addDetail.dates = ""
          //})

        },
        //删除
        deletelist(id, i) {
          this.newsList.splice(i, 1);
          //这边可以传id给服务端进行删除  ID = id
          //axios.get('url',{ID:id}).then((res) =>{
          //			加载列表
          //})
        },
        //编辑
        edit(item) {
          console.log(item)
          this.editDetail ={
            title: item.title,
            money: item.money,
            num: item.num,
            time:item.time,
            id: item.id
          }
          this.editlist = true
          this.editid = item.id

        },
        //确认更新
        update() {
          //编辑的话，也是传id去服务端
          //axios.get('url',{ID:id}).then((res) =>{
          //			加载列表
          //})
          let _this= this
          for(let i = 0; i < _this.newsList.length; i++) {
            if(_this.newsList[i].id ==this.editid) {
              _this.newsList[i]= {
                title: _this.editDetail.title,
                money: _this.editDetail.money,
                num: _this.editDetail.num,
                time: _this.editDetail.time,
                id: this.editid
              }
              this.editlist = false
            }
          }
        },
        initData(){
          fetch("http://localhost:3003/api4").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.newsList=data
                console.log(this.newsList)
              })
            }
          })
        }
      },
      created(){
          this.initData()
      }
    }
</script>

<style scoped>
  #table table {
    width: 100%;
    font-size: 14px;
    border: 1px solid #eee
  }

  #table {
    padding: 0 10px;
  }

  table thead th {
    background: #f5f5f5;
    padding: 10px;
    text-align: left;
  }

  table tbody td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
  }

  table tbody td span {
    margin: 0 10px;
    cursor: pointer;
  }

  .delete {
    color: red;
  }

  .edit {
    color: #008cd5;
  }

  .add {
    border: 1px solid #eee;
    margin: 10px 0;
    padding: 15px;
  }

  input {
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 3px;
    margin-right: 15px;
  }

  button {
    background: #008cd5;
    border: 0;
    padding: 4px 15px;
    border-radius: 3px;
    color: #fff;
  }

  #mask {
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
  }

  .mask {
    width: 300px;
    height: 250px;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 47;
    border-radius: 5px;
  }

  .title {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .title span {
    float: right;
    cursor: pointer;
  }

  .content {
    padding: 10px;
  }

  .content input {
    width: 270px;
    margin-bottom: 15px;
  }
</style>
