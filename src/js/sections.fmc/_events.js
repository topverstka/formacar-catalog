"use strict"
import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade, Controller } from "swiper";
import "../libs/masonry.pkgd.min.js"

window.addEventListener('DOMContentLoaded', (event) => {

	const sectionEvents = document.querySelector('.events');
	if (!sectionEvents) return;

	const eventsMasonry = new Masonry('.events__masonry', {})
	eventsMasonry.layout();

	window.eventsMasonry = eventsMasonry;


	function getUniqueId() {
		const uniqueId = Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
		return uniqueId;
	}

	function initEventsCarousels() {
		const eventsCarousels = document.querySelectorAll('.events-card__carousel');

		eventsCarousels.forEach(carousel => {

			if (carousel.classList.contains('events-card__carousel--init')) return;

			const id = getUniqueId();
			const uniqueClass = `events-card__carousel--${id}`;
			carousel.classList.add(uniqueClass);

		  let eventsCarousel = new Swiper(`.${uniqueClass}`, {
		    modules: [Pagination, Autoplay, Navigation],

		    spaceBetween: 1,
		    loop: true,
		    speed: 600,
		    slidesPerView: 1,
		    autoplay: {
		      delay: 3000,
		    },
		    pagination: {
		      el: `.${uniqueClass} .events-card__pagination`,
		      clickable: true,
		    },
		    navigation: {
		      nextEl: `.${uniqueClass} .events-card__arrow-next`,
		      prevEl: `.${uniqueClass} .events-card__arrow-prev`,
		    }
		  });

		  carousel.classList.add('events-card__carousel--init')
		})
	}
	initEventsCarousels();
	window.initEventsCarousels = initEventsCarousels;
	

	function initModalEventsCarousels() {
		const modalEventsCarousels = document.querySelectorAll('.modal-events__carousel');
		modalEventsCarousels.forEach(carousel => {
			if (carousel.classList.contains('modal-events__carousel--init')) return;

			const id = getUniqueId();
			const uniqueClass = `modal-events__carousel--${id}`;
			carousel.classList.add(uniqueClass);

		  let eventsCarousel = new Swiper(`.${uniqueClass}`, {
		    modules: [Pagination, Autoplay, Navigation],

		    spaceBetween: 1,
		    loop: true,
		    speed: 600,
		    slidesPerView: 1,
		    autoplay: {
		      delay: 3000,
		    },
		    pagination: {
		      el: `.${uniqueClass} .modal-events__pagination`,
		      clickable: true,
		    },
		    navigation: {
		      nextEl: `.${uniqueClass} .modal-events__arrow-next`,
		      prevEl: `.${uniqueClass} .modal-events__arrow-prev`,
		    }
		  });

		  carousel.classList.add('modal-events__carousel--init');
		});
	}
	initModalEventsCarousels();
	window.initModalEventsCarousels = initModalEventsCarousels;
});