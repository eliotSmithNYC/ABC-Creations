$(init);


function init(){
	var $arrow = $('#arrow');

	$arrow.on('click', scrollDown);
	$(window).on('scroll', setAffixTop);

	
}



function scrollDown() {
	 $("body, html").animate({ 
            scrollTop: $( '.lowContainer' ).offset().top 
        }, 600);
}

function setAffixTop() {
	var affixHeight = $('#top-section').height() - $('.navbar').height();
	if (document.body.scrollTop > affixHeight || document.documentElement.scrollTop > affixHeight) {
        $('.navbar').addClass('affix');
    } else {
    	$('.navbar').removeClass('affix');
    }
	
}


