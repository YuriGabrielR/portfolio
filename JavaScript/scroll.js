/**Arquivo que realiza todas as operações envolvendo o Scroll da page. */


/**Essa função é responsável por "esconder" os botões flutuantes das redes sociais quando o usuário
 está visualizando o footer que já obtém as mesmas informações.
 **/
let size = screen.width;

function desable_ButtonsFloatSocials(){
    if(size >= 481 && window.scrollY >= 4438){
        document.querySelector('.redes-sociais--div').style.display='none';
    }else{
        document.querySelector('.redes-sociais--div').style.display='flex';
    }
}
window.addEventListener('scroll', desable_ButtonsFloatSocials);
