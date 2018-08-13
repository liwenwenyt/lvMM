# lvbackstage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


axios
中文：https://www.kancloud.cn/yunye/axios/234845
1.安装：
    npm install axios
2.引入加载（main.js）
    import Axios from 'axios'
    Vue.prototype.$axios = Axios;
3.请求(created)
    get请求：//默认是get请求
    this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
        params:{
            type:"junshi",
            count:30
        }
    })
    .then(res=>{
        this.newsData = res.data;
        console.log(res.data);
    })
.catch(error=>{
    console.log(error); 
})
    post请求：
    form-data:?name=iwn&age=20
    x-www-form-urlcoded:{name:"iwn",age:20}
    注意：axios接受的POST请求参数的格式是form-data格式
    转换：在当前请求页面引入一个第三方库
    import qs from "qs"
    再在地址后面加上  qs.stringify  
    this.$axios.post("http://www.wwtliu.com/sxtstu/blueberrypai/login.php",{
        user_id:"iwn@qq.com",
        password:"iwn123"
    })
    .then(res=>{
        console.log(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
4.全局默认值
    放在main.js里
    axios.defaults.baseURL = 'https://api.example.com';//这个地址是请求的地址，修改以后页面请求的时候不用再在页面添加这个地址。
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//作者认证，涉及不到，所以不要
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//headers请求头
5.拦截器
    在请求或响应被 then 或 catch 处理前拦截它们(在main.js里添加拦截器)
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //qs转换可以直接全局在拦截器,而不需要在请求页面进行转换
    if(config.method == "post"{
        config.data = qs.stringify(config.data)
    })
    return config;
    }, function (error) {
    // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
6.跨域请求处理 ：
    1.VUE在config里index.js里有一个专门用来解决跨域问题的方法
    proxyTable:{里面的内容直接copy,地址进行替换（跨域）

        "/api":{
            target:"http://localhost:3000",
            changeOrigin:true,
            pathRewrite:{
                "^/api":'' 
            }
        }

    }
    2.在main.js当中添加一个host代理
    //读取HOST就相当于读取了index.js里的proxyTable配置
    Vue.prototype.HOST = "/api"
    
    3.在请求页面  var url = this.HOST + "/login";
    然后就不用再写那么长的地址，直接写URL就可以了
    那么我们说现在有配置文件已经被修改了，那么服务器就得重新启动，否则就会报错
    （配置完以后将前面的全局默认值删除，否则发生冲突以后就会报错 ）
    注意：此种跨域解决方案只适用于测试阶段，打包的时候，不会具备服务器
    不能跨域了，后端解决（上线以后前端和后端放在一个服务器里，不牵扯跨域了）
    Mock:  数据模拟
        1。自己创建JSON文件，使用get请求形式来访问数据
            优点：快捷，方便
            缺点：只能存在get请求
        2.项目中集成服务器。模拟各种接口
            优点：模拟真实线上环境
            缺点：增加开发成本
        3.直接使用线上数据
            优点：真实
            缺点：不一定每个项目都存在
        4.数据模拟库
            http://mockjs.com/
        安装：
        npm install --save-dev mockjs

        在路由里引入mockjs
        var Mock = require("mockjs");

        router.get("/mockjs",function(req,res){
            var data = Mock.mock({
                'list|1-100':[{
                    'id|+1':1
                }]
            });
            res.json(200,data)
        })
