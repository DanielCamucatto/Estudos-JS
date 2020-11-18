function removerBotao(btn){
    // recupera o valor da div pai com o id app
    //let divElement = document.querySelector('#app'); 

    // metodo para remover o botao selecionado da pagina html
    //divElement.removeChild(btn);

    // é possivel fazer a mesma coisa em uma linha so de codigo como mostra a seguir 
    document.querySelector('#app').removeChild(btn);

}