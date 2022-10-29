$(function(){
	$('.fa-bars').click(function(){
		$('.menu-multi-mobile').show();
		$('.overplay').show();
	});
	$('.fa-times').click(function(){
		$('.menu-multi-mobile').hide();
		$('.overplay').hide();

	});
	$('.owl-carousel').owlCarousel({
		loop: false,
		margin: 0,
		nav:true,
		navText: ["<img src='/src/vendor/images/kiTu.png' width = '30'>","<img src='/src/vendor/images/kiTu.png' width='30'>"],
		dots:true,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5,
			}
		}
	});
});
