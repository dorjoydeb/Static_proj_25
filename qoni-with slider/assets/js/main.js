  (function ($) {
"use strict";
      // mainSlider
    function mainSlider() {
        var BasicSlider = $(".slider-active");
        BasicSlider.on("init", function (e, slick) {
            var $firstAnimatingElements = $(".single-slider:first-child").find(
                "[data-animation]"
            );
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
                '.single-slider[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            fade: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'>prev</button>",
            nextArrow: "<button type='button' class='slick-next pull-right'>next</button>",
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data("delay");
                var $animationType = "animated " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

/* meanmenu */
$('.main-menu nav').meanmenu({
     meanMenuContainer: '.mobile-menu',
     meanScreenWidth: "991"
 });

$(window).on('scroll',function() {
   var scroll = $(window).scrollTop();
   if (scroll < 300) {
    $("#header-sticky").removeClass("scroll-header");
   }else{
    $("#header-sticky").addClass("scroll-header");
   }
  });


  // Smooth scroll
            $(function() {
            $('a[href*="#"]:not([data-toggle="tab"])').on('click', function() {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 var headerH = '170' ;
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: target.offset().top - headerH + "px"
                     }, 1000);
                     return false;
                 }
             }
           });
         });



/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    touchDrag : false,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



// scrollToTop
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: 'UP', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);