 function getDomElement (selector) {
    return document.querySelector(selector)
 }

function clickBurgerBtn (element) {
    element.classList.toggle('header-menu--active')
}
