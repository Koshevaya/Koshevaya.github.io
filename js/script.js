var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
		
	navMain.classList.remove('main-nav--nojs');

	navToggle.addEventListener('click', function() {
		if(navMain.classList.contains('main-nav--closed')) {
			navMain.classList.remove('main-nav--closed');
			navMain.classList.add('main-nav--opened');
			
			
			
		} else {
			navMain.classList.add('main-nav--closed');
			navMain.classList.remove('main-nav--opened');
			
			
			
			
		}
	});


function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }


    const header = document.querySelectorAll('.page-header');
	const introd = document.querySelector('#introduction');

    function scrollFunc(){

		const slideInAt = (window.scrollY) > introd.offsetHeight - header[0].offsetHeight;

		if ( slideInAt){
			header[0].classList.add('active');
		} else {
			header[0].classList.remove('active');
		}

    }

    window.addEventListener('scroll', debounce(scrollFunc));