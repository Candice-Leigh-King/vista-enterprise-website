
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu



// reviews

	    $(document).ready(function(){
	      $('.one-time').slick({
	        draggable: true,
	        arrows: true,
	        adaptiveHeight: true,
	        autoplaySpeed: 5000
	      });
	    });

			$(document).ready(function() {
					$(window).scroll( function(){
						$('.fadein').each( function(i){
									var bottom_of_element = $(this).offset().top + $(this).outerHeight();
									var bottom_of_window = $(window).scrollTop() + $(window).height();
									if( bottom_of_window > bottom_of_element ){
										$(this).animate({'opacity':'1'},1000);
									}
							});
					});
			});

			$(document).ready(function() {
		 	 $(window).scroll( function(){
		 		 $('.slideinleft')
				 .each( function(i){
		 				 var bottom_of_element_left = $(this).offset().top;
		 				 var bottom_of_window = $(window).scrollTop() + $(window).height();
		 				 if( bottom_of_window > bottom_of_element_left ){
		 						 $(this).animate({'margin-left':'0px'},2500);
		 				 }
		 			 });
		 		 });
		 	 });

			 $(document).ready(function() {
				 $(window).scroll( function(){
					 $('.slideinright').each( function(i){
						 var bottom_of_element = $(this).offset().top;
						 var bottom_of_window = $(window).scrollTop() + $(window).height();
						 if( bottom_of_window > bottom_of_element ){
								 $(this).animate({'margin-left':'0px'},2500);
						 }
						 });
					 });
			 });


			 // gallery slider
			 $('.multiple-items').slick({
	   infinite: true,
	   slidesToShow: 4,
	   slidesToScroll: 3
	 });

	// This is the pop-up gallery
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});


		//make sure the page is ready befor running the scripts
		// This is the hamburger menu


// 	var allPanels = $('.accordion > dd').hide();
//
// 		$('.accordion > dt > a').click(function() {
//
// 			allPanels.slideUp();
//
// 	    $(this).filter('.open').removeClass('open').addClass('closing')
// 	    $('.accordion > dt > a').removeClass('open');
// 	  $(this).not(".closing").addClass('open').parent().next().slideDown();
// 	    $('.accordion > dt > a').removeClass('closing');
//
// 	    return false;
// 		});
//
//
 });

// end accordian
