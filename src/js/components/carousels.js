if (document.querySelector('.promo-carousel')) {

 let promoSlider = new Swiper(".promo-carousel", {
   modules: [Navigation, Autoplay, EffectFade],
   effect: 'fade',
     fadeEffect: {
     crossFade: true
   },
   spaceBetween: 10,
   autoHeight: true,
   autoplay: {
     delay: 3000,
   },
   breakpoints: {
     769: {
       spaceBetween: 100,
     }
   },
   on: {
     init: function () {
       normalizePaginationOffset(this)
     },
     slideChange: function () {
       normalizePaginationOffset(this)
     },
   }
 });
 window.addEventListener("resize", (e) => {
   debounce(normalizePaginationOffset(promoSlider), 200);
 });
}