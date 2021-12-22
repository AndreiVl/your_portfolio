const menu = () => {
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
		}
	};

	let body = document.querySelector('body');

	if (isMobile.any()) {
		document.body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow');

		if (arrow.length > 0) {
			for (let i = 0; i < arrow.length; i++) {
				const element = arrow[i];
				let thisLink = element.previousSibling;
				let subMenu = element.nextElementSibling;
				let thisArrow = arrow[i];

				thisLink.classList.add('parent');

				element.addEventListener('click', function () {
					subMenu.classList.toggle('open');
					thisArrow.classList.toggle('active');
				});
			}
		}

	} else {
		document.body.classList.add('pc');
	}

	// Скорол при клике на пункт меню

	const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
	const hamburger = document.querySelector('.hamburger');
	const menuBody = document.querySelector('.header__menu-body');

	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener('click', onMenuLinkClick)
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
				// возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).

				console.log(gotoBlockValue);

				if (hamburger.classList.contains('hamburger--active')) {
					document.body.classList.remove('lock');
					hamburger.classList.remove('hamburger--active');
					menuBody.classList.remove('header__menu-body--active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: 'smooth'
				});

				e.preventDefault();
			}
		}
	}
};

export default menu;