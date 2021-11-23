/* Mobile Menu*/
let toggleMenu = document.querySelector('#menu-toggle-btn');
let primaryMenu = document.querySelector('.primary-menu');
toggleMenu.onclick = () => {
    primaryMenu.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
}

/* search form*/
let searchForm = document.querySelector('#search-form');
let searchIcon = document.querySelector('#search-icon');
searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
    primaryMenu.classList.remove('active');   
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
}
/* Shopping Cart*/
let shoppingCart = document.querySelector('#shopping-cart');
let cartIcon = document.querySelector('#cart-icon');
cartIcon.onclick = () => {
    shoppingCart.classList.toggle('active');
    primaryMenu.classList.remove('active');
    searchForm.classList.remove('active');   
    LoginForm.classList.remove('active');
}
/* User Profile*/
let LoginForm = document.querySelector('#login-form');
let userIcon = document.querySelector('#user-icon');
userIcon.onclick = () => {
    LoginForm.classList.toggle('active');
    primaryMenu.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}
window.onscroll = () =>{
    primaryMenu.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
}
/* Hero Section */
document.querySelector('#hero').onmousemove = (e) =>{
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;
    document.querySelector('#hero .hero-parallax-image').style.transform = `translateX(${y}px) translateY(${x}px)`;
}
document.querySelector('#hero').onmouseleave = () =>{
    document.querySelector('#hero .hero-parallax-image').style.transform = `translateX(0px) translateY(0px)`;
}