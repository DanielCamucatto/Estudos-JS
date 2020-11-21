/*
FUNCOES COM PARAMENTROS DE RETORNO


*/

const { functionExpression } = require("jscodeshift");

function calcular_idade(ano_nascimento){
    const data = new Date(); // gera data atual
    const idade = data.getFullYear() - ano_nascimento;
    return idade; // sem o retorno não existe a possibilidade de recuperar o valor da funcao
}
let ret = calcular_idade(1985);
console.log(ret);

function calcular_idade2(ano_nascimento){
    const data = new Date();
    const idade = data.getFullYear() - ano_nascimento;
    console.log(idade)
}

calcular_idade2(1985);

function calAreaTerreno(largura, comprimento){
    //logica
    const area = largura * comprimento;
    // saida
    return area; 
}
calAreaTerreno(15,25);