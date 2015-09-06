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
