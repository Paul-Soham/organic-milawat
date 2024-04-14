$(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 50,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
$(".team-slider").owlCarousel({
  loop: true,
  margin: 50,
  dots: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header-sec").addClass("newheader");
    } else {
      $(".header-sec").removeClass("newheader");
    }
  });
});
