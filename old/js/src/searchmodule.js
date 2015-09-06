(function($) {
    $.fn.searchModule = function() {
        var options = $.extend({
            callback: function() {}
        }, arguments[0] || {}),
            $searchModule = $(this),
            showSearchModule = function() {
                $('#toolbar-main').css('display', 'none');
                $('#toolbar-search').css('display', 'table-row');

                options.callback.call(this);
            },
            hideSearchModule = function() {
                $('#toolbar-main').css('display', 'table-row');
                $('#toolbar-search').css('display', 'none');

                options.callback.call(this);
            };

        $searchModule.click(function(){
            showSearchModule();
        });

        $('#hide-toolbar-search').click(function(){
            hideSearchModule();
        });
    };
})(jQuery);
