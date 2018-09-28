
$(function () {
  $('.slide-show').slick({
    arrows: true,
    prevArrow: '<p><i class="fas fa-chevron-left"></i></p>',
    nextArrow: '<p><i class="fas fa-chevron-right"></i></p>',
    autoplay: false,
    accessibility: false,
    fade: false,
    draggable: false,
    touchMove: false,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    swipe: true,
    variableWidth: true,
    pauseOnHover: false,
    centerPadding: "0px",
  });
});
