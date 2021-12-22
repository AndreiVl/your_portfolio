const linkAnchor = () => {
	$('.link-anchor').on('click', function (e) {
		e.preventDefault();
		let linkId = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(linkId).offset().top - 50 }, 1000);

	});
};

export default linkAnchor;
