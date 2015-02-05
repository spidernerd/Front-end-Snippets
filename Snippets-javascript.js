jQuery(document).ready(function ($) {
	
// Snippets function ------------------------------------
	

 // AddClass Function
function image_full_screen(target, autoload) {
	'use strict';
	
	if (autoload === true) {
		var height = $(window).height(),
			width  = $(window).width();
		// codigo
		$(window).on('resize load', function () {
			height = $(window).height(),
			width  = $(window).width();

			$(target).css({
				'width': width + 'px',
				'height': height + 'px'
			});
		});
		
	}
}
image_full_screen('.target', true);

});
