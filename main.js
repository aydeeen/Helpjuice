jQuery(document).ready(() => {
	$('#accordion-1 .main__accordion-title').click(() => {
		if ($('#accordion-1 .main__accordion-list').hasClass('show')) {
			$('#accordion-1 .main__accordion-list').removeClass('show');
         $('#accordion-1 .main__arrow-right').removeClass('rotate');
         $('#accordion-1 .main__accordion-title').removeClass('col-orange');
		} else {
			$('#accordion-1 .main__accordion-list').addClass('show');
         $('#accordion-1 .main__arrow-right').addClass('rotate');
         $('#accordion-1 .main__accordion-title').addClass('col-orange');
		}
	});

   $('#accordion-2 .main__accordion-title').click(() => {
		if ($('#accordion-2 .main__accordion-list').hasClass('show')) {
			$('#accordion-2 .main__accordion-list').removeClass('show');
         $('#accordion-2 .main__arrow-right').removeClass('rotate');
         $('#accordion-2 .main__accordion-title').removeClass('col-orange');
		} else {
			$('#accordion-2 .main__accordion-list').addClass('show');
         $('#accordion-2 .main__arrow-right').addClass('rotate');
         $('#accordion-2 .main__accordion-title').addClass('col-orange');
		}
	});

   $('.header__dropdown').click(() => {
		if ($('.header__dropdown-list').hasClass('show-list')) {
			$('.header__dropdown-list').removeClass('show-list');
         $('.header__dropdown i').removeClass('rotate-180');
		} else {
			$('.header__dropdown-list').addClass('show-list');
         $('.header__dropdown i').addClass('rotate-180');
		}
	});
});
