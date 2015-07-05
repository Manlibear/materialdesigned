(function($) {
    $('document').ready(function() {
        $('#main-content').fixMainWrapper('#toolbar');

        $('.video iframe').iFrameFixHeight();

        $('#show-toolbar-search').searchModule({
            callback: function() {
                $('#main-content').fixMainWrapper('#toolbar');
            }
        });

        $('#tumblr_controls').tmblrToolbar({
            toolbar: '#toolbar',
            callback: function() {
                $('#main-content').fixMainWrapper('#toolbar');
            }
        });

        $('#sidenav').simplerSidebar({
            opener: '#toggle-sidebar',
            animation: {
                easing: 'easeOutQuint'
            },
            sidebar: {
                align: 'left',
                gap: 48,
                width: 320,
                closingLinks: '.close-sidebar',
                css: {
                    zIndex: 3000
                }
            }
        });
    });
})(jQuery);
