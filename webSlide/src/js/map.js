var map ;
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    
    //创建地图函数：
    function createMap(){
        map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.395932,39.929986);//定义一个中心点坐标
		//var point = new BMap.Point(116.42844172,39.94214552);//定义一个中心点坐标
        map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
       // window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
	var translateCallback = function (point){
		map.clearOverlays();
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		map.setCenter(point);
	}
    function getPositionSuccess(position){
		//alert(position.coords.latitude);
		//return;
		//console.log(position.coords);
		var point = new BMap.Point(position.coords.longitude, position.coords.latitude);
		map.centerAndZoom(point,15);
		return;
		
	}
    function getPositionError(error){
		switch (error.code) {
			case error.TIMEOUT:
				alert(" 连接超时，请重试 ");
				break;
			case error.PERMISSION_DENIED:
				alert(" 您拒绝了使用位置共享服务，查询已取消 ");
				break;
			case error.POSITION_UNAVAILABLE:
				alert(" 亲爱的火星网友，非常抱歉，我们暂时无法为您所在的星球提供位置服务 ");
				break;
		}
	}
	function getGeo(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
		}
		else {
			alert("你的浏览器不支持geolocation哦~");
		}
	}
    //initMap();//创建和初始化地图