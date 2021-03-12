// Why prefer section accordion
//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
	const btn = question.querySelector('.question-title');
	// console.log(btn);

	btn.addEventListener('click', function () {
		// console.log(question);

		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});

		question.classList.toggle('show-text');
	});
});


var nav = document.querySelector('.navbar');
var openNav = document.querySelector('.toggler');
var closeNav = document.querySelector('#navbar-close');

function open(){
	nav.classList.add('transition');
	nav.style.display = "block";
	setTimeout(() => {
		nav.classList.add('slideOpen');
	}, 1);
	nav.addEventListener('transitionend', () => {
		nav.classList.remove('transition');
	})
}

function close(){
	nav.classList.add('transition');
	nav.classList.remove('slideOpen');
	
	setTimeout(() => {
		nav.style.display = "none";
		nav.classList.remove('transition');
	}, 1000);
}


openNav.addEventListener('click', open);
closeNav.addEventListener('click', close);