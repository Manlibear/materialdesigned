(function($) {
    $.fn.searchModule = function() {
        var $searchModule = $(this),
            showSearchModule = function() {
                $('#navbar-nb-module').fadeOut();
                $('#search-module').fadeIn();
            },
            hideSearchModule = function() {
                $('#navbar-nb-module').fadeIn();
                $('#search-module').fadeOut();
            };

        $searchModule.click(function(){
            showSearchModule();
        });

        $('#close-search-module').click(function(){
            hideSearchModule();
        });
    };
})(jQuery);
