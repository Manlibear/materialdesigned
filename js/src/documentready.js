(function($) {
    $('document').ready(function() {
        $('.video iframe').iFrameFixHeight();

        $('#main').fixMainWrapper('#main-navbar');

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
