define([
    "jquery",
    'domReady!'

], function ($) {

    (function ($) {
        'use strict';

        $.fn.equalHeight = function () {
            var heights = [];
            this.css('height', 'auto');
            $.each(this, function (i, element) {

                var $element       = $(element);
                var elementHeight;
                console.log("element" + $element);
                var includePadding = ($element.css('box-sizing') === 'border-box') || ($element.css('-moz-box-sizing') === 'border-box');
                if (includePadding) {
                    elementHeight = $element.innerHeight();
                } else {
                    elementHeight = $element.height();
                }
                heights.push(elementHeight);

            });

            this.css('height', Math.max.apply(window, heights) + 'px');
        };

    })(window.jQuery);
});