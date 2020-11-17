let itext = document.getElementById('produto')
console.log(itext)

let spans = document.getElementsByTagName('span'); 
console.log(spans); 

let elemento = document.getElementsByClassName('texto');
console.log(elemento);

// Ler valores 
console.log(spans[0].textContent)
console.log(spans[1].innerHTML);

// Alterar valores 
 spans[0].textContent = 'texto'; 
 spans[1].innerHTML = 'Alterado';

 let span = document.getElementsByTagName('span')[0];
 console.log(span.innerHTML); 
 span.style.textTransform = 'uppercase';

 let inp = document.querySelector('body div.container input');
 let element = document.querySelector('.texto'); // busca a primeira classe que tenha o valor 
 let elementAll = document.querySelectorAll('.texto'); // busca todos os elementos da classe 
 console.log(inp);
 console.log(element); 
 console.log(elementAll);

 // DECLARAR FUNÇOES COM DOM 

 //  Exemplo 1 
 let btn = document.querySelector('button.btn')
 btn.onClick = function(){
     alert('botão clicado')
 }

 //exemplo 2
 let btn2 = document.querySelector('button.btn'); 
 let inp2 = document.querySelector('input[name-produto'); 
 
 btn.onClick = function(){
     alert(`temos os textos ${input.value}`)
 }