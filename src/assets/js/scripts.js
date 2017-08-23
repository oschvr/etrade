// JavaScript for themezinho
(function($) {
$(document).ready(function() {
	"use strict";
	
	
	// FANCYBOX	
		$('.fancybox').fancybox({
		  helpers: {
			overlay: {
			  locked: false
			}
		  }
		});
		
		
	// TOOGLE MENU
		$('.toggle-menu').jPushMenu({closeOnClickLink: false});
		$('.dropdown-toggle').dropdown();
		
		
	// NAVBAR TOGGLE		
		$('.navbar-toggle').on('click', function(e) {
		$(".navbar-toggle").toggleClass("is-active");
		});
		
	
	// STELLAR PARALLAX
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
		});
		
		
	// TEXT ROTATE
		var sloganArea = $('.slogan ul');
		sloganArea.width(sloganArea.find('li').eq(0).find('span').width());
	
		setInterval(function () {
			var itemHeight = $('.slogan ul li').eq(0).height();
	
			sloganArea.animate({
				width : $('.slogan ul li').eq(1).find('span').width(),
				top : itemHeight * -1
			},200, function(){
				sloganArea.append($('.slogan ul li').eq(0));
				sloganArea.css('top', 0);
	
				$('.slogan ul li').each(function(i){
					$(this).css('top', i*itemHeight);
				});
			});
	
		}, 2000);
		
		
	// OWL CAROUSEL		
 		$(".owl-carousel").owlCarousel({
			items:4,
			loop:true,
			nav:false,
			dots:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:false,
			smartSpeed:450,
			responsive:{
			375:{
				items:2
			},
			768:{
				items:3
			},
			1024:{
				items:4,
			},
			1199:{
				items:4,
			}
		   }
	  	});
		
		
	// OWL SLIDER		
 		$(".owl-slider").owlCarousel({
			items:1,
			loop:true,
			nav:true,
			dots:false,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:false,
			smartSpeed:850,
	  	});
		
		
	// PREDIO SLIDER		
 		$(".predio-slider").owlCarousel({
			items:1,
			loop:true,
			nav:false,
			dots:true,
			autoplay:true,
			autoplayTimeout:7500,
			autoplayHoverPause:false,
			smartSpeed:450,
	  	});
	

	// ISOTOPE FILTER
	$(window).load(function(){
		var $grid = $('.photos').isotope({
		  itemSelector: '.photos li'
		});
		$('.filter li a').on( 'click', function() {
		   $('.filter li a.active').removeClass('active');
			$(this).addClass('active');
		  var filterValue = $( this ).attr('data-filter');
		  $grid.isotope({ filter: filterValue });      
		});
	});

});

	// COUNTER EFFECT
		var n = document.getElementById("counter");
			if (n == null) {
		} 
		else {
		
		var lastWasLower = false;
			$(document).scroll(function(){
			
			var p = $( "#counter" );
			var position = p.position();
			var position2 = position.top;
		
			if ($(document).scrollTop() > position2-300){
			if (!lastWasLower)
				$('#1').html('44');
				$('#2').html('10');
				$('#3').html('61');
		
			lastWasLower = true;
				} else {
			lastWasLower = false;
			}
			});		
		};
		
		
})(jQuery);