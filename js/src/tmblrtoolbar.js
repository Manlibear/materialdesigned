(function($) {
    $(document).ready(function() {
        var fixheight, tcontrols, cHeight, tcHeight,
            controls = $('#tumblr_controls'),
            toolbar = $('.toolbar-fixed');

        controls.wrap('<div id="tmblrcontrols">');

        tcontrols = $('#tmblrcontrols');

        fixHeight = function() {
            cHeight = parseInt(controls.attr('height'));

            tcontrols.css({
                height: cHeight + 2,
                minHeight: 28,
                position: 'fixed',
                top:0,
                left: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.2) none repeat scroll 0% 0%',
            });

            tcHeight = tcontrols.height();

            toolbar.css('top', tcHeight);
        };

        $(window).load(function() {
            fixHeight();
            setTimeout(fixHeight, 100);
        });

        fixHeight();
    });
})(jQuery);
