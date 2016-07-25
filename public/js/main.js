$(init);


function init(){
	
	setDynamicStyles();
	$('.arrow').on('click', scrollDown);
	
}

function setDynamicStyles() {
		var windowHeight = $(window).height();
		var navHeight = $('.navbar').height();

		var offset = windowHeight+navHeight;
		var arrowHeight = $('.arrow-row').height();
		console.log(arrowHeight)

		setAffixTop();
		setTopSectionHeight();
		console.log(windowHeight);

	function setTopSectionHeight() {
		// var topOffset = 765 - windowHeight;
		// $('#top-section').css('height', windowHeight+arrowHeight)
	}

	function setAffixTop() {
		$('.navbar').attr('data-offset-top', offset);

	}


}

function scrollDown() {
	 $("body, html").animate({ 
            scrollTop: $( '.lowContainer' ).offset().top 
        }, 600);
}


