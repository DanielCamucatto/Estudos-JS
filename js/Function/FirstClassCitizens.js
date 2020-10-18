/*
FIRST CLASS CITIZENS

    O que são funções?
        são elementos da programação que realizam uma ação.

    Em javaScript podemos usar funções como qualquer outro tipo de dado,  
*/

function somar(num1, num2){
    return num1 + num2;
}

let res = somar(4,6); // executando a função 
console.log(somar(10,5)); // executando funcão

//exemplo 1 
let executar = somar 
console.log(executar(8,7));

//exemplo 2
function subtrair(num1, num2){
    return num1 - num2;
}

function faz_algo( num1, num2, funcao){
    return funcao(num1, num2);
}

console.log(faz_algo(5,5,somar));
console.log(faz_algo(8,3, subtrair));

//exemplo 3 
function outra(funcao){
    return funcao;
}
const ret = outra(somar);
console.log(ret(8,2));

// a funcao mais simples que existe
function mensagem(){
    console.log("oi!");
}
mensagem();

// a função no javaScript é um dado 
 let valores =[1, 3.4, true, somar];
for(let i=0; i < valores.length;i++){
    console.log(typeof(valores[i]));
}