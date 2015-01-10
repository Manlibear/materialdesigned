//Material Sidebar v1.0.0 by DcDeiv https://github.com/dcdeiv
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
(function( $ ) {
	$.fn.materialSidebar = function( options ) {
		//declaring all global variables
		var sbw, animationStart, animationReset, callbackA, callbackB, status,
			//allowing user customisation
			defaults  = {
				settings: {
					opener: undefined,
					data: 'ssbplugin',
					animation: {
						duration: 500, //milliseconds (0.5s = 500ms)
						easing: 'swing'
					}
				},
				sidebar: {
					width: 300, //pixels
					gap: 64, //pixels
					closingLinks: 'a',
					style: {
						zIndex: 19
					}
				},
				mask: {
					style: {
						backgroundColor: 'black',
						opacity: 0.5,
						filter: 'Alpha(opacity=50)' //IE8 and earlier
					}
				}
			},
			config    = $.extend( true, defaults, options ),
			$sidebar  = this,
			$opener   = $( config.settings.opener ),
			dataName  = config.settings.data,
			duration  = config.settings.animation.duration,
			easing    = config.settings.animation.easing,
			sbMaxW    = config.sidebar.width,
			gap       = config.sidebar.gap,
			$links    = config.sidebar.closingLinks,
			defStyle  = config.sidebar.style,
			maskDef   = config.mask.style,
			winMaxW   = sbMaxW + gap,
			w         = $( window ).width(),
			MaskDef   = {
				position: 'fixed',
				top: 30,
				right: -200,
				left: -200,
				bottom: -200,
				zIndex: config.sidebar.style.zIndex - 1
			},
			maskStyle = $.extend( {},  maskDef, MaskDef ),
			//hiding overflow [callback(A/B)]
			overflowTrue = function() {
				$( 'body, html' ).css({
					overflow: 'hidden'
				});
			},
			//adding overflow [callback(A/B)]
			overflowFalse = function() {
				$( 'body, html' ).css({
					overflow: 'auto'
				});
			};
		
		//adding default style to $sidebar
		$sidebar
			.css( defStyle )
			//wrapping inner content to let it overflow
			.wrapInner( '<div data-' + dataName + '="sub-wrapper"></div>' );
			
		var subWrapper = $sidebar.children().filter(function() {
			return $( this ).data( dataName ) === 'sub-wrapper' ;
		});
		
		subWrapper.css({
			width: '100%',
			height: '100%',
			overflow: 'auto'
		});
			
		//Appending to 'body' the mask-div and adding its style
		$( 'body' ).append( '<div data-' + dataName + '="mask"></div>' );
		
		var maskDiv = $( 'body' ).children().filter(function(){
			return $( this ).data( dataName ) === 'mask' ;
		});
		
		maskDiv
			.css( maskStyle )
			.hide();
		
		//assigning value to sbw
		if ( w < winMaxW ) {
			sbw = w - gap;
		} else {
			sbw = sbMaxW;
		}
		
		//sidebar positioning
		$sidebar.css({
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			width: sbw,
			marginLeft: -sbw
		});
		
		//open sidebar animation		
		$opener.click(function() {
			var nsbw = $sidebar.width();
			
			//defining animation
			animationStart = {
				marginLeft: 0
			};
			
			//triggering animation
			$sidebar.each(function() {
				$( this ).animate( animationStart, {
					duration: duration,
					easing: easing,
					complete: overflowTrue
				});
			});
			
			maskDiv.fadeIn();
			
			status = 'opened';
		});
		
		//close sidebar animation
		maskDiv.click(function() {
			var nsbw = $sidebar.width();
			
			//defining animations
			animationReset = {
				marginLeft: -nsbw
			};
			
			//triggering animations
			$sidebar.each(function() {
				$( this ).animate( animationReset, {
					duration: duration,
					easing: easing,
					complete: overflowFalse
				});
			});
			
			maskDiv.fadeOut();
			
			status = 'closed';
		});
		
		$sidebar.on( 'click', $links, function() {
			var nsbw = $sidebar.width();
			
			//defining animation
			animationReset = {
				marginLeft: -nsbw
			};
			
			//triggering animation
			$sidebar.each(function() {
				$( this ).animate( animationReset, {
					duration: duration,
					easing: easing,
					complete: overflowFalse
				});
				
				maskDiv.fadeOut();
				
				status = 'closed';
			});
			
		});
		
		//Adding responsiveness to sidebar
		$( window ).resize(function() {
			var rsbw, sbMar,
				w 	= $( this ).width();
				
			if ( w < winMaxW ) {
				rsbw = w - gap;
			} else {
				rsbw = sbMaxW;
			}
			
			$sidebar.css({
				width: rsbw
			});
			
			if ( undefined === status || 'closed' === status ) {
				$sidebar.css({
					marginLeft: -rsbw
				});
			} else if ( 'opened' === status ) {
				$sidebar.css({
					marginRight: 0
				});
			}
		});
		
		return this;
	};
})( jQuery );
