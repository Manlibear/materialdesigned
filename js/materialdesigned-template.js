/*! material-designed v3.0.0 (http://materialdesigned.tumblr.com)
** Davide Di Criscito <davide.dicriscito@gmail.com> (http://github.com/dcdeiv)
** (c) 2014-2015 Licensed under GPLv2
*/
/*! simpler-sidebar v1.3.3 (https://dcdeiv.github.io/simpler-sidebar)
** Davide Di Criscito <davide.dicriscito@gmail.com> (http://github.com/dcdeiv)
** (c) 2015-2015 Licensed under GPLv2
*/
!function(a){a.fn.simplerSidebar=function(b){var c=a.extend(!0,a.fn.simplerSidebar.settings,b);return this.each(function(){var b,d,e,f,g,h,i=c.attr,j=a(this),k=a(c.opener),l=c.sidebar.closingLinks,m=c.animation.duration,n=c.sidebar.width,o=c.sidebar.gap,p=n+o,q=a(window).width(),r={},s={},t=function(){a("body, html").css("overflow","hidden")},u=function(){a("body, html").css("overflow","auto")},v={duration:m,easing:c.animation.easing,complete:t},w={duration:m,easing:c.animation.easing,complete:u},x=function(){j.animate(r,v).attr("data-"+i,"active"),A.fadeIn(m)},y=function(){j.animate(s,w).attr("data-"+i,"disabled"),A.fadeOut(m)},z=function(){var a=j.attr("data-"+i),c=j.width();s[b]=-c,"active"===a&&y()},A=a("<div>").attr("data-"+i,"mask");void 0===c.sidebar.align||"right"===c.sidebar.align?b="right":"left"===c.sidebar.align&&(b="left"),d=p>q?q-o:n,e={position:"fixed",top:c.top,bottom:0,width:d},e[b]=-d,r[b]=0,f=a.extend(!0,e,c.sidebar.css),j.css(f).attr("data-"+i,"disabled"),g={position:"fixed",top:c.top,right:0,bottom:0,left:0,zIndex:c.sidebar.css.zIndex-1,display:"none"},h=a.extend(!0,g,c.mask.css),!0===c.mask.display&&A.appendTo("body").css(h),k.click(function(){var a=j.attr("data-"+i),c=j.width();s[b]=-c,"disabled"===a?x():"active"===a&&y()}),A.click(z),j.on("click",l,z),a(window).resize(function(){var c,d,e=a(window).width();c=p>e?e-o:n,d={width:c},d[b]=-c,j.attr("data-"+i,"disabled").css(d),A.fadeOut(m),a("body, html").css({overflow:"auto"})})})},a.fn.simplerSidebar.settings={attr:"simplersidebar",top:0,animation:{duration:500,easing:"swing"},sidebar:{width:300,gap:64,closingLinks:"a",css:{zIndex:3e3}},mask:{display:!0,css:{backgroundColor:"black",opacity:.5,filter:"Alpha(opacity=50)"}}}}(jQuery);
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

(function($) {
    $.fn.fixMainWrapper = function(navbar) {
        var $mainWrapper = $(this),
            $mainNavbar = $(navbar);

        $(window).resize(function() {
            nbHeight = $mainNavbar.outerHeight();

            $mainWrapper.css('margin-top', nbHeight + 16);
        });
        $(window).resize();
    };
})(jQuery);

(function($) {
    $.fn.searchModule = function() {
        var $searchModule = $(this),
            showSearchModule = function() {
                $('#navbar-nb-module').fadeOut();
                $('#search-module').fadeIn();
            },
            hideSearchModule = function() {
                $('#navbar-nb-module').fadeIn();
                $('#search-module').fadeOut();
            };

        $searchModule.click(function(){
            showSearchModule();
        });

        $('#close-search-module').click(function(){
            hideSearchModule();
        });
    };
})(jQuery);

(function($) {
    $('document').ready(function() {
        $('.video iframe').iFrameFixHeight();

        $('#main').fixMainWrapper('#main-navbar');

        $('#open-search-module').searchModule();

        $('#main-sidebar').simplerSidebar({
            opener: '#toggle-sidebar',
            animation: {
                easing: 'easeOutQuint'
            },
            sidebar: {
                align: 'left',
                width: 300,
                css: {
                    zIndex: 3000
                }
            }
        });
    });
})(jQuery);
