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
	
	$.fn.toggleHeader = function() {
		var h2 = this,
			h1 = $( '.main-header' );
		$(window).resize(function() {
			var h1H = h1.height();
			$(document).scroll(function(){
				var offset = $(document).scrollTop(),
					h1Top  = h1.offset().top,
					h1Bttm = h1Top + h1H;
					
					if( offset <= h1Bttm ) {
						h2.fadeOut( 100 );
					} else {
						h2.fadeIn( 100 );
					}
			});
			$(document).scroll();
		});
		$(window).resize();
	};
	$('.header-secondary').toggleHeader();
	
	$( '.sidebar' ).simpleSidebar({
		settings: {
			opener: '.open-sb',
			wrapper: '.container',
			ignore: '#ga_target, #tumblr_controls',
			animation: {
				duration: 600,
				easing: 'easeOutExpo'
			}
		},
		sidebar: {
			align: 'left',
			width: 250,
			closingLinks: 'a'
		}
	});
	
	$( '.content-wrapper' ).gridalicious({
		selector: '.post',
		animate: true,
		animationOptions: {
			speed: 200,
			duration: 300
		},
		width: 500,
	});
})(jQuery);