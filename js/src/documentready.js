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
                closingLinks: '.close-sidebar',
                css: {
                    zIndex: 3000
                }
            }
        });
    });
})(jQuery);
