const spoler = () => {
	// $('.spoler__title').click(function (e) {
	// 	if ($('.spoler').hasClass('spoler-one')) {
	// 		$('.spoler__title').not($(this)).removeClass('spoler__title-active');
	// 		$('.spoler__text').not($(this).next()).slideUp(300);
	// 	}
	// 	$(this).toggleClass('spoler__title-active').next().slideToggle(300);
	// });


	let boxSpoler = document.querySelector('.spoler');
	let titleItem = document.querySelectorAll('.spoler__title');
	let titleOne = document.querySelector('.spoler__title');
	let textItem = document.querySelectorAll('.spoler__text');

	boxSpoler.addEventListener('click', function (e) {
		let title = e.target
		// let text = e.target

		if (boxSpoler.classList.contains('spoler-one')) {

			titleItem.forEach(item => {
				if (item.classList.contains('spoler__title-active') && title != item) {
					item.classList.remove("spoler__title-active");
					toogleItem(item);
				}
			});
		}

		if (title.classList.contains('spoler__title')) {
			title.classList.toggle("spoler__title-active");
			toogleItem(title);
		}
	})

	function toogleItem(ask) {
		let answer = ask.nextElementSibling;

		// флаг на мноржество кликов чтобы анимация работала до конца
		if (answer.jsAnimated === true) {
			return;
		}

		if (answer.classList.contains('spoler__text-open')) {

			answer.jsAnimated = true;

			let animate = answer.animate([
				{ height: answer.clientHeight + 'px' },
				{ height: 0 }
			],
				{ duration: 500 }
			);

			animate.addEventListener('finish', function () {
				answer.classList.remove('spoler__text-open');
				answer.jsAnimated = false;
			});
		}
		else {
			answer.classList.add('spoler__text-open');

			answer.jsAnimated = true;

			let animate = answer.animate([
				{ height: 0 },
				{ height: answer.clientHeight + 'px' }
			],
				{ duration: 500 }
			);

			animate.addEventListener('finish', function () {
				answer.jsAnimated = false;
			});
		}
	}
}

export default spoler;