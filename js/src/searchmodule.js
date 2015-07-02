(function($) {
    $.fn.searchModule = function() {
        var $searchModule = $(this),
            showSearchModule = function() {
                $('#navbar-main-module').fadeOut();
                $('#search-module').fadeIn();
            },
            hideSearchModule = function() {
                $('#navbar-main-module').fadeIn();
                $('#search-module').fadeOut();
            };

        $searchModule.click(function(){
            showSearchModule();
        });

        $('#search-module-hide').click(function(){
            hideSearchModule();
        });
    };
})(jQuery);
