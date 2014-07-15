(function($){
	$(document).ready(function(){
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
		$('.soundcloud_audio_player, .audio-art').fixHeight();
		$( '#sidebar' ).simpleLeftSidebar({
			settings: {
				opener: '#sb-opener',
				ignore: '#ga_target, #tumblr_controls'
			},
			leftSidebar: {
				style: {
					maxWidth: 300
				}
			}
		});
		
		$.fn.showHeader = function() {
			var headerTool = this,
				mainHeader = $('#main-header');
			$(window).resize(function() {
				headerTool.hide();
				$(document).scroll(function() {
					var docTop     = $(this).scrollTop(),
						mhTop      = mainHeader.offset().top,
						mhHeight   = mainHeader.height(),
						mhBottom   = mhTop + mhHeight;
						mhPosition = mhBottom - docTop;
						
						console.log( mhPosition );
						
						if ( mhPosition <= 88 ) {
							headerTool.show();
						} else {
							headerTool.hide();
						}
				});
				$(document).scroll();
			});
			$(window).resize();
			
			return this;
		};
		$('.header-toolbar').showHeader();
	});
})(jQuery);