const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 100,
    loop: true,
    autpHeight: true,
    speed: 700,
 
    

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {

      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
      }
    }
 
  });
