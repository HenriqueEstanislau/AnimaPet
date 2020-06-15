$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 750);
});

function animeScroll(){
	var documentTop = $(document).scrollTop();
	console.log(documentTop)
}

animeScroll();