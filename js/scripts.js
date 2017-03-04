
//Page Preloader
$(window).load(function() {
	$("#loader").delay(500).fadeOut();
	$(".mask").delay(1000).fadeOut("slow");
});


$(document).ready(function(){

//Sticky Navigation
    $("#navigation").sticky({topSpacing:0});


//Leaving Page Fade Out
	$('a.external').click(function(){
	  var url = $(this).attr('href');


	  		$('.mask').fadeIn(250, function(){
			    document.location.href = url;
		  	});
			$("#loader").fadeIn("slow");

	  return false;
	});

});


//Back To Top
	$(function() {
			'use strict';
		$('a#back-top').click(function () {
			$('html, body').stop().animate({
				scrollTop: 0
			}, 1500,'easeInOutExpo');
		});



	});




		//Navigation Scrolling
		jQuery(function() {
      'use strict';
     jQuery('.nav a, .nav li a, #home-center a, a.move').bind('click',function(event){
     var jQueryanchor = jQuery(this);
     if (this.getAttribute("href").charAt(0) == "#") {
       jQuery('html, body').stop().animate({
       scrollTop: jQuery(jQueryanchor.attr('href')).offset().top -44
       }, 1500,'easeInOutExpo');
       event.preventDefault();
     }
     });
    });












//Navigation Dropdown
	$('.nav a.colapse-menu1').click(function () { $(".nav-collapse").collapse("hide") });

	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });



$(document).ready(function(){
		'use strict';

//Elements Fading
	$('.element_from_top').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});
	});

	$('.element_from_bottom').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});
	});


	$('.element_from_left').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});
	});


	$('.element_from_right').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});
	});

	$('.element_fade_in').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});
	});



	$('#phone-right').each(function () {
		$(this).appear(function() {
		 $('#wrap-phone-right').css({'display':'block' });
		});
	});




	$('#phone-left').each(function () {
		$(this).appear(function() {
		 $('#wrap-phone-right').css({'display':'block' });
		});
	});

	$('#phone-right-vcenter').each(function () {
		$(this).appear(function() {
		 $('#phone-right-vcenter').addClass( "phone-right-rotate" );
		});
	});


	$('#phone-left-vcenter').each(function () {
		$(this).appear(function() {
		 $('#phone-left-vcenter').addClass( "phone-left-rotate" );
		});
	});

    $('#phone-left-vcenter-2').each(function () {
        $(this).appear(function() {
            $('#phone-left-vcenter-2').addClass( "phone-left-rotate" );
        });
    });

	$('#countdown').each(function () {
		$(this).appear(function() {
		 $('#countdown').addClass( "fadeInUp" );
		});
	});

	$('#h1-comingsoon').each(function () {
		$(this).appear(function() {
		 $('#h1-comingsoon').addClass( "fadeInDown" );
		});
	});

});







	//Progress bar animations
		$('.progress-bars li').each(function(i){
			$(this).appear(function(){
				var percent = $(this).find('.spann').attr('data-width');
				var $endNum = parseInt($(this).find('.bar-wrap strong i').text());
				var $that = $(this);
				$(this).find('.spann').animate({
					'width' : percent + '%'
				},1600, function(){
				});
				$(this).find('.spann strong').animate({
					'opacity' : 1
				},1400);
				$(this).find('.bar-wrap  strong .count').countTo({
					from: 0,
					to: $endNum,
					speed: 1200,
					refreshInterval: 30,
					onComplete: function(){$that.find('.bar-wrap  strong i').removeClass('count');}
				});
				if(percent == '100'){
					$that.find('.spann strong').addClass('full');
				}
			});
		});


















//Magnific Popup

$(window).load(function() {
	'use strict';




$('.home-popup').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});


$('.phones-left-popup').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});

$('.phones-right-popup').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});

$('.phone-right-popup').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});


$('.phone-left-popup').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});

$('.wrap-phone-left').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});

$('.wrap-phone-right').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled: true}
  // other options
});


$('.videoboxexternal').magnificPopup({
  type: 'iframe',


iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }

      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

    // you may add here more sources

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
},
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }


});


});







$(document).ready(function() {
	'use strict';

				  $("#slideshow-home").owlCarousel({

					  autoPlay: 3000, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					   pagination: true,
					touchDrag: true,
					mouseDrag: false

				  });



				  $("#slideshow-phones-left").owlCarousel({

					  autoPlay: 3000, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					   pagination: true,
					touchDrag: true,
					mouseDrag: false

				  });

				  $("#slideshow-phones-right").owlCarousel({

					  autoPlay: 3000, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					   pagination: true,
					touchDrag: true,
					mouseDrag: false

				  });


				  $("#slideshow-phone-right").owlCarousel({

					  autoPlay: 3000, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					   pagination: true,
					touchDrag: true,
					mouseDrag: true

				  });



				  $("#slideshow-phone-left").owlCarousel({

					  autoPlay: 3000, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					   pagination: true,
					touchDrag: true,
					mouseDrag: false

				  });



				  $("#slideshow-testimonials").owlCarousel({

					  autoPlay: 30009999, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					  addClassActive:true,
						slideSpeed: 800,
						paginationSpeed: 400,
					   pagination: true

				  });

				  $("#slider-features").owlCarousel({

					  autoPlay: 3000, //Set AutoPlay to 3 seconds

					  items : 1,
					  itemsDesktop : [1440,1],
					  itemsDesktopSmall : [979,1],
					  itemsTablet : [768,1],
					  itemsMobile : [479,1],
					  stopOnHovee: true,
					   pagination: true

				  });





});








	$(function() {
			'use strict';
		$('.mobile-home-second').animate({left: '216px'}, 1300, 'linear');
		$('.second-image').animate({left: '195px'}, 1300, 'linear');

	});












	$('.mobile-phones-left-second').each(function () {
			'use strict';
		$(this).appear(function() {
		  $(this).delay(150).animate({left: '216px'}, 1300, 'linear');
		  		$('.second-phone-left').delay(150).animate({left: '195px'}, 1300, 'linear');
		});
	});

















	$('.mobile-phones-right-second').each(function () {
			'use strict';
		$(this).appear(function() {
		  $(this).delay(150).animate({left: '216px'}, 1300, 'linear');
		  		$('.second-phone-right').delay(150).animate({left: '195px'}, 1300, 'linear');
		});
	});










	$(window).load(function() {
			'use strict';
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			});













var tabChange = function () {

    var tabs = $('.anonse-tab > li');
    var active = tabs.filter('.active');
    var next = active.next('.anonse-tab li').length ? active.next('.anonse-tab li').find('a') : tabs.filter(':first-child').find('a');
    // Use the Bootsrap tab show method
    next.tab('show');
};
// Tab Cycle function
var tabCycle = setInterval(tabChange, 4000);

// Tab click event handler
$('.anonse-tab li a').on('click', function (e) {
		'use strict';
    e.preventDefault();
    // Stop the cycle
    clearInterval(tabCycle);
    // Show the clicked tabs associated tab-pane
    $(this).tab('show');
    // Start the cycle again in a predefined amount of time
    setTimeout(function () {
        //tabCycle = setInterval(tabChange, 5000);
    }, 15000);
});




var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();




/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}





$(window).load(function() {
  equalheight('.faq-holder .faq-container');
});


$(window).resize(function(){
  equalheight('.faq-holder .faq-container');
});


$(window).load(function() {
  equalheight('.column-section .features-box');
});


$(window).resize(function(){
  equalheight('.column-section .features-box');
});
