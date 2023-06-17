

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-mobile');
const nav = document.querySelector('.navigation');
const itemlinks = document.querySelectorAll('.items-nav a[href^="#"');
const btn_aboutUs = document.querySelector('.btn--aboutme');
const btnDataSheet = document.querySelectorAll('.btn-data-sheet');

//**Menu Mobile */
function menuToogle(){
nav.classList.toggle('active');
menuBtn.classList.toggle('active')
}
menuBtn.addEventListener('click', menuToogle);
//**Menu Mobile */

//**Menu Mobile - Transição */
//**Menu Mobile - Transição */


//**Comportamento dos links internos do Menu Toogle */

function scrollMenu(event){
    // Scroll de animação dos links internos //
    event.preventDefault();
    const e = event.target;
    const att = e.getAttribute('href');
    const section = document.querySelector(att);
    section.scrollIntoView({
        behavior:'smooth',
        block:'start',
    });
 // Scroll de animação dos links internos //
 //Scroll de Animação dos links internos com menu mobile ativado //
    menuBtn.classList.remove('active');
     nav.classList.remove('active');
     //Scroll de Animação dos links internos com menu mobile ativado //
}

itemlinks.forEach((item) =>{
    item.addEventListener('click', scrollMenu)
})


//**Comportamento dos links internos do Menu Toogle *

btn_aboutUs.addEventListener('click', (event)=>{
    event.preventDefault();
    const e = event.target;
    const att = e.getAttribute('href');
    const section = document.querySelector(att);
    section.scrollIntoView({
        behavior:'smooth',
        block:'start',
    });
})


btnDataSheet.forEach(buttons =>{
    buttons.addEventListener('click', ({target})=>{

        let descriptionProject = target.parentElement.children[1];
        let descriptionDataSheet = target.parentElement.children[2];
       
        descriptionProject.classList.toggle('isHidden');
        descriptionDataSheet.classList.toggle('isActive');
    })

});

