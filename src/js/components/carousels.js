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
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },
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

if (document.querySelector('.news-carousel--big') && document.querySelector('.news-carousel--small')) {

  let newsCarouselBig = new Swiper(".news-carousel--big", {
    modules: [Autoplay, EffectFade, Controller],

    spaceBetween: 3,
    slidesPerView: 1.199224,
    // autoplay: {
    //   delay: 3000,
    // },
  });
 
  let newsCarouselSmall = new Swiper(".news-carousel--small", {
    modules: [Autoplay, EffectFade, Controller],

    spaceBetween: 3,
    watchSlidesProgress: true,
    slidesPerView: 7.2992,
    // autoplay: {
    //   delay: 3000,
    // },
  });
  newsCarouselBig.controller.control = newsCarouselSmall;
  newsCarouselSmall.controller.control = newsCarouselBig;


}


