/*
    Conjuntos com Set 
        - conjuntos não aceitam repetição de valores
        - Conjuntos não são indexados
*/
// declarando um conjunto
let cursos = new Set(); 

// add valores 
cursos.add('Programação para leigos'); 
cursos.add('Algoritmos e lógica de programação'); 

// add valores concatenados 
cursos.add('programação em C').add('Programação em java').add('Programação em Python');

cursos.add('Banco de dados');
cursos.add('Programação web com Django Framework'); 

console.log(cursos); 
// acessando o tamanho do conjunto
console.log(cursos.size);
// existe tal elemento no conjunto
console.log(cursos.has('Banco de dados'))// obs: has() é case sensitie CUIDADO
// deletar elementos de um conjunto 
cursos.delete('Programação para leigos'); 
console.log(cursos);