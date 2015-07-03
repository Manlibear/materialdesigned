(function($) {
    $.fn.searchModule = function() {
        var $searchModule = $(this),
            showSearchModule = function() {
                $('#nb-main-module').hide();
                $('#nb-search-module').fadeIn('fast');
            },
            hideSearchModule = function() {
                $('#nb-main-module').fadeIn('fast');
                $('#nb-search-module').hide();
            };

        $searchModule.click(function(){
            showSearchModule();
        });

        $('#close-search-module').click(function(){
            hideSearchModule();
        });
    };
})(jQuery);
