import Swiper, { Pagination, EffectFade, Autoplay, Thumbs } from "swiper";
Swiper.use([Pagination, EffectFade, Autoplay, Thumbs]);


var thumbSlider = new Swiper(".thumbs-slider-js", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var portfolio = new Swiper(".portfolio-js", {
    slidesPerView: 1.2,
    effect: "fade",
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    
    thumbs: {
        swiper: thumbSlider,
    },
});


portfolio.on('slideChange', function () {
    var activeSlideIndex = portfolio.realIndex; 
    var infoContainers = document.querySelectorAll('.portfolio__info-container');
    infoContainers.forEach(function (container) {
        var infoSlides = container.querySelectorAll('.portfolio__info');
        infoSlides.forEach(function (infoSlide) {
            if (infoSlide.dataset.slide === activeSlideIndex.toString()) { 
                infoSlide.style.display = 'block';
            } else {
                infoSlide.style.display = 'none';
            }
        });
    });
});


const video = new Swiper('.swiper-video-js', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    }
});