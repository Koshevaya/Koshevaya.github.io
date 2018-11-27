var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});



$(window).on('load resize', function () {
		if ($(window).width() > 2399) {
			$('.partners__slider:not(.slick-initialized)').slick({
				infinite: true,
				arrows: true,
				slidesToShow: 6,
	  			slidesToScroll: 1,
				centerMode: true,
				variableWidth: true,
				focusOnSelect: true,
				cssEase:'ease-in-out',
				autoplay: true
			});
		}
		else {
			$(".partners__slider.slick-initialized").slick("unslick");
		}

	if ($(window).width() > 1535) {
		$('.events__slider:not(.slick-initialized)').slick({
			autoplay: true,
			centerMode: true,
			centerPadding: '32%',
			slidesToShow: 1
		});
	} else {
		$(".events__slider.slick-initialized").slick("unslick");
	}
});
