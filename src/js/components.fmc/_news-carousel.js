"use strict"
import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade, Controller } from "swiper";

window.addEventListener('DOMContentLoaded', (event) => {
	
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
});