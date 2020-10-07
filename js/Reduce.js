/* 
ENTENDO O QUE É REDUCE
    Reduce é uma estrutura de repetição normalmente utilizada com o Map e o Filter, sua função é reduzir uma coleção de valores em um unico valor

A função do reduce é alimentada por 4 parametros
    1. Acumular (acc)
    2. Valor Atual (cur)
    3. Index Atual (idx)
    4. Array Original (src)
O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

SINTAXE
    array.reduce(callback(acumulador, valorAtual[,index[,array]])[,valorInicial])

PARAMETROS
    *callback
Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:
    *acumulador
O valor retornado na última invocação do callback, ou o argumento valorInicial, se fornecido (exemplo abaixo).
    *valorAtual
O elemento atual que está sendo processado no array.
    *index
Opcional. O índice do elemento atual que está sendo processado no array.
    *array
Opcional. O array ao qual a função reduce() foi chamada.
valorInicial
Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial retornará um erro.

*/
var precos = [4.66, 3.78, 9.78, 1.34,5.32]
console.log(precos);
 var soma = 0;

 function somar (anterior,atual){
     return anterior + atual;
 }
var ret = precos.reduce(somar);
//console.log(ret);

//exemplo Map/Reduce
function adicionar_taxa(valor){
    return valor + 5;
}
var ret = precos.map(adicionar_taxa).reduce(somar);
//console.log(ret)

//exemplo Filter/Map/Reduce
function preco_maior_4(valor){
    return valor > 4;
}
ret = precos.filter(preco_maior_4).map(adicionar_taxa).reduce(somar);
console.log(ret);