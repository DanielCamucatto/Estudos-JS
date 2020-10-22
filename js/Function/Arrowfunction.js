/*
ENTENDENDO E USANDO ARROW FUNCTION
*/
//Forma 1
function soma1(num1, num2){
    return num1 + num2;
}
console.log(soma1(4,6))

//forma 2
let soma2 = function(num1, num2){
    return num1 + num2; 
}
console.log(soma2(4,6))

//forma 3
let soma3 = soma1;
console.log(soma3(4,6));

//Forma 4 - arrow function
let soma4 = (num1, num2) =>{ 
    return num1 + num2
}
console.log(soma4(4,6));

/*
caso a função tenha apenas 1 paramentro de entrada e execute apenas uma linha, 
pode-se simplifica-la usando arrow functions
*/
//exemplo 
let dobrar = valor => valor * 2;
console.log(dobrar(5))

//outro exemplo 
const msg = () =>console.log('Levanta e anda Daniel');
msg();