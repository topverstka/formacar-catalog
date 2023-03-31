"use strict"

import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade, Controller } from "swiper";


if (document.querySelector('.promo-carousel')) {

  let promoSlider = new Swiper(".promo-carousel", {
    modules: [Navigation, Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".promo-carousel__arrows-next",
      prevEl: ".promo-carousel__arrows-prev",
    },


  });

}

if (document.querySelector('.offers-carousel')) {

  let offersSlider = new Swiper(".offers-carousel", {
    modules: [Pagination, Autoplay, EffectFade],
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".offers-carousel__pagination",
      clickable: true,
    },
  });

}

if (document.querySelector('.advertisement-carousel')) {

  let advertisementCarousel = new Swiper(".advertisement-carousel", {
    modules: [Pagination, Autoplay],

    spaceBetween: 10,
    loop: true,
    slidesPerView: 1.33683,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".advertisement-carousel__pagination",
      clickable: true,
    },
  });

}

if (document.querySelector('.events-card__carousel')) {

  let eventsCarousel = new Swiper(".events-card__carousel", {
    modules: [Pagination, Autoplay, Navigation],

    spaceBetween: 1,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".events-card__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".events-card__arrow-next",
      prevEl: ".events-card__arrow-prev",
    }
  });

}

if (document.querySelector('.modal-events__carousel')) {

  let eventsCarousel = new Swiper(".modal-events__carousel", {
    modules: [Pagination, Autoplay, Navigation],

    spaceBetween: 1,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".modal-events__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".modal-events__arrow-next",
      prevEl: ".modal-events__arrow-prev",
    }
  });

}
/////////////////////


const swiper3 = new Swiper(".news-carousel--small", {
  spaceBetween: 5,
  slidesPerView: 7.2,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".news-carousel--big", {
  modules: [Navigation, Thumbs],
  spaceBetween: 5,
  slidesPerView: 1.2,
  thumbs: {
    swiper: swiper3,
  },
});


const cardVideo = new Swiper(".card-video", {
  spaceBetween: 20,
  slidesPerView: 2.3024,
});

const swiper = new Swiper('.news__swiper', {
  modules: [Navigation],
  speed: 400,
  spaceBetween: 40,
  slidesPerView: 'auto',
});

const swiperGallery = document.querySelectorAll('.swiper-gallery');

for (let i = 1; i < swiperGallery.length + 1; i++) {
  const swiper = new Swiper('.swiper-gallery-' + i, {
    modules: [Navigation],
    speed: 400,
    spaceBetween: 40,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-gallery-next-' + i,
      prevEl: '.swiper-gallery-prev-' + i,
    },
  });

}


