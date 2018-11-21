$('.carousel').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: 'linear',
    dots: true,
    customPaging: function (slider, i) {
        return '<img src="images/dot.svg">';
    },
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        },
      ]
});