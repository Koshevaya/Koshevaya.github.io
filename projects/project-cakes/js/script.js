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

$(document).ready(function(){
	$('.popup__link').magnificPopup({
		callbacks: {
			open: function () {
				$('.popup__slider').slick({
					autoplay: true,
					autoplaySpeed: 1500,
					lazyLoad: 'progressive'
				});
			}
		}
	});
	
	$(function() {
		$('.slider').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true
					}
    			},{
					breakpoint: 1366,
					settings: {
						arrows: true,
						dots: false
					}
    			}
			]
		});

		$(".slider").on('afterChange', function (event, slick, currentSlide) {
			$(".slider__count").text(currentSlide + 1);
		});
	});
	

	
	$(window).on('load resize', function () {
		if ($(window).width() < 768) {
			$('.proportions__slider:not(.slick-initialized)').slick({
				arrows: false,
				dots: true
			});
		} else {
			$(".proportions__slider.slick-initialized").slick("unslick");
		}
	});
	
	
	$(function() {
		$('.decor__slider').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToScroll: 2,
			slidesToShow: 2,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true,
						slidesToScroll: 1,
						slidesToShow: 1,
						
					}
    			},{
					breakpoint: 1366,
					settings: {
						arrows: true,
						dots: false,
						slidesToScroll: 2,
						slidesToShow: 2,
					}
    			}
			]
		});

		$(".decor__slider").on('afterChange', function (event, slick, currentSlide) {
			$(".slider__count").text(currentSlide + 1);
		});
	});
});	








