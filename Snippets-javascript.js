// Image FullScreen ----------------------------------------------------------------------------

function slider_fullScreen(id) {
	// sistema de indentificação da tela.
	'use strict';
	var element  = document.getElementById(id),
		width    = window.innerWidth,
		height   = window.innerHeight;
	
	element.setAttribute('style', 'width:' + width + 'px; height:' + height + 'px;');
	element.setAttribute('name', 'size the window: ' + width + 'x' + height);

}
