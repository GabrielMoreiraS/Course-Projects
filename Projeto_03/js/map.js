window.onload = function(){
	var map;
	function initialize(){
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 0.643811, lng:  -18.091738}, zoom:2, scrollwheel: false,
			mapTypeId:'satellite'});
	}

	initialize();

	function addMarker(lat,lng,icon,content){

		var latlng = {lat:lat, lng:lng}

		var marker = new google.maps.Marker({
			position:latlng, map:map, icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content, maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
	}

	var conteudo = '<p style="color: black; font-size: 16px; padding: 4px 0;'+
	'border-bottom: 1px solid black">Meu Endereço</p>';

	addMarker(-20.038027,-44.143947,'',conteudo);

	setTimeout(function(){
		map.panTo({lat: 49.279546 , lng: -123.117935});
		map.setZoom(12);
	}, 5000);
}