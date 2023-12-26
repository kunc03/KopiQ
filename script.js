let bestProduct = document.querySelector('.best-product');
let navList = document.querySelector('.nav-list');

// best-product
document.querySelector('#cart-btn').onclick = () => {
  bestProduct.classList.toggle('active');
  navList.classList.remove('active');
};

//Menu-btn
document.querySelector('#menu-btn').onclick = () => {
  navList.classList.toggle('active');
  shoppingBag.classList.remove('active');
};

// ketika klik diluar menghilang

window.onscroll = () => {
  bestProduct.classList.remove('active');
  navList.classList.remove('active');
};

// initialize swiper
var swiper = new swiper('', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  bbreakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
