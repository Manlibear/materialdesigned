(function($) {
    $.fn.fixToolbars = function(options) {
        var defaults = {},
            cfg = $.extend(true, defaults, options),
            tmblr = $(this),
            toolMain = $(cfg.toolbar.main),
            toolTmblr = $(cfg.toolbar.tumblr);

            heightControls = tmblr.css('height');
            console.log(heightControls);

/*
        //fix toolbar-tumblr height
        toolTmblr.css({
            height: heightControls + 6,
            minHeight: heightControls + 6
        });

        var heightToolTumblr = toolTmblr.height();

        //fix toolbar padding-top
        toolMain.css({
            paddingTop: heightToolTumblr + 4
        });
        */
    };
})(jQuery);
