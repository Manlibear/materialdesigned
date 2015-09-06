(function($){
    $(document).ready(function(){
        var toggleSecondaryTitle,
            secondaryTitle = $('.toggle-title-secondary'),
            header = $('.toolbar-header header h1');

        toggleSecondaryTitle = function() {
            var st = $(window).scrollTop(),
                thOffset = header.offset().top,
                thHeight = header.height(),
                thOffsetBottom = thOffset + thHeight;

            if (st >= thOffsetBottom) {
                secondaryTitle.fadeIn('fast');
            } else {
                secondaryTitle.fadeOut('fast');
            }
        };

        toggleSecondaryTitle();

        $(window)
            .scroll(function() {
                toggleSecondaryTitle();
            })
            .resize(function(){
                toggleSecondaryTitle();
            });
    });
})(jQuery);
