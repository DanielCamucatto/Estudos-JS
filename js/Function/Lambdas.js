/*
FUNCOES LAMBDAS
    Elas são funções anonimas, também conhecidas como funções lambdas, o que quer dizer que elas são funções que não possuem nome 
*/

let numeros = [1,2,3,4,5,6];

function dobrar(valor){
    return valor * 2;
}

let rest = numeros.map(dobrar);

console.log(numeros);
console.log(rest);

// funções anonimas 
let res2 = numeros.map(function(valor){
    return valor * 2;
})
console.log(res2)

// outro exemplo 
function somar(v1, v2){ // função simples de soma
    return v1 + v2
}

let mostrar = function(n1, n2, calc=somar){
    console.log(calc(n1,n2));
}
mostrar(2,4); 
mostrar(6,9, somar);
mostrar(3,6,function(n1,n2){
    return n1 + n2;
})

mostrar(3,6,(v1,v2) => v1*v2); // arrow function 