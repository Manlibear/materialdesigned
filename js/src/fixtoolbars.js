(function($) {
    $.fn.fixToolbars = function(options) {
        var heightToolTumblr,
            defaults = {},
            cfg = $.extend(true, defaults, options),
            tmblr = $(this),
            toolMain = $(cfg.toolbar.main),
            toolTmblr = $(cfg.toolbar.tumblr),

            heightControls= parseInt(tmblr.height());
            console.log(heightControls);

            toolTmblr.css({
              height: heightControls + 6,
              minHeight: 28
            });

            heightToolTmblr = parseInt(toolTmblr.height());
            console.log(heightToolTmblr);

            toolMain.css({
                paddingTop: heightToolTmblr + 4
            });
    };
})(jQuery);
