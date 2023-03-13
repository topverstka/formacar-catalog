"use strict"

import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade } from "swiper";


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
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".offers-carousel__pagination",
      clickable: true,
    },
  });
 
}


