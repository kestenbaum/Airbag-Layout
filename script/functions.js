function getElementBySelector(selector) {
    return document.querySelector(selector) || null;
}

function clickBurgerMenu(element) {
    element.classList.toggle('menu-mobile--none')
}
