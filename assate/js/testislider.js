 $(".slick-slider").slick({
  slidesToShow: 2,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // dots: false, Boolean
  // arrows: false, Boolean
  responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});