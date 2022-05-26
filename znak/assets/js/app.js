$(function() {

    let header = $("#header");
    let headerH = header.innerHeight();
    // Nav Toggle mobile======================================================
    let navToggle = $('#navToggle');
    let nav = $('#nav');
    let navWe = $('#navWe');
    let logoText = $('#logoText');

    let navH = nav.innerHeight();

    console.log(navH);








    navToggle.on('click', function(event) {
        event.preventDefault();


        $(this).toggleClass('active');

        nav.toggleClass('show');
        navWe.toggleClass('show');
        header.toggleClass('header-dark');
        logoText.toggleClass('logo__text-white');

        $('body').toggleClass('no-scroll');


        // document.querySelector('#navWe').style.top = 'top' + navH

        // navWe.css({
        //     top: 'calc(100% + $('navH'))'
        // })


    });


    $(window).on('resize', function() {
        navToggle.removeClass('active');
        nav.removeClass('show');
        navWe.removeClass('show');
        header.removeClass('header-dark');
        logoText.removeClass('logo__text-white');


        $('body').removeClass('no-scroll');



    });





    header = $("#header");
    headerH = header.innerHeight();

    // Smooth scrool to the sections======================================================

    $("[data-scroll]").on("click", function(event)  {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        navToggle.removeClass('active');
        nav.removeClass('show');
        navWe.removeClass('show');

        header.removeClass('header-dark');
        logoText.removeClass('logo__text-white');

        $('body').removeClass('no-scroll');



        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });

    // Modal===============================================================================
    $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');
        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__inner').css({
                opacity: '1',
                transform: 'scale(1)'

            });
        });

        navToggle.removeClass('active');
        nav.removeClass('show');
        navWe.removeClass('show');
        header.removeClass('header-dark');
        logoText.removeClass('logo__text-white');



    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');

        modalClose(modal);
    });

    $('.modal').on('click', function() {
        let modal = $(this)

        modalClose(modal);

    });

    $('.modal__inner').on('click', function(event) {
       event.stopPropagation();
    });


    function modalClose(modal) {

        modal.find('.modal__inner').css({
            opacity: '0',
            transform: 'scale(0.5)'

        });

        setTimeout(function() {

            $('body').removeClass('no-scroll');
            modal.removeClass('show');

        }, 200);

    }


// SlickSlider=============================================================================== https://kenwheeler.github.io/slick/

    let introSlider = $("#introSlider");

    introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true

    });










// AOS ============================ https://github.com/michalsnik/aos






AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',  // defines which position of the element regarding to window should trigger the animation

});

});