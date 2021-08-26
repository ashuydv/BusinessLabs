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

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "in";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

var header = document.getElementById('header');
var mobile = document.getElementById('mobile-menu');
var mobileNav = document.getElementById('mobileNav');
var closeBtn = document.getElementById('close-btn');

if (screen.width < 1000) {
    header.style.display = 'none !important'
    mobile.style.display = 'block !important'
} else {
    header.style.display = 'block !important'
    mobile.style.display = 'none !important'
}

function closeIt() {
    var ddItem = document.getElementById('dropit');
    ddItem.style.display = 'none'
}
const bars = document.getElementById('bars');
bars.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('fa-times')
    mobileNav.classList.toggle('block')
})