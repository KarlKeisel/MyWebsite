let heroText = ['Python Programmer', 'Full Stack Developer', 'Data Analyst', 'Database Management', 'Strategy Gamer'];
let heroWord = heroText.length;
let x = 0;


function heroTextDisplay() {
    setTimeout(function () {
        let title = heroText[x];
        let interval = 50;
        let wait = interval + (interval * title.length);

        $.each(title.split(''), function (i, letter) {
            setTimeout(function () {
                $('.hero-insert').html($('.hero-insert').html() + letter);
            }, interval * i);
        });
        let i = title.length;
        while (i >= 0) {
            setTimeout(function () {
                let text = $('.hero-insert').html();
                let length = text.length - 1;
                $('.hero-insert').html(text.substring(0, length));
            }, wait + (interval * i + 2000));
            i--;
        }
        x++;
        if (x >= heroWord) {
            x = 0;
            heroTextDisplay();
        } else {
            heroTextDisplay();
        }
    }, 6300);
}


$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    vertical: false,
                }
            },]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


heroTextDisplay();