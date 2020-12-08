/*
 *  crie uma aplicação para efetuar cálculo aritmético de soma e subtração. 
        considere os seguintes critérios: 
            1. Ao executar o script a aplicação deve solicitar a entrada de uma numero, seguido de uma operação de soma ou subtração e posteriormente seguido de um segundo numero 
            2. A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema solicita a operação o usuário deve informar o texto 'soma' ou 'subtração' (sem as aspas)
            3. Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido cálculo. Exemplo calculo(num1, num2, operação)
            4. A função deve executar o cálculo com base na operação informada pelo usuário e na seguência deve retornar o valor encontrado
            5.Ao término o sistema deve forncer a seguinte saída para o usuário: 
        "O resultado é:<resultado>

 */
// criando variaveis para entrada de dados
let num1 = 0, num2 = 0;

// pegando o botão 
const btn = document.querySelector('.btn');

btn.onclick = function(){
    num1 = parseInt( prompt('Digite um numero'));
    num2 = parseInt( prompt('Digite um numero'));
    
    calc();
}

function calc(btn){
    let operacao = prompt('Digite a operação que deseja realizar: Somar ou Subtrair');
     if (operacao === 'somar' || operacao ==='Somar'){
         let calcSoma = num1 + num2;
         document.write(`O resultado é:${calcSoma}`)
     }else if(operacao === 'subtrair' || operacao === 'Subtrair'){
         let calcSub = num1 - num2;
         document.write(`O resultado é ${calcSub}`)
     }else{
        document.write(`Não conseguimos efetuar a operação tente novamente`)
     }
        
}
 
