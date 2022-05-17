const {log} = console
//Header

//Search
const getInputNode = document.querySelector('.header-search'),
    getBtnSearchNode = document.querySelector('.btn-search')

function checkErrorInput() {
    const getValueInput = getInputNode.value

    if (getValueInput.trim().length <= 0) {
        getInputNode.style.border = '2px solid black'
    } else  {
        getInputNode.style.border = 'none'
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

// if (getValueInput.trim().length <= 0){
//    getInputNode.setAttribute('required');
// }
// валидатор для поисковой формы
const searchInput = document.querySelector('.header-search');
const searchBtn = document.querySelector('.btn-search');
const searchForm = document.querySelector('.search');

searchBtn.onclick = (event) => {
    setSubmitBtnStatus(searchForm, searchInput, event)
}

function setSubmitBtnStatus(form, input, event) {
    const inputLength = input.value.trim().length;

    event.preventDefault();

    if (inputLength > 0) {
        form.submit();
    }
}

