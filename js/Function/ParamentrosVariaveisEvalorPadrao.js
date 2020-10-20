/*
FUNCOES COM PARAMENTROS VARIAVEIS E VALOR PADRAO
    ARGUMENTS
        arguments mesmo que não exista nenhum argumento na função por padrão o javaScript cria um array chamado "arguments" (que são os argumentos da função)

*/

function soma(){
    let soma = 0;
    for(let i =0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma;
}
console.log(soma());
console.log(soma(2));
console.log(soma(2,5));
console.log(soma(5,3,9));
console.log(soma(2,4,6,8,12));

function imprime_Valores(num1, num2){
    for(let i in arguments){ // for mais moderno {para cada item presebte nesse array}
        console.log(arguments[i])
    }
}
imprime_Valores();
imprime_Valores(4,6);
imprime_Valores(4,6,8);
imprime_Valores(3,6,8,12,44,56);
 
// função com valores padrão 
function valorPadrao(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}
console.log('=====Valor Padrão=====')
console.log(valorPadrao());
console.log(valorPadrao(2,2))
console.log(valorPadrao(2,2,));
console.log(valorPadrao(2,2,2));
console.log(valorPadrao(2,2,2,2))

//função valor padrão com chegaem true or false
function valorCheck(num1, num2, num3){
    if(Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'não foi possivel efetuar a soma'
    }
}
console.log('====valor check====')
console.log(valorCheck());
console.log(valorCheck(2,2,2));
console.log(valorCheck('a','s','b'));
console.log(valorCheck(true, false, 'a'));
console.log(valorCheck('c', false, true));