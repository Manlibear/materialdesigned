(function($) {
    $.fn.fixToolbars = function(options) {
        var defaults = {},
            cfg = $.extend(true, defaults, options),
            tmblr = $(this),
            toolMain = $(cfg.toolbar.main),
            toolTmblr = $(cfg.toolbar.tumblr);

            heightControls = tmblr.height();

        //fix toolbar-tumblr height
        toolTmblr.css('height', heightControls + 6);

        var heightToolTumblr = toolTmblr.height();

        //fix toolbar padding-top
        toolMain.css('padding-top', heightToolTumblr + 4);
    }
})(jQuery);
