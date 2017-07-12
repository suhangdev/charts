/**
 * Created by Administrator on 2017/7/12 0012.
 */
var map = new BMap.Map("map");          // 创建地图实例
var point = new BMap.Point(120.247824,29.726384);  // 创建点坐标
map.centerAndZoom(point, 15);