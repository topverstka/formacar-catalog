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
if (document.querySelector('.card-carousel--big')) {
  let cardCarouselBig = new Swiper(".card-carousel--big", {
    modules: [Autoplay, EffectFade, Controller],
    spaceBetween: 3,
    slidesPerView: 1.199224,

  });
 
}

if (document.querySelector('.card-carousel--small')) {
  let cardCarouselSmall = new Swiper(".card-carousel--small", {
    modules: [Autoplay, EffectFade, Controller],
    spaceBetween: 3,
    watchSlidesProgress: true,
    slidesPerView: 7.2992,

  });
}

// if (document.querySelector('.card-carousel--big') && document.querySelector('.card-carousel--small')) {
//   cardCarouselBig.controller.control = cardCarouselSmall;
//   cardCarouselSmall.controller.control = cardCarouselBig;
// }

if (document.querySelector('.card-video')) {

  let cardVideo = new Swiper(".card-video", {
    modules: [Autoplay],

    spaceBetween: 20,
    loop: true,
    slidesPerView: 2.3024,
    autoplay: {
      delay: 3000,
    },
  });
 
}