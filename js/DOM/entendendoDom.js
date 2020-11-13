//acessando o <a href = '' class= 'link' da pagina>
let link = document.querySelector('.link')
// imprimindo no console a variavel link
console.log(link);
// imprimindo no console o texto do link 
console.log(link.innerHTML);
// imprimindo o pai do elemento <a>
console.log(link.parentNode);
// acessando ao elemeto pai do body 
console.log(link.parentNode.parentNode); // html
//acessando os filhos do html 
console.log(link.parentNode.parentNode.childNodes);
// primeiro filho
console.log(link.parentNode.parentNode.firstChild);
// acessando o ultimo filho 
console.log(link.parentNode.parentNode.lastChild);
// acessando os irmãos 
console.log(link.parentNode.parentNode.firstChild.nextSibling);
