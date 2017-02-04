if (!!$.prototype.justifiedGallery) { // if justifiedGallery method is defined
    var options = {
        rowHeight: 140,
        margins: 4,
        lastRow: 'justify'
    };
    $('.article-gallery').justifiedGallery(options);
}


$(window).load(function() {
    
       $("#wrapper").fadeTo("slow",1);
       $("#blogtitel").fadeOut(2000);
});

$(document).ready(function() {


    $(window).on('scroll', function() {

        var z = $(".banner")[0].getBoundingClientRect().bottom / (
            $(".banner")[0].getBoundingClientRect().bottom - $(".banner")[0].getBoundingClientRect().top)

        if (z < 0) {
            z = 0.01
        }

        $(".wrapper")[0].style.zoom = z
        $(".wrapper")[0].style.MozTransform = "scale(" + z + ")"

    });

    $("#menu-icon, #menu-icon-tablet").click(function() {
        if ($('#menu').css('visibility') == 'hidden') {
            $('#menu').css('visibility', 'visible');
            $('#menu-icon, #menu-icon-tablet').addClass('active');

            var topDistance = $("#menu > #nav").offset().top;

            $("#menu > #nav").show();
            return false;
        } else {
            $('#menu').css('visibility', 'hidden');
            $('#menu-icon, #menu-icon-tablet').removeClass('active');

            return false;
        }
    });

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    $("#header > #nav > ul > .icon").click(function() {
        $("#header > #nav > ul").toggleClass("responsive");
    });

    if ($("#menu").length) {
        $(window).on('scroll', function() {
            var topDistance = $(window).scrollTop();

            if ($('#menu').css('visibility') != 'hidden' && topDistance < 10) {
                $("#menu > #nav").show();
            } else if ($('#menu').css('visibility') != 'hidden' && topDistance > 10) {
                $("#menu > #nav").hide();
            }

            if (!$("#menu-icon").is(":visible") && topDistance < 10) {

                $("#menu-icon-tablet").show();
                $("#top-icon-tablet").hide();
            } else if (!$("#menu-icon").is(":visible") && topDistance > 10) {

                $("#menu-icon-tablet").hide();
                $("#top-icon-tablet").show();
            }
        });
    }

    if ($("#footer-post").length) {
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            var topDistance = $(window).scrollTop();

            if (topDistance > lastScrollTop) {
                // downscroll code
                $("#footer-post").hide();
            } else {
                // upscroll code
                $("#footer-post").show();
            }
            lastScrollTop = topDistance;

            $("#nav-footer").hide();
            $("#toc-footer").hide();
            $("#share-footer").hide();

            if (topDistance < 50) {
                $("#actions-footer > ul > #top").hide();
                $("#actions-footer > ul > #menu").show();
            } else if (topDistance > 100) {
                $("#actions-footer > ul > #menu").hide();
                $("#actions-footer > ul > #top").show();
            }
        });
    }
});
