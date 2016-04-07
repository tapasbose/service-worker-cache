/*global $ */

var inviewHandler = function (event, isInView) {
    'use strict';
	var anchor = $('[data-target="' + '#' + $(this).parents('section').attr('id') + '"]');

	if (isInView) {
		$('.navbar-right').children('li').removeClass('active');
		$(anchor).parent('li').addClass('active');
	}
};

$(document).ready(function () {
    'use strict';
	$('section h1').on('inview', inviewHandler);

	$('.anchor-item').click(function () {
		var targetSection = $(this).attr('data-target');
		$('section h1').off();

		$('html, body').animate({scrollTop : $(targetSection).offset().top - 50}, 1000, function () {
			$(targetSection).find('h1').on('inview', inviewHandler);
			$('section h1').on('inview', inviewHandler);
		});
	});


	if ($(window).width() <= 767) {
		$('.navbar-nav li a').click(function () {
			$('.navbar-collapse').collapse('hide');
		});

		$('body').click(function () {
			$('.navbar-collapse').collapse('hide');
		});
	}
});
