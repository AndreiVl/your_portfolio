const sliderBrend = () => {
	let sliderBrend = $(".slider-brend").slick({
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	})
}

export default sliderBrend;