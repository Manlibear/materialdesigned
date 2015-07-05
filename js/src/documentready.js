(function($) {
    $('document').ready(function() {
        $('#main-content').fixMainWrapper('#toolbar');

        $('.video iframe').iFrameFixHeight();

        $('#show-toolbar-search').searchModule({
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

    $(window).load(function() {
        $('#tumblr_controls').fixToolbars({
            toolbar: {
                tumblr: '#toolbar-tumblr',
                main: '#toolbar'
            }
        });
    });
})(jQuery);
