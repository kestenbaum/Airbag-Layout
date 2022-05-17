const {log} = console
//Header

//Search
const getInputNode = document.querySelector('.header-search'),
      getBtnSearchNode = document.querySelector('.btn-search')

function checkErrorInput(){
   const getValueInput = getInputNode.value

   if (getValueInput.trim().length <= 0){
      getInputNode.style.border = '2px solid black'
   } 
   
}      

getBtnSearchNode.addEventListener('click', checkErrorInput)
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

   


