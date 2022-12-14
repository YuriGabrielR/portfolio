/** Animação de revelação */
ScrollReveal({ reset: true });
ScrollReveal().reveal('.home--texts', {
    delay: 300,
    rotate:{ x:100, y:100, z:0}
}
); 

 /** Animação de revelação */

 /** Ocultação dos ícones flutuantes da page */

   function FloatIconsNone(e){
    e.preventDefault(); 
    if(window.matchMedia("(max-width:971px)") && window.scrollY >= 3000){
     document.querySelector('.sm--components').style.display ='none';
     
     
    } else{
     document.querySelector('.sm--components').style.display ='flex';     
     
    }
   }

  window.addEventListener('scroll', FloatIconsNone);
/** Ocultação dos ícones flutuantes da page */


/** Comportamento do botão Up para subir à pagina principal*/

/**Este bloco de código é responsável pelo click e animação do botão para a home */
function arrowUp(){
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
    
}
let home = document.querySelector('.btnUp');
home.addEventListener('click', arrowUp);
/**Fim do bloco */


/**Este bloco de código é responsável por ocultar o botão quando o usuário realiza algum scroll na tela*/
function ocultarBotaoHome(){
    if(window.scrollY === 0){
     document.querySelector('.btn-up').style.display ="none";
    } else{
        document.querySelector('.btn-up').style.display ="flex";
   }
}
addEventListener('scroll', ocultarBotaoHome);
/** Fim do bloco */


