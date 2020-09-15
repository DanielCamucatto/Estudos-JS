// Sintaxe Básica
// JS é case sensitive e usa o conjunto de caracteres unicode
// no JS instruções são chamados de DECLARAÇOES e são separados por ;
// existem três tipos de declarações em JS

// var 
var nome; // declara uma variavel, opcionalmente, inicializando-a com um valor

//let 
let nome; //declara uma variavel local de escopo de bloco, opcionalmente inicializando-a com um valor

//const
const nome; //declara uma constante de escopo de bloco, apenas de leitura 

// Declaração de variaveis 
// existem 3 formas de declaração de variaveis 

// 1. com a palavra chave VAR 
var x = 42; // esta sintaxe pode ser usada tanto para variaveis locais quanto globais

// 2. Por simples adição de valor
x = 42; // Isso declara uma variavel global. essa declaração gera um aviso de advertencia no JS. Não se deve usar essa variante

// 3. com a palavra chave LET

let x = 42; // essa sintaxe pode ser usada para declarar uma variavel local de escopo de bloco

// Classificando variaveis 
// Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor  undefined.
// Uma tentativa de acessar uma variável não declarada resultará no lançamento de uma exceção ReferenceError:
var a;
console.log("O valor de a é: " + a ); // saida "o valor de a é undefined "
console.log("O valor de b é: " + b ); // executa uma exception de erro de referencia (referenceError)

//Você pode usar undefined para determinar se uma variável tem um valor. No código a seguir, não é atribuído um valor de entrada na variável e a declaração if será avaliada como verdadeira (true).
var input;
if(input === undefined){
  facaIsto();
} else {
  facaAquilo();
}
// O valor undefined se comporta como falso (false), quando usado em um contexto booleano. Por exemplo, o código a seguir executa a função myFunction devido o elemento myArray ser undefined:
var myArray = [];
if (!myArray[0]) myFunction(); 

// O valor undefined converte-se para NaN quando usado no contexto numérico.
var a;
a + 2;  // Avaliado como NaN

// Quando você avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos e como falso em contextos booleanos. Por exemplo:
var n = null;
console.log(n * 32); // a saída para o console será 0.

// Escopo de variavel
