/**
 *  For of
 *      é uma estrutura de repetição assim como o for, mas ele facilita o trabalho com colecões 
 * 
 */

 let name = 'Daniel Camucatto'

 for(let letra of name){
     console.log(letra);
 }

 let numeros = [1,2,3,4,5]; 
 for(let num of numeros){
     console.log(num * 2);
 }
 for (let indice in numeros){
     console.log(`indice: ${indice}, valor: ${numeros[indice]}`);
 }

 let cursos = new Map([
     [1, 'Programação para leigos'],
     [2, 'Algoritimos e logica de Programação'],
     [3, 'Programação em C'],
     [4, 'Programação em Java'],
     [5, 'Programação em python'],
     [6, 'Banco de dados'], 
     [7, 'Programação em javascript']
 ]);

 for(let curso of cursos){
     console.log(curso);
 }
//acessando so as chaves
for(chave of cursos.keys()){
     console.log(chave);
 }
 // acessando so o valor 
 for(let valor of cursos.values()){
     console.log(valor)
 }

// acessando chave e valor 
for(let [chave, valor] of cursos.entries()){
    console.log(`${chave} - ${valor}`);
}

// acessando elementos do conjunto 
let conjunto = new Set([1,2,3,4,5,5]); 
for(let numero of conjunto){
    console.log(numero);
}