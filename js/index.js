let burger = document.querySelector(".burger__container")
let windowOuterWidth = window.outerWidth
let menu = document.querySelector(".mobile__header-menu")
burger.addEventListener("click", burger_menu)
burger2 = document.querySelector(".mobile__header-burger")




function burger_menu(){
  menu.classList.toggle("active_burger");
  burger2.classList.toggle("active2");
}


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
  

});

if (windowOuterWidth <= 500) {
  let swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 0.5,
    freeMode: true,
  });



}


if (windowOuterWidth <= 780) {
  let swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 0.3,
    freeMode: true,

    breakpoints: {
      768: {
        slidesPerView: 0.5,
      },
      425: {
        slidesPerView: 0.3,
      },
      320: {
        slidesPerView: 0.2,
      }

    }


  });



}


if (windowOuterWidth <= 780) {
  let swiper3 = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 0.3,
    freeMode: true,

    breakpoints: {
      768: {
        slidesPerView: 0.5,
      },
      425: {
        slidesPerView: 0.3,
      },
      320: {
        slidesPerView: 0.2,
      }

    }


  });



}


