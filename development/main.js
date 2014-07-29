(function($){
	var $document = $(document),
		$window   = $(window),
		$body     = $('body');
	$(document).ready(function() {
		/*NO?
		$.fn.fixHeight = function () {
			this.each(function () {
				var $this = $(this);
				$(window).resize(function() {
					var $thisW = $this.width();
					$this.css('height', $thisW);
				});
				$(window).resize();
			});
		};
		$('.soundcloud_audio_player, .art img').fixHeight();
		*/
		
		/*OK
		$.fn.iFrameFixHeight = function() {
			this.each(function() {
				var $this     = $(this),
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
		$('iframe').iFrameFixHeight();*/
		
		$.fn.toggleHeader = function() {
			var h2 = this,
				h1 = $( '.main-header' );
				$window.resize(function() {
					var h1H = h1.height();
					$document.scroll(function(){
						var offset = $document.scrollTop(),
							h1Top  = h1.offset().top,
							h1Bttm = h1Top + h1H;
							
							if( offset <= h1Bttm ) {
								h2.fadeOut( 100 );
							} else {
								h2.fadeIn( 100 );
							}
					});
					$document.scroll();
				});
				$window.resize();
		};
		$('.header-secondary').toggleHeader();
		
		$( '.sidebar' ).simpleLeftSidebar({
			settings: {
				opener: '.open-sb',
				container: '.container',
				ignore: '#ga_target, #tumblr_controls',
				animation: {
					duration: 1000,
					easing: 'easeOutQuint'
				}
			},
			leftSidebar: {
				style: {
					maxWidth: 400,
				}
			}
		});
		
	});
})(jQuery);