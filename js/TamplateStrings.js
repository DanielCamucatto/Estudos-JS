/*TEMPLATE STRINGS
    Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.

    Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.
SINTAXE
    `corpo do texto`
    `texto linha 1
    texto linha 2`

    `texto string ${expression} texto string`
    tag `texto string ${expression} texto string
DESCRIÇĀO
    Template strings são envolvidas por acentos graves ``, elas podem possuir placeholders que são indicados com a expressão (${expression}). As expressões nos placeholders e o texto em volta delas são passadas para uma função que apenas concatena as partes em uma string unica 
 #Tagged template string
    Se existir uma função antes da template string ela recebe o nome de Tagged tamplate string 
        (função tag exemplo)
    A expressão tag é uma geralmente um função que é chamada pela tamplate string processada, que pode ser manipulada antes de ser produzida 


*/
 //concatenação
 const idade = 30;
 const nome = 'daniel'; 
 console.log(nome + ' tem ' + idade + ' anos ');

 //Template strings
 console.log(`${nome} tem ${idade} anos`);

 // passando expressões para template string ou interpolação de expressões
 let name = 'Debora';
 let age = 10;

 function soma_3(age){
     return age + 3;
 }
 console.log(`${name} tem ${soma_3(age)} anos`);
let a = 5;
let b = 10;
console.log(`Quinze é ${a+b} e não ${2*a+b}`); 
 //Strings multlinhas 
 console.log(`texto linha 1
 texto linha2`);

// Tagged template strings
/* a forma mais avançada de template string são string com marcações pu tags com eles existe a possibilidade de modificar a saida dps template strings usando função. O primeiro argumento contem um array de literais, do segundo em diante cada argumento contem valores previamente processados (cooked) pelas expressões de substituição, no final a funcão retorna a string manipulada   
*/
var c = 5;
var d = 10;
function tag(string, ...values){
    console.log(string[0]);
    console.log(string[1]);
    console.log(values[0]);
    console.log(values[1]);
    return 'baziga';
}
tag (`Hello ${ c + d} word ${ c * d }`);


//Strings Raw
/*A propriedade especial raw, disponível no primeiro argumento da função da tagged template string acima, permite o acesso as strings de maneira pura (raw) exatamente como elas foram especificadas:*/

function tag(strings, ...values) {
    return strings.raw[0];
  }
  
  tag`string text line 1 \n string text line 2`;

  /*
  Adicionalmente, o método String.raw() permite a criação de strings cruas, exatamente como as template functions e as concatenações deveram criar.
  */
 String.raw`Hi\n${2+3}!`; // "Hi\\n5!"