
   	var mapObj = new AMap.Map('container', {
        resizeEnable: true,
        lang: 'zh_en',
       	zoom: 5,
       	zooms:[4,18],
       	center: [106.485352, 34.603692]
   	});
   	var createMarker = function(data,hide) {
   		var div = document.createElement('div');
   		div.className = 'circle';
   		var r = Math.floor(data.count / 1024);
   		div.style.backgroundColor = hide?'#393':'#09f';
   		div.innerHTML = data.count || 0;
   		var marker = new AMap.Marker({
   		    content: div,
   		    title:data.name,
   			position: data.center.split(','),
   			offset: new AMap.Pixel(-24, 5),
   			zIndex: data.count
   		});
   		marker.subMarkers = [];
   		if(data.name==='北京市'||data.name==='河南省'){
   		  marker.setLabel({content:'&larr;请点击',offset:new AMap.Pixel(45,0)})
          mapObj.setCenter(marker.getPosition());
   		}
   		if(!hide){
   			marker.setMap(mapObj)
   		}
   		if(data.subDistricts&&data.subDistricts.length){
   			for(var i = 0 ; i<data.subDistricts.length;i+=1){
   				marker.subMarkers.push(createMarker(data.subDistricts[i],true));
   			}
   		}
   		return marker;
   	}
   	var _onZoomEnd = function(e) {
   		if (mapObj.getZoom() < 6) {
   			for (var i = 0; i < markers.length; i += 1) {
   				mapObj.remove(markers[i].subMarkers)
   			}
   			mapObj.add(markers);
   		}
   	}
   	var _onClick = function(e) {
   		if(e.target.subMarkers.length){
   			mapObj.add(e.target.subMarkers);
   			mapObj.setFitView(e.target.subMarkers);
   			mapObj.remove(markers)
   		}
   	}
   	var markers = []; //province见Demo引用的JS文件
   	for (var i = 0; i < provinces.length; i += 1) {
   		var marker = createMarker(provinces[i]);
   		markers.push(marker);
   		AMap.event.addListener(marker, 'click', _onClick);
   	}
   	//mapObj.setFitView();
   	AMap.event.addListener(mapObj, 'zoomend', _onZoomEnd);
		
  