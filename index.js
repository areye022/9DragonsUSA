const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('.navbar__menu')

//  adding class active or inactive to help trigger our mobile menu
const mobileMenu = () => {
    // toggle active nonactive
    menu.classList.toggle('isactive')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);