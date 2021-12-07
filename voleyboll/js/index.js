const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  freeMode: true,

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  
  },

  // Navigation arrows


  




 


});

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  freeMode: true,
  
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  
  },
  
  

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },




});

