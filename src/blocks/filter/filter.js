const filter = () => {
	const menu = document.querySelector('.works__list-nav'),
		items = menu.querySelectorAll('li'),
		btnAll = menu.querySelector('.all'),
		btnHtml = menu.querySelector('.html'),
		btnEmail = menu.querySelector('.email'),
		btnReact = menu.querySelector('.react'),
		btnTest = menu.querySelector('.test'),
		wrapper = document.querySelector('.works__body'),
		markAll = wrapper.querySelectorAll('.all'),
		markHtml = wrapper.querySelectorAll('.html'),
		markEmail = wrapper.querySelectorAll('.email'),
		markReact = wrapper.querySelectorAll('.react'),
		markTest = wrapper.querySelectorAll('.test'),
		no = document.querySelector('.works__portfolio-no');

	const typeFilter = (markType) => {
		markAll.forEach(mark => {
			mark.style.display = 'none';
			mark.classList.remove('works__item-animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('works__item-animated', 'fadeIn');

		if (markType) {
			markType.forEach(mark => {
				mark.style.display = 'block';
				mark.classList.add('works__item-animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('works__item-animated', 'fadeIn');
		}
	};

	btnAll.addEventListener('click', () => {
		typeFilter(markAll);
	});

	btnHtml.addEventListener('click', () => {
		typeFilter(markHtml);
	});

	btnEmail.addEventListener('click', () => {
		typeFilter(markEmail);
	});

	btnReact.addEventListener('click', () => {
		typeFilter(markReact);
	});

	btnTest.addEventListener('click', () => {
		typeFilter(markTest);
	});

	menu.addEventListener('click', (e) => {
		let target = e.target;

		if (target && target.tagName == 'LI') {
			items.forEach(btn => {
				btn.classList.remove('works__list-nav-item--active');
				target.classList.add('works__list-nav-item--active');
			});
		}
	});
};

export default filter;