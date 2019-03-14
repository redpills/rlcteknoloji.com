/*=== full screen background ===*/
$(document).ready(function($) {
    // Defining a function to set size for #hero 
    function fullscreen() {
        jQuery('.module_full_bg').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }

    fullscreen();

    // Run the function in case of window resize
    jQuery(window).resize(function() {
        fullscreen();
    });

});

/*=== menu ===*/

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
        $("#header, #parent_1, nav a, .nome, .logo_fg_menu").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header, #parent_1, nav a, .nome, .logo_fg_menu").removeClass("active");
    }
});

// menu open/close toggle
$(document).ready(function() {

    //responsive menu

    $('.menu-toggle').click(function() {
        $(this).toggleClass("on");
        if ($('nav').hasClass('active-nav')) {
            $('.mobile-nav-container').toggleClass('active-nav');
            $('.menu-toggle').toggleClass('active-nav');
            $('nav').toggleClass('active-nav');
            $('nav li').removeClass('show-nav');

            // Remove Page Crop
            setTimeout(function() {
                $('.page-wrap').removeClass('crop'); // release the "proper" crop
                $('.page-wrap').height('auto'); // resets height for scolling
            }, 100);

        } else {
            $('.page-wrap').addClass('crop'); // "proper" crop
            $('.menu-toggle').toggleClass('active-nav');
            $('.mobile-nav-container').toggleClass('active-nav');
            $('nav').toggleClass('active-nav');


            // Show me the links
            var timer = 0;
            $.each($('nav li'), function(i, s) {
                timer = 25 * i;
                setTimeout(function() {
                    $(s).addClass('show-nav');
                }, timer); // show menu items on timer
            });

        }
        //close menu from item 'nav li a' and background
        $('nav li a, .mobile-nav-container').on('click', function() {
            $(".menu-toggle").click();
            $("nav li a, .mobile-nav-container").removeClass("active-nav");
        });
    });

});

/*=== scroll up button ===*/

$(document).ready(function() {

    /* $(window).scroll(function () {
         if ($(this).scrollTop() > 200) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });*/

    $('.scrollup, .child_3').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

/*=== down arrow function ===*/

$(document).ready(function() {
    $(".down_arrow").click(function() {
        $('html, body').animate({
            scrollTop: $('#start').offset().top - 50
        }, 600);
        return false;
    });
});

// JavaScript Document

function showMap() {
    var map_canvas = document.getElementById('map_canvas');
    map_options = {
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.918477, 29.303555),
        zoom: 17.0,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "water",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#acbcc9"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#f2e5d4"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5c6c6"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e4d7c6"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbfaf7"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5dac6"
            }]
        }, {
            "featureType": "administrative",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 33
            }]
        }, {
            "featureType": "road"
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 20
            }]
        }, {}, {
            "featureType": "road",
            "stylers": [{
                "lightness": 20
            }]
        }]
    };


    map = new google.maps.Map(map_canvas, map_options);

    var icon = 'images/location.png';
    var markerOptions = {
        position: new google.maps.LatLng(40.918477, 29.303555),
        map: map,
        icon: icon
    };
    marker = new google.maps.Marker(markerOptions);
}

showMap();