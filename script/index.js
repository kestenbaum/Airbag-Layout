const swiper = new Swiper(('.swiper'), {
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
       },
})

const burgerSelector = document.querySelector('.header-burger'),
      menuMediaScreen = document.querySelector('.header-contact')

burgerSelector.onclick = () => {
  menuMediaScreen.classList.toggle('header-menu--active')
}
