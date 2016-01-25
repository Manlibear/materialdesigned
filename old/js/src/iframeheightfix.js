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
})(jQuery);
