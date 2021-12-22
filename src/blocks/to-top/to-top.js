const toTop = () => {
	$(function () {
		let toTop = $('.to-top');

		function scrollBtn() {
			let top = $(this).scrollTop();

			if (top > 600) {
				toTop.fadeIn(350);
			}
			else {
				toTop.fadeOut(500);
			}
		};
		scrollBtn();

		$(document).on('scroll', scrollBtn);

		toTop.on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 350);
		});
	});

}

export default toTop;