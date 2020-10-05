/*
MÉTODO FILTER
    Filter é uma estrutura de repetição, o objetivo desse método é filtar um determinado conjunto de matrizes (arrays) que passarem por uma determinada condição.  
    Ao contrário do Map o filter trará um array de tamanho menor. 

SINTAXE
    var newArray = arr. filter(callback[thisArgs]);    

PARÂMETROS
    Callback
        função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso o contrário, recebendo tres argumentos: 
        * element : o elemento que esta sendo processado no array
        * index: o índice do elemento atual que esta sendo processado no array
        * o array para qual o filter foi chamada
        * thisArgs (opcional) : valor a ser usado como this durante a execução do callback
    
VALOR DE RETORNO
Um novo array com elementos que passaram no teste. 

DESCRIÇÃO
filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true. O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.

callback é invocado com estes três argumentos:

    o valor do elemento
    o índice do elemento
    o objeto do array a ser preenchido
Se o parâmetro thisArg for provido para o filter, ele será passado para o callback quando invocado, para ser usado como o valor do this. Caso contrário, será passado undefined como o valor de this. O valor do this finalmente observado pela função de callback é determinado de acordo com a regra que define o valor do this geralmente visto por uma função.

filter() não altera o array a partir da qual foi invocado.

O intervalo de elementos processados pela função filter() é definido antes da invocação do primeiro callback. Elementos que forem adicionados ao array depois da invocação do filter() não serão visitados pelo callback. Se elementos existentes no array forem alterados ou deletados, os valores deles que serão passados para o callback são os que eles tiverem quando o  filter() visitá-los; Elementos que forem deletados não são visitados.


*/
var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

function filtar_pares(n){
    return n % 2 === 0;
}
function filtar_impares(n){
    return n % 2 !== 0;
}
function mult_5 (n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtar_pares);
//console.log(ret);

ret = numeros.filter(filtar_impares);
//console.log(ret); 

ret = numeros.filter(mult_5);
//console.log(ret);

var alunos = [
    {nome:'pedro',nota:  8.5},
    {nome:'Maria', nota: 10},
    {nome:'Fernanda', nota: 9.2},
    {nome:'Ricardo', nota: 7.3}
]
console.log(alunos);

function notas_maiores_8 (alunos){
    return alunos.nota > 8;
}

var filtrados = alunos.filter(notas_maiores_8);
console.log(filtrados);