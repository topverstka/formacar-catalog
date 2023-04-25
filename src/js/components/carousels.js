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

if (document.querySelector('.advertisement-carousel')) {

  let advertisementCarousel = new Swiper(".advertisement-carousel", {
    modules: [Pagination, Autoplay, Navigation],
    spaceBetween: 10,
    loop: true,
    speed: 600,
    slidesPerView: 1.33683,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".advertisement-carousel__pagination",
      clickable: true,
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 1.33683,
      }
    },
    navigation: {
      nextEl: ".swiper-gallery-next-adv",
      prevEl: ".swiper-gallery-prev-adv",
    }
  });

}

if (document.querySelector('.events-card__carousel')) {

  let eventsCarousel = new Swiper(".events-card__carousel", {
    modules: [Pagination, Autoplay, Navigation],

    spaceBetween: 1,
    loop: true,
    speed: 600,
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
    speed: 600,
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
/////////////////////a

const offersSlider = new Swiper(".offers-carousel", {
  modules: [Pagination, Autoplay, EffectFade, Navigation],
  spaceBetween: 10,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".offers-carousel__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-gallery-next-offers",
    prevEl: ".swiper-gallery-prev-offers",
  }
});


const swiper4 = new Swiper(".news-carousel--tuning", {
  modules: [Navigation],
  speed: 600,
  spaceBetween: 5,
  slidesPerView: 1.2,
  navigation: {
    nextEl: ".swiper-gallery-next-tuning",
    prevEl: ".swiper-gallery-prev-tuning",
  }
});


const swiper3 = new Swiper(".news-carousel--small", {
  modules: [Navigation],
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
  navigation: {
    nextEl: ".swiper-gallery-next-big",
    prevEl: ".swiper-gallery-prev-big",
  }
});


const cardVideo = new Swiper(".card-video", {
  modules: [Navigation],
  spaceBetween: 20,
  speed: 600,
  slidesPerView: 2.3024,
  navigation: {
    nextEl: ".swiper-gallery-next-video",
    prevEl: ".swiper-gallery-prev-video",
  }
});

const swiper = new Swiper('.news__swiper', {
  modules: [Navigation],
  speed: 600,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-gallery-next-news",
    prevEl: ".swiper-gallery-prev-news",
  }
});

const swiperGallery = document.querySelectorAll('.swiper-gallery');

for (let i = 1; i < swiperGallery.length + 1; i++) {
  const swiper = new Swiper('.swiper-gallery-' + i, {
    modules: [Navigation],
    speed: 600,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-gallery-next-' + i,
      prevEl: '.swiper-gallery-prev-' + i,
    },
  });

}


