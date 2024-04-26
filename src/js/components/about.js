import Swiper, { Pagination, EffectFade, Autoplay } from "swiper";
Swiper.use([Pagination, EffectFade, Autoplay]);


const swiper = new Swiper('.swiper-about-js', {
    slidesPerView: 1,
    effect: "fade",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});