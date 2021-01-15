
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

// reviews

	    $(document).ready(function(){
	      $('.one-time').slick({
	        draggable: true,
	        arrows: true,
	        adaptiveHeight: true,
	        autoplaySpeed: 5000
	      });
	    });


			 // gallery slider
			 $('.multiple-items').slick({
	   infinite: true,
	   slidesToShow: 4,
	   slidesToScroll: 4
	 });

	 $('.two-items').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2
});


 });

// end accordian
