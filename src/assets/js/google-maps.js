// Google maps pin tooltip	
	var markers = [
    	{
       		"lat": '-22.9222972',
           "lng": '-43.185657',
		  
			"description": 'THEMEZINHO <br/><a href="http://www.themezinho.net" style="color:#ef3c3c; font-weight:800;">Get it now</a>'
        }
	];
	
	
	// Google maps main api
	window.onload = function () {
		var mapOptions = {
			center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        	zoom: 14,
			flat: true,
			scrollwheel:false,
			panControl:false,
			zoomControl:true,
			streetViewControl: false,
			mapTypeControl: false,
		
	// Google maps style	
           	styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5b6571"},{"lightness":"35"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}],
           	mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			var infoWindow = new google.maps.InfoWindow();
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			for (i = 0; i < markers.length; i++) {
			var data = markers[i]
           	var myLatlng = new google.maps.LatLng(data.lat, data.lng);
			var marker = new google.maps.Marker({
           	position: myLatlng,
           	map: map,
        	icon: 'images/map-pin.svg',
           	title: data.title
           	});
			(function (marker, data) {
           	google.maps.event.addListener(marker, "click", function (e) {
              	infoWindow.setContent(data.description);
              	infoWindow.open(map, marker);
              });
            })(marker, data);
        }
    };