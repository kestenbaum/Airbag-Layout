const {log} = console
//Header
const btnBurgerMenu = document.querySelector('.burger-menu'),
      menuMobileDevice = document.querySelector('.menu-mobile')

function clickBurgerMenu(){
    menuMobileDevice.classList.toggle('menu-mobile--none')
}
btnBurgerMenu.addEventListener('click', clickBurgerMenu)


//Slider first screen
   const swiper = new Swiper(('.swiper'), {
      // Default parameters
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
       },
    })

   


