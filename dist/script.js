const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 4
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 2
    },
  },
});