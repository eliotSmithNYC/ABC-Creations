$(init);


function init(){
	var $pageWrapper = $('#pageWrapper');
	var $arrow = $('#arrow');
	var $body = $('body');

	setDynamicStyles();

	$arrow.on('click', scrollDown);

	$(window).on('scroll', setAffixTop);

	
}

function setDynamicStyles() {
		var windowHeight = $(window).height();
		var navHeight = $('.navbar').height();

		var offset = windowHeight+navHeight;
		var arrowHeight = $('.arrow-row').height();
		

		
		setTopSectionHeight();
		

	function setTopSectionHeight() {
		
	}

}

function scrollDown() {
	 $("body, html").animate({ 
            scrollTop: $( '.lowContainer' ).offset().top 
        }, 600);
}

function setAffixTop() {
	if (document.body.scrollTop > 765 || document.documentElement.scrollTop > 765) {
        $('.navbar').addClass('affix');
        $('#ghostDiv').addClass('addGhostDiv');
    } else {
    	$('.navbar').removeClass('affix');
    	$('#ghostDiv').removeClass('addGhostDiv');
    }
	
}


