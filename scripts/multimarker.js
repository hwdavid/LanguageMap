
   
   //初始化地图
    var map = new AMap.Map('container', {
        resizeEnable: true,
        lang: 'zh_en',
       	zoom: 5,
       	zooms:[4,18],
       	center: [106.485352, 34.603692]
   	});
    
   //添加地图缩放工具条
    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
        var toolBar = new AMap.ToolBar();
        var scale = new AMap.Scale();
        map.addControl(toolBar);
        map.addControl(scale);
    })
    
    
   
    //地图上添加标记
    var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)});
    var cluster, markers = [];
    var index = 0;
    addMarker(116.485352, 39.603692);
    addMarker(116.391467, 39.927761);
    addMarker(106.485352, 34.603692);
    addMarker(107.485352, 35.603692);
    addMarker(106.985352, 34.903692);
    
    
    
    function addMarker(x,y) {
        var marker = new AMap.Marker({
        icon: "img/mark_b.png",
        position: [x, y]
        });
        markers.push(marker);//加一个标记，计数+1
        index=index+1;//标记编号
        marker.content='我是第'+index+'个Marker';//信息窗体内容
        marker.on('click',markerClick);
    } 
    
    // 添加点聚合
    addCluster();
         
    
    function addCluster() {
        if (cluster) {
            cluster.setMap(null);
        }
        map.plugin(["AMap.MarkerClusterer"], function() {
            cluster = new AMap.MarkerClusterer(map, markers);
        });
    }
    
    //信息窗体
    
    function markerClick(e){
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
    
     