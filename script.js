//**Menu Mobile */
const menuBtn = document.querySelector('.menu-mobile'); 

function menuToogle(){
let nav = document.querySelector('.navigation'); 
nav.classList.toggle('active');
menuBtn.classList.toggle('active')

}

menuBtn.addEventListener('click', menuToogle);

//**Menu Mobile */