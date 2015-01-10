(function($) {
	$.fn.iFrameFixHeight = function(options) {
		this.each(function() {
			var $this   = $(this),
				container = $this.parent(); 
			$(window).resize(function(){
				var w  = parseInt( $this.attr( 'width' ) ),
					h  = parseInt( $this.attr( 'height' ) ),
					ar = w/h,
					wC = container.width(),
					nH = wC/ar;
				$this.css( 'height', nH );
			});
			$(window).resize();
		});
	};
	$('.video iframe').iFrameFixHeight();
	
	//TOPSECTION ADJUST
	$.fn.sectionAdjust = function(options) {
	    this.each(function() {
	        var $contentWrapper = $(this),
	            $topSection = $('.top-section');
	       $(window).resize(function(){
	           var HtopSection = parseInt( $topSection.outerHeight() );
	           
	           $contentWrapper.css({
	               paddingTop: HtopSection + 16
	           })
	       });
	       $(window).resize();
	    });
	};
	$('.content-wrapper').sectionAdjust();
	
	//SIDEBAR
	$( ".sidebar" ).materialSidebar({
	    settings: {
	        opener: '.open-sb'
	    }
	});
	
})(jQuery);
