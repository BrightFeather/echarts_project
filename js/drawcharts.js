function DrawPieChart(ec,info){
    alert("hi");
    //--- 饼状图 ---
    var myChart = ec.init(document.getElementById('pieChart'));
    //图表显示提示信息
    myChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({  
        title : {
            text: '某站点用户访问来源',
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
        series : [{
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
            }]
    });
}

function DrawBarChart(ec,info) {
    //--- 柱状图 ---
    var myChart = ec.init(document.getElementById('barChart'));
    //图表显示提示信息
    myChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: "柱状图"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['stepday.com', 'tuiwosa.com']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: 'stepday.com',
            type: 'bar', //序列展现类型为柱状图
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
            name: 'tuiwosa.com',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }]
    });
    // var ecConfig = require('echarts/config');
    //ECharts图表的click事件监听
    // myChart.on("click", function() {
    //     alert("你点击我了!");
    // });
}

//创建ECharts折线图图表
function DrawLineChart(ec,info) {
    //--- 折线图 ---
    var myLineChart = ec.init(document.getElementById('lineChart'));
    //图表显示提示信息
    myLineChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myLineChart.hideLoading();
    myLineChart.setOption({
        title: {
            text: "折线图"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['stepday.com', 'tuiwosa.com']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: 'stepday.com',
            type: 'line', //序列展现类型为折线图
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
            name: 'tuiwosa.com',
            type: 'line',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }]
    });

    // var ecConfig = require('echarts/config');
    //ECharts图表的click事件监听
    // myLineChart.on("click", function() {
    //     alert("你点击我了!");
    // });
}


//创建ECharts柱状图图表
function DrawmyColumnChart(ec,info) {
    //--- 柱状图 ---
    var myChart = ec.init(document.getElementById('mybarChart'));
    //图表显示提示信息
    myChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: "柱状图"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['stepday.com', 'tuiwosa.com']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: 'stepday.com',
            type: 'bar', //序列展现类型为柱状图
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
            name: 'tuiwosa.com',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }]
    });

    // var ecConfig = require('echarts/config');
    //ECharts图表的click事件监听
    // myChart.on("click", function() {
    //     alert("你点击我了!");
    // });
}

//创建ECharts折线图图表
function DrawmyLineChart(ec,info) {
    //--- 折线图 ---
    var myLineChart = ec.init(document.getElementById('mylineChart'));
    //图表显示提示信息
    myLineChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myLineChart.hideLoading();
    myLineChart.setOption({
        title: {
            text: "折线图"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['stepday.com', 'tuiwosa.com']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: 'stepday.com',
            type: 'line', //序列展现类型为折线图
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
            name: 'tuiwosa.com',
            type: 'line',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }]
    });

    // var ecConfig = require('echarts/config');
    //ECharts图表的click事件监听
    // myLineChart.on("click", function() {
    //     alert("你点击我了!");
    // });
}