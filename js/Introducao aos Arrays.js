/*Arrays são container de dados que nos permitem guardar varios dados
Arrays em JS são objetos indexados que comeca em 0 e o ultimo elemento é sempre o ultimo numero -1

Array contendo 5 elementos -> n = 5 
[0][1][2][3][4]
indices -> posicao do elemento no array[]
valores em um array
[12]['Geek'][true][48][54]

Detalhes sobre arrays
* possuem tamanho infinito
podemos colocar qualquer tipo de dados
podemos misturar dados no mesmo array(o recomendado não é misturar)
*/ 

//forma 1
var alunos = new Array('Cristiana', 'ricardo', 'lucas', 'maria', 'sofia')
//console.log(alunos); 

// forma 2 (recomendada)
var notas = [1,3,5,7,9]; 
//console.log(notas);

// criando um array vazio 
var dados = [];
//console.log(notas)

//fazendo acesso ao valor de um indice
//console.log(notas[2]);

// alterando o valor a partir do indice
notas[2] = 12;
//console.log(notas); 

//Atencao ao acessar um valor com um indice que não existe
notas[9]= 10; //não existe!
console.log(notas)

//inserindo elementos no final do array 
var nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);
nomes.push('Vanessa'); //insere o valor no final do array
console.log(nomes);

//tamanho do array
console.log(nomes.length); //diz qual o tamanho do array
var tam = nomes.length;
console.log(tam); 

//ordenar dados de array 
var alunos = ['vera', 'lucia', 'pedro', 'fernanda', 'mario', 'ana', 'carla']; 
console.log(alunos);
alunos.sort();//ordena array de strings
console.log(alunos);
var precos = [123.55, 42.27, 546.99, 23.12]
precos.sort((a,b)=>{return a-b}); // ordena array de interios e floats
console.log(precos);


var idades = ['1','5','8','12','44','78'];

// deletando dados de um array
delete idades[2];
console.log(idades);

idades.splice(3, 1); // a partir do indice 3 delete 1 elemento
idades.splice(3,0,56,89); // a partir do indice 3, não delete nenhum, mas adicione 56 e 89
idades.splice(3,1,23); // a partir do indice 3, delete 1 elemento e adiciona 23

//iterar em um array 
for( var i =0; i<idades.length; i++){
    console.log(idades[i]);
}

//removendo elementos da ultima posicao do array
idades.pop();
console.log(idades);

var ret = idades.pop(); //remove e retorna o ultimo elemento de um array
console.log(ret);
console.log(idades);

//removendo o primeiro elemento de um array 
idades.shift(); // remove e retorna o ultimo elemento de um array
console.log(idades);

//inserindo elementos no inicio de um array
idades.unshift(99);
console.log(idades);

//retorna um novo array a partir do indice informado 
var novo = idades.splice(3);
console.log(novo);

var novo = idades.splice(1,2); // a partir do indice 1, pague o 2 sem inclui-lo 
console.log(novo);

//concatenacao de dois arrays
var pares = [2,4,6,8]
var impares = [1,3,5,7,9]
var rest = pares.concat(impares); // concatena os dois arrays 
console.log(rest);

//array de array ou matrizes 
// 4x4
var tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

/*
    [
        [1,   2,  3,  4] linha 0
        [5,   6,  7,  8] linha 1
        [9,  10, 11, 12] linha 2
        [13, 14, 15, 16] linha 3

    ]

*/
console.table(tabuleiro);
console.log(tabuleiro[0][0])
console.log(tabuleiro[2][2])
tabuleiro.push([17,18,19,20]);
console.table(tabuleiro);

