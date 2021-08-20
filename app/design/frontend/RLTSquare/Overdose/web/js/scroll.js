define([
    'jquery'
], function ($) {
    'use strict';

    $('#productaddtocart').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#product-addtocart-button").offset().top - 100
        }, 500);
    });

});
