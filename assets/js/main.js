/*
*===================================================
	Author       : ThemeBuskets
	Template Name: Porto | Personal Portfolio Template
	Version      : 1.0
*===================================================
*/
(function ($) {
	'use strict';
	$(window).on('load', function() {  
		/*++++++++++++++++++++++++++
			Preloader Effect 		
		+++++++++++++++++++++++++++*/
		$('#status').fadeOut();
		$('#preloader').delay(900).fadeOut('slow');
		$('body').delay(900).css({'overflow':'visible'});
		$( ".filter-list li:nth-child(1)" ).trigger( "click" )//isotope 
	});
	/*++++++++++++++++++++++++++
		Typing Effect 		
	+++++++++++++++++++++++++++*/
	$(".typed-effect").typed({
		strings: 
		[
				'<span class="color-highlight">DESIGNER</span>', 
				'<span class="color-highlight">UI/UX DESIGNER</span>',
				'<span class="color-highlight">Android Developer</span>'
				// '<span class="color-highlight">Wordpress Developer</span>'
		],
		typeSpeed: 50,
		backDelay: 500,
		loop: true
	});
	/*++++++++++++++++++++++++++
			One Page Nav		
	+++++++++++++++++++++++++++*/
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		end: function() {
			setTimeout(function(){
				if ($('.nav-bar-area').hasClass('fixed-top')) {
					 $('.nav-bar-area').removeClass('nav-down').addClass('nav-up');
				}
			}, 500);
		}
	});
	 
	/*++++++++++++++++++++++++++
		Testimonial Carousel
	+++++++++++++++++++++++++++*/
	var testcarousel = $(".testimonial-carousel");
	testcarousel.owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
	jQuery('.test-nav.left').on( 'click', function() { 
		testcarousel.trigger('owl.prev');
	});
	jQuery('.test-nav.right').on( 'click', function() { 
		testcarousel.trigger('owl.next');
	});
	
	/*++++++++++++++++++++++++++
			Isotope	
	+++++++++++++++++++++++++++*/
	$(".porject-container").isotope({
		itemSelector: '.project-item'
	}); 
	$('.filter-list li').on( 'click', function() { 
		$(".filter-list li").removeClass("active");
		$(this).addClass("active");        

			var selector = $(this).attr('data-filter'); 
			$(".porject-container").isotope({ 
				filter: selector, 
				animationOptions: { 
					duration: 750, 
					easing: 'linear', 
					queue: false, 
				} 
			}); 
			return false; 
	}); 
	
	/*++++++++++++++++++++++++++
		Magnific PopUp	
	+++++++++++++++++++++++++++*/
    var popuplink = $(".image-popup-link");
	popuplink.magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-with-zoom',
	  zoom: {
		enabled: true,
		duration: 300, 
		easing: 'ease-in-out',
		opener: function(openerElement) {
		  return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	  }

	});
	/*++++++++++++++++++++++++++
		Sticky Menu Code
	+++++++++++++++++++++++++++*/
	jQuery(window).bind('scroll', function() {

		 if (jQuery(window).scrollTop() > 0) {
			 jQuery('.nav-bar-area').addClass('fixed-top');
		 }
		 else {
			 jQuery('.nav-bar-area').removeClass('fixed-top');

		 }
	});
	   

	/*+++++++++++++++++++++++++++++++++++
	 Bootstrap mobile Menu hide on click
	+++++++++++++++++++++++++++++++++++++*/
	$('.nav a').on('click', function(){
		if ($('#bs-example-navbar-collapse-1').hasClass('in')) {
			 $('.navbar-toggle').trigger( "click" );
		}
	});
})(jQuery);

/*++++++++++++++++++++++++++
 Hide Menu on on scroll down
+++++++++++++++++++++++++++*/	
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-bar-area').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();
	var navarea = $(".nav-bar-area");
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	if (st > lastScrollTop && st > navbarHeight){
		navarea.removeClass('nav-down').addClass('nav-up');
	} else {
		if(st + $(window).height() < $(document).height()) {
			navarea.removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}


