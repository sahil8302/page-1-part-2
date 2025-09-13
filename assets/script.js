const burger = document.querySelector('.burger');
const menuLinks = document.querySelector('.menu-links');



burger.addEventListener('click', toggleMenu);


function toggleMenu() {
  menuLinks.classList.toggle('active');
}






