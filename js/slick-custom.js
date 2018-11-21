$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: 'linear',
    dots: true,
    customPaging: function (slider, i) {
        return '<img src="images/dot.svg">';
    },
});