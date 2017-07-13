/**
 * Created by Administrator on 2017/7/13 0013.
 */
var myChart = echarts.init(document.getElementById('map2'));

var option={
    series:[
        {
            name:'流量分布',
            type:'pie',
            radius:'60%',
            data:[
                {value:235,name:'艮塔路'},
                {value:266,name:'暨阳路'},
                {value:123,name:'二环北路'},
                {value:222,name:'浣纱路'},
                {value:123,name:'二环西路'}
            ]
        }
    ]
};

myChart.setOption(option);