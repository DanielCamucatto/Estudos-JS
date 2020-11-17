/*
    OPERADORES ARITMETICOS 
        em javascript temos 7 operadores que nos permitem fazer operacoções matematicas são eles;
        1. adicção +
        2. Subtração - 
        3. Divisão /
        4. Multiplicação * 
        5. Módulo %
        6.Incremento ++
        7.Decremento --

*/
 let num1 = 9; 
 let num2 = 2 

console.log('======== Operadores Aritméticos=======')
console.log(`A soma entre ${num1} e ${num2} é: ${num1 + num2}`);
console.log(`A subtração entre ${num1} e ${num2} é: ${num1 - num2}`);
console.log(`A divisão entre ${num1} e ${num2} é: ${num1 / num2}`);
console.log(`A multiplicação entre ${num1} e ${num2} é: ${num1 * num2}`);
console.log(`O resto de divisão entre ${num1} e ${num2} é: ${num1 % num2}`);
console.log(`O incremento pré de  ${num1} é: ${++num1}`); // disponibiliza o valor atualizado dentro do contexto da instrução
console.log(`O incremento pós de ${num1} é: ${num1++} `); // disponibiliza o valor atualizado somente após a execução da instrução onde a execução esta contida. 
console.log(`O decremento pré de ${num2} é: ${--num2} `);
console.log(`O decremento pós de ${num2} é: ${num2--} `);

// atribuição de valores 
let teste = 10; 
teste += 5; 
teste -= 5; 
teste *= 5;
teste /= 5; 
teste %= 5;
