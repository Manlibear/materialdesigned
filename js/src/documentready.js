(function($) {
    $('document').ready(function() {
        $('.video iframe').iFrameFixHeight();
        $('#main-content').fixMainWrapper('#toolbar');
        $('#show-toolbar-search').searchModule();

        $('#sidenav').simplerSidebar({
            opener: '#toggle-sidebar',
            animation: {
                easing: 'easeOutQuint'
            },
            sidebar: {
                align: 'left',
                width: 320,
                closingLinks: '.close-sidebar',
                css: {
                    zIndex: 3000
                }
            }
        });
    });
})(jQuery);
