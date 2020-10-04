/*
    Trabalhando com Foreach 
    conceito: forEach é uma estrutura de repetição mais moderna, ele é uma das várias maneiras de de se percorer matrizes em JS. 
    o método também esta sendo usado para fazer loop em matrizes. ele passa uma função de retorno de chamada para cada elemento de uma matriz, justamente com os seguintes parâmetros: 
    * valor atual - o valor do elemento atual da matriz 
    * Indice (opcional) - número do índice do elemento atual 
    * Matriz (opcional) - o objeto da matriz ao qual o elemento pertence
    
    numbers.forEach(function(){
        //code
    })
    
    pode-se utilizar arrow functions para simplificar o code 

    numbers.forEach(number => console.log(number));
*/ 
var cursos = [ 
    'Programação para leigos', 
    'Algoritimos e logica de programação',
    'Programação em C', 
    'Programação em Java', 
    'Programação em Python', 
    'Banco de dados', 
    'Programação web com Django Framework',
    'Programação JavaScript', 
]; 

// definir uma função
function imprimir (cursos, indice){
    console.log(indice + ' - ' +cursos);
}
//alterando um pouco a função 
function imprimirArray ( cursos, indice, array){
    console.log(indice + ' - ' +cursos);
    console.log(array);
}

// Para cada elemento imprima 
// cursos.forEach(imprimir);
// cursos.forEach(imprimirArray);

// Utilização de uma função anonima (lambda/callback) e template string
cursos.forEach(function(cursos, indice){
    //console.log(`${indice} - ${cursos}`);
})
