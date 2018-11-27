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


/* ---  TYPING TEXT  ---*/

// get the element
const text = document.querySelector('.info__message');

// make a words array
const words = [
  "Буду рада сотрудничеству с вами!",
  "Буду рада сотрудничеству с вами!"
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

	const LETTER_TYPE_DELAY = 75;
	//  const WORD_STAY_DELAY = 2000;
	const WORD_STAY_DELAY = 5000;

	const DIRECTION_FORWARDS = 0;
	const DIRECTION_BACKWARDS = 1;

	var direction = DIRECTION_FORWARDS;
	var wordIndex = 0;
	var letterIndex = 0;

	var wordTypeInterval;

	startTyping();

	function startTyping() {
		wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
	}

	function typeLetter() {
		const word = words[wordIndex];

		if (direction == DIRECTION_FORWARDS) {
			letterIndex++;

			if (letterIndex == word.length) {
				direction = DIRECTION_BACKWARDS;
				clearInterval(wordTypeInterval);
				setTimeout(startTyping, WORD_STAY_DELAY);
			}

		} else if (direction == DIRECTION_BACKWARDS) {
			letterIndex--;

			if (letterIndex == 0) {
				nextWord();
			}
		}

		const textToType = word.substring(0, letterIndex);

		element.textContent = textToType;
	}

	function nextWord() {

		letterIndex = 0;
		direction = DIRECTION_FORWARDS;
		wordIndex++;

		if (wordIndex == words.length) {
			wordIndex = 0;
		}

	}
}


/* -- animated floating menu -- */

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 50) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
});


/* -- Плавная прокрутка к якорю без jQuery -- */

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}