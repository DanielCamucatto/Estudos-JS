/*
    Map é uma estrutura de repetição que mapeia os elementos de um array (matriz) para um novo array (matriz) como resultado de uma função aplicado a cada elemento. 
    * map gera sempre um novo array 
    * map gera sempre um novo array de mesmo tamanho do original
    
    Sintaxe
    arrayOriginal.map(callback)

    Parâmentros
    callback é uma função que será executada para cada elemento no vetor original e retornará uma representação dele com base em alguma lógica, que será o item equivalente no vetor resultante. sua estrutura é a seguinte: 
    function(valorAtual, indice, array)

    * O parâmentro valorAtual é obrigatório e representa o próprio item da iteração atual. Ou seja, à medida que a função map itera sobre um array, esse parâmetro receberá cada item;
    * O parâmentro indice é opcional e representa o índice de item da iteracão atual;
    * O parâmentro array também é opcional e representa o próprio array ao qual os itens pertencem.
    
    VALOR DE RETORNO
        É retornado um novo array cujos itens são uma representação dos elementos do array original. 


    MAP E A PROGRAMAÇÃO FUNCIONAL 
        Desde seu lançamento, a linguagem JavaScript recebeu grandes atualizações e passou a contar com recursos muito desejados pelos programadores, alguns dos quais têm origem (ou principal uso) no paradigma funcional de programação. Exemplos disso foram a inclusão de métodos que promovem a imutabilidade e o uso de funções de alta ordem, dois conceitos fundamentais na programação funcional.

        O map é um desses métodos: ele não altera o array original (imutabilidade) e recebe como parâmetro uma função (logo, ele é uma função de alta ordem).
*/

var valores = [2,4,6,8,10]; // array com valores
//console.log(valores);

//função que dobra os valores do array
var dobro = valores.map(function(valores){
    return valores * 2;
});
//console.log(dobro);

// encadeando maps para realizar múltiplas transformações 
function dobrar(valor){
    return valor * 2;
}

function soma_4 (valor){
    return valor + 4;
}
function dividir_por_5(valor){
    return valor / 5;
}

 var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
 console.log(resultado); 

 //temos um array de produtos com seus respectivos preços de venda e desejamos simular a aplicação de um reajuste em todos os preços, mas sem modificar a informação original.
 var produtos=[
        {
            nome: 'smatphone 5 Android', 
            preco: 1200
        },
        {
            nome: 'Notebook 4gb windows 10', 
            preco: 2100
        },
        {
            nome: 'SmartTv 50 Led',
            preco: 8700
        }
 ];

 var produtosComReajustes = produtos.map(function(item){
     return{
         nome: item.nome,
         preco: item.preco *1.5
     }
 })
 console.log(produtos)
 console.table(produtosComReajustes);