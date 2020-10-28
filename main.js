
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

			// faqs

			$(".accordion1").click(function(){

				$(this).toggleClass('active');
				$(".panel1").slideToggle();
				})

			$(".accordion2").click(function(){

				$(this).toggleClass('active');
				$(".panel2").slideToggle();
				})

			$(".accordion3").click(function(){

				$(this).toggleClass('active');
				$(".panel3").slideToggle();
				})

			$(".accordion4").click(function(){

				$(this).toggleClass('active');
				$(".panel4").slideToggle();
				})

			$(".accordion5").click(function(){

				$(this).toggleClass('active');
				$(".panel5").slideToggle();
				})

			$(".accordion6").click(function(){

				$(this).toggleClass('active');
				$(".panel6").slideToggle();
				})

			$(".accordion7").click(function(){

				$(this).toggleClass('active');
				$(".panel7").slideToggle();
				})

			$(".accordion8").click(function(){

				$(this).toggleClass('active');
				$(".panel8").slideToggle();
				})



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
