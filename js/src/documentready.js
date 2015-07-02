(function($) {
    $('document').ready(function() {
        $('.video iframe').iFrameFixHeight();

        $('#sidebar').simplerSidebar({
            opener: '#toggle-sidebar',
            animation: {
                easing: 'easeOutQuint'
            },
            sidebar: {
                align: 'left',
                width: 300
            }
        });
    });
})(jQuery);
