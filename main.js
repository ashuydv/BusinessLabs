$(document).ready(function() {
    $('.navbar-light .dmenu').hover(function() {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function() {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });
});

$(document).ready(function() {
    $(".megamenu").on("click", function(e) {
        e.stopPropagation();
    });
});

$(document).ready(function() {
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

$(document).ready(function() {

    $('.items').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }

        ]
    });
});