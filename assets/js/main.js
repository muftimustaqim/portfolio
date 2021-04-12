// Scroll Top
$(window).on("scroll", function() {
  if($(window).scrollTop() > 300) {
        $('nav').addClass('fixed-top nav-sticky');
  }
  else {
        $('nav').removeClass('fixed-top nav-sticky');
  }
});

$(document).ready(function () {
  // Animation Click
  $('.page-scroll').on('click', function (e) {

      const tujuan = $(this).attr('href');

      const elemenTujuan = $(tujuan);

      $('html, body').animate({
          scrollTop: elemenTujuan.offset().top - 100
      }, 'easeInOutExpo');
      // e.preventDefault();
  });

  // Menu Active
    $('li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
    });
    $('a').click(function(){
      $('a').removeClass("active");
      $(this).addClass("active");
    });

    // Menu toggle
    $('.navbar-collapse').before(`<div class="menu-toggle"><span></span><span></span><span></span></div>`);
    const menuToggle = $('.menu-toggle');
    const nav = $('nav ul');
    $(menuToggle).on('click', function () {
      $(nav).toggleClass('slide');
    });
    $('ul').click(function () {
      $('ul').removeClass('slide');
      $('.menu-toggle').removeClass('active');
    });

    $(".menu-toggle").click(function(){
      $(this).toggleClass('active');
    });
});

// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});