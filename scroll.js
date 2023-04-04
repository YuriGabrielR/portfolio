/** Animação de revelação */
ScrollReveal({ reset: true });
ScrollReveal().reveal('.home--texts', {
    delay: 300,
    rotate:{ x:100, y:100, z:0}
}
); 

ScrollReveal().reveal('.imgProfile', {
  delay: 300,
  rotate:{ x:0, y:100, z:0}
}
); 

ScrollReveal().reveal('.p-reveal', {
  delay: 400,
  rotate:{ x:100, y:0, z:0}
}
); 

 /** Animação de revelação */


/** Comportamento do botão Up para subir à pagina principal*/

/**Este bloco de código é responsável pelo click e animação do botão para a home */

let home = document.querySelector('.btnUp');
home.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  });

});
/**Fim do bloco */


/**Este bloco de código é responsável por ocultar o botão quando o usuário realiza algum scroll na tela*/
function ocultarBotaoHome(){
  if(window.scrollY > 10){

    document.querySelector('.btn-up').style.display = "flex";

  }else {
    document.querySelector('.btn-up').style.display = "none";
  }


}
addEventListener('scroll', ocultarBotaoHome);
/** Fim do bloco */


