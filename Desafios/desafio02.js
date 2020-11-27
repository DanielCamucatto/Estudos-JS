const { whileStatement } = require("jscodeshift");
const { of } = require("zen-observable");

/**
 *Crie uma função que receba dois valorees inteiros como parâmetro e exiba todos os números ímpares entre estes dois números (sem incluí-los)
 */

// metodo 1 
 function impar(n1, n2){
    while( n1 < n2){
        //console.log(n1);
        n1 += 1;
        if(n1 % 2 !== 0){
            console.log(n1)
        
        }   
    }
 }
impar(1,10);

// metodo 2 
function impar2(n1, n2){
    for(let i = n1; i < n2; i++){
        //console.log(i)
        if(i % 2 !== 0 ){
            console.log('Numero impar ' + i)
        }
    }
}
impar2(1,10);