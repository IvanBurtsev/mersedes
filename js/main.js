$( function() {
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img class="arrow arrow-left" src="images/slider/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="arrow arrow-rigth" src="images/slider/next.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    arrow: false
                }
            }
        ]
    });
});