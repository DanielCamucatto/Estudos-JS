let btn = document.querySelector('button'); 

btn.onclick = function(){
    let textElement = ''; // declara uma variavel de texto que será adcionado ao paragrafo 
    let inputValue = document.querySelector('input').value // recupera o valor do input
    let paragraf = document.createElement('p'); // Cria um elemento <p> na pagina html
    paragraf.setAttribute('class','class-p'); // insere atributo e valor respectivamente no elemento criado

    if(inputValue != ''){
        textElement = document.createTextNode(inputValue); // se o texto for diferente de vazio o textElement recebera o valor digitado em inputValue
    }else{
        textElement = document.createTextNode('Lorem ipsun,lorem ipsun lorem ipsium creat est, lorem ipusum ipsum lorem') // caso o value de inputValue seja vazio é colocado um texto default
    }
    paragraf.appendChild(textElement); //add o texto no paragrafo 
    let divElement = document.querySelector('#app'); // add o value em uma div no html
    divElement.appendChild(paragraf); // add o paragrafo na div  
    document.querySelector('input').value = ''; // limpa o input depois de add um texto.
}