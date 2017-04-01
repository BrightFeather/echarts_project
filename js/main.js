// require.config({
//     paths: {
//         jquery: 'jquery-3.2.0.min',
//         // echarts: 'echarts/echarts.js',
//         // bar:'js/echarts/chart/bar', //按需加载图表关于bar图的部分
//         // line: 'js/echarts/chart/line' //按需加载图表关于线性图的部分

//     }
// });
require.config({
    paths: {
        jquery: 'jquery-3.2.0.min',
        echarts: 'echarts/echarts',
        // bar:'js/echarts/chart/bar', //按需加载图表关于bar图的部分
        // line: 'js/echarts/chart/line' //按需加载图表关于线性图的部分
    }
});
 
require(['jquery'],  function($) {
    alert($().jquery);
    });