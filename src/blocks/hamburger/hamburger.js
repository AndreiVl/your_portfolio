const hamburger = () => {
	const hamburger = document.querySelector('.hamburger');
	const menuBody = document.querySelector('.header__menu-body');

	if (hamburger) {
		hamburger.addEventListener('click', () => {
			document.body.classList.toggle('lock');
			hamburger.classList.toggle('hamburger--active');
			menuBody.classList.toggle('header__menu-body--active')
		});
	}
}

export default hamburger;