<template>
  <div class="echarts">
    <div id="myChart"></div>
    <div id="myChart2"></div>
    <div id="myChart3"></div>
    <div id="myChart4"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "echarts",
      data(){
        return{
          author:''
        }
      },
      mounted(){
        var myChart = echarts.init(document.getElementById('myChart'));
        var option = {
          title: {
            text: 'Column Chart'
          },
          xAxis: {
            type: 'category',
            data: ['衬衫', '大衣', '牛仔裤', 'T恤', '袜子', '短裙', '长裙']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [5, 20, 36, 35, 23, 18, 26],
            type: 'bar'
          }]
        };



        myChart.setOption(option);

        var myChart2 = echarts.init(document.getElementById('myChart2'));
        var option2 = {
          title: {
            text: 'Bar Chart',
            subtext: '数据来自网络'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
          ]
        };
        myChart2.setOption(option2);

        var myChart3 = echarts.init(document.getElementById('myChart3'));
        var option3 = {
          title: {
            text: 'Line Chart'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['视频广告','直接访问','搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        myChart3.setOption(option3);

        var myChart4 = echarts.init(document.getElementById('myChart4'));
        var option4 = {
          title : {
            text: 'Pie Chart',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        myChart4.setOption(option4);
      }
    }
</script>

<style scoped>
  .echarts{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  #myChart{
    width: 45%;
    height: 400px;
    float: left;
  }
  #myChart2{
    width: 45%;
    height: 400px;
    float: left;
  }
  #myChart3{
    width: 45%;
    height: 400px;
    float: left;
  }
  #myChart4{
    width: 45%;
    height: 400px;
    float: left;
  }
</style>
