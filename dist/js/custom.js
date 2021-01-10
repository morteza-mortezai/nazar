$(document).ready(function() {
    $("#comments-carousel").owlCarousel({
        rtl: true,
        autoplayTimeout: 3000,
        dots: false,
        loop: true,
        autoplay: true,
        center: false,
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            770: {
                items: 2,
            },
            // breakpoint from 768 up
            970: {
                items: 3,
            }
        }
    });
    $("#service-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,

        rtl: true,
        dots: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            770: {
                items: 2,
            },
            // breakpoint from 768 up
            970: {
                items: 2,
            }
        }

    });

});