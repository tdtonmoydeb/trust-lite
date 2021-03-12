$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});

// Achievement section on scroll number counter
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
	if (isScrolledIntoView($('.numbers')) && !viewed) {
		viewed = true;
		$('.value').each(function () {
			$(this)
				.prop('Counter', 0)
				.animate(
					{
						Counter: $(this).text(),
					},
					{
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						},
					},
				);
		});
	}
}