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
				opener: '#sb-opener'
			},
			leftSidebar: {
				style: {
					maxWidth: 300
				}
			}
		});
	});
})(jQuery);