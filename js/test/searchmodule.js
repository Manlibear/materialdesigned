(function($) {
    $.fn.searchModule = function() {
        var $searchModule = $(this),
            showSearchModule = function() {
                $('#toolbar-main').css('display', 'none');
                $('#toolbar-search').css('display', 'table-row');
            },
            hideSearchModule = function() {
                $('#toolbar-main').css('display', 'table-row');
                $('#toolbar-search').css('display', 'none');
            };

        $searchModule.click(function(){
            showSearchModule();
        });

        $('#hide-toolbar-search').click(function(){
            hideSearchModule();
        });
    };
})(jQuery);
