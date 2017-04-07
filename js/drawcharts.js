// var style = 'infographic';
function DrawPieChart(cinfo) {

    var num_male = 0;
    var num_female = 0;
    for (num = 0; num < cinfo.length; num++) {
        if (cinfo[num]["gender"] == "男") {
            num_male += 1;
        } else {
            num_female += 1;
        }
    }

    var echarts = require('echarts');
    //--- 饼状图 ---
    var myChart = echarts.init(document.getElementById('pieChart'),'infographic');
    //图表显示提示信息
    myChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: '性别',
            // subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男', '女']
        },
        series: [{
            name: '性别',
            type: 'pie',
            radius: '55%',
            data: [
                {value: num_female, name: '女'},
                {value: num_male, name: '男'},
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

function DrawBarChartAge(cinfo) {
    var age_group = {};
    for (count = 0; count < cinfo.length; count++) {
        if (cinfo[count]["age_group"] in age_group) {
            age_group[cinfo[count]["age_group"]] += 1;
        }
        else {
            age_group[cinfo[count]["age_group"]] = 1;
        }
    }
    // console.log(age_group);


    var echarts = require('echarts');
    //--- 柱状图 ---
    var myChart = echarts.init(document.getElementById('barChartAge'),'macarons');
    //图表显示提示信息
    myChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: "年龄"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['年龄']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['19岁以下', '20-29岁', '30-39岁', '40-49岁', '50-59岁', '60岁以上']
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: '年龄',
            type: 'bar', //序列展现类型为柱状图
            data: [age_group['19岁以下'], age_group['20-29岁'], age_group['30-39岁'],
                age_group['40-49岁'], age_group['50-59岁'], age_group['60岁以上']]
        },
        ]
    });
}
function randomData() {
    return Math.round(Math.random() * 1000);
};
function DrawMap(cinfo) {
    var province = {
        '北京': 0,
        '天津': 0,
        '上海': 0,
        '重庆': 0,
        '河北': 0,
        '河南': 0,
        '云南': 0,
        '辽宁': 0,
        '黑龙江': 0,
        '湖南': 0,
        '安徽': 0,
        '山东': 0,
        '新疆': 0,
        '江苏': 0,
        '浙江': 0,
        '江西': 0,
        '湖北': 0,
        '广西': 0,
        '甘肃': 0,
        '山西': 0,
        '内蒙古': 0,
        '陕西': 0,
        '吉林': 0,
        '福建': 0,
        '贵州': 0,
        '广东': 0,
        '青海': 0,
        '西藏': 0,
        '四川': 0,
        '宁夏': 0,
        '海南': 0,
        '台湾': 0,
        '香港': 0,
        '澳门': 0
    }
    for (count = 0; count < cinfo.length; count++) {
        console.log(cinfo[count]["province"]);
        province[cinfo[count]["province"]] += 1;
    }
    console.log(province);
    var echarts = require('echarts');
    var myMap = echarts.init(document.getElementById('map'),'infographic');
    myMap.showLoading({
        text: "图表数据正在努力加载..."
    });
    myMap.hideLoading();
    myMap.setOption({
        title: {
            text: '用户的地域分布',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['用户的地域分布']
        },
        visualMap: {
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '用户的地域分布',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    {name: '北京', value: province['北京']},
                    {name: '天津', value: province['天津']},
                    {name: '上海', value: province['上海']},
                    {name: '重庆', value: province['重庆']},
                    {name: '河北', value: province['河北']},
                    {name: '河南', value: province['河南']},
                    {name: '云南', value: province['云南']},
                    {name: '辽宁', value: province['辽宁']},
                    {name: '湖南', value: province['湖南']},
                    {name: '安徽', value: province['安徽']},
                    {name: '山东', value: province['山东']},
                    {name: '新疆', value: province['新疆']},
                    {name: '江苏', value: province['江苏']},
                    {name: '浙江', value: province['浙江']},
                    {name: '江西', value: province['江西']},
                    {name: '湖北', value: province['湖北']},
                    {name: '广西', value: province['广西']},
                    {name: '甘肃', value: province['甘肃']},
                    {name: '山西', value: province['山西']},
                    {name: '陕西', value: province['陕西']},
                    {name: '吉林', value: province['吉林']},
                    {name: '福建', value: province['福建']},
                    {name: '贵州', value: province['贵州']},
                    {name: '广东', value: province['广东']},
                    {name: '青海', value: province['青海']},
                    {name: '西藏', value: province['西藏']},
                    {name: '四川', value: province['四川']},
                    {name: '宁夏', value: province['宁夏']},
                    {name: '海南', value: province['海南']},
                    {name: '台湾', value: province['台湾']},
                    {name: '香港', value: province['香港']},
                    {name: '澳门', value: province['澳门']},
                    {name: '黑龙江', value: province['黑龙江']},
                    {name: '内蒙古', value: province['内蒙古']},
                ]
            },
        ]
    });
}


//创建ECharts柱状图图表
function DrawBarChartIncome(cinfo) {
    var income = {};
    for (count = 0; count < cinfo.length; count++) {
        if (cinfo[count]["annual_income"] in income) {
            income[cinfo[count]["annual_income"]] += 1;
        }
        else {
            income[cinfo[count]["annual_income"]] = 1;
        }
    }
    // console.log(income);

    var echarts = require('echarts');

    //--- 柱状图 ---
    var myChart = echarts.init(document.getElementById('barChartIncome'),'infographic');
    //图表显示提示信息
    myChart.showLoading({
        text: "图表数据正在努力加载..."
    });
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: "收入"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['收入']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['3万以下', '3-10万', '10-24万', '24万-50万', '50-120万', '120万以上']
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: '收入',
            type: 'bar',
            data: [income['3万以下'], income['3-10万'], income['10-24万'],
                income['24万-50万'], income['50-120万'], income['120万以上']]
        }]
    });
}