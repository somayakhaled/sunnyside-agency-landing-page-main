let mobileMenu = document.querySelector('.mobileMenu');
let menu = document.querySelector('.hamburger');

menu.addEventListener('click', () => {
    if(mobileMenu.style.display === 'none'){
        mobileMenu.style.display = 'block'
    } else{
        mobileMenu.style.display = 'none'
    }
})