
//*Variáveis*/

const menuBtn = document.querySelector('.menu-mobile');
const nav = document.querySelector('.navigation');
const itemLink1 = document.querySelector('.ancora1');
const itemLink2 = document.querySelector('.ancora2');
const itemLink3 = document.querySelector('.ancora3');
const itemLink4 = document.querySelector('.ancora4');
const itemLink5 = document.querySelector('.ancora5');

//*Variáveis*/

//**Menu Mobile */

function menuToogle(){
nav.classList.toggle('active');
menuBtn.classList.toggle('active')
}
menuBtn.addEventListener('click', menuToogle);

//**Menu Mobile */


//**Comportamento dos links internos do Menu Toogle */

itemLink1.addEventListener('click', ()=>{
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
})
    
itemLink2.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
})
    
itemLink3.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
})

itemLink4.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
})

itemLink5.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
})


    
    
    

//**Comportamento dos links internos do Menu Toogle */
