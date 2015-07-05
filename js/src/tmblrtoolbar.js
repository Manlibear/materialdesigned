(function($) {
    $.fn.tmblrToolbar = function(options) {
        var toolbarTmblr, fixHeight,
            defaults = {
                toolbar: undefined,
                callback: function() {}
            },
            cfg = $.extend(true, defaults, options),
            tmblr = $(this),
            toolbar = $(cfg.toolbar);

        tmblr.wrap('<div id="toolbar-tumblr" class="toolbar-tumblr">');

        toolbarTmblr = $('#toolbar-tumblr');

        fixHeight = function() {
            tHeight = parseInt(tmblr.attr('height'));

            toolbarTmblr.css('height', tHeight + 2);

            var ttHeight = toolbarTmblr.height();

            toolbar.css('padding-top', ttHeight + 4);

            cfg.callback.call(this);
        };


        $(window).load(function(){
            fixHeight();
            setTimeout(fixHeight, 100);
        });
    };
})(jQuery);
