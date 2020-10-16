/*
DESTRUCTURING
    é um operador que extrai dados de um array, objeto ou uma função complexa com um monte de paramentros 
    SINTAXE 
        var a, b, rest;
        [a,b] = [1,2];
        console.log(a);
        console.log(b);

        [a,b, ...rest] = [1,2,3,4,5]
        console.log(a); // 1
        console.log(b); // 2
        console.log(rest); //[3,4,5]

        ({a, b} = {a:1, b:2});
        console.log(a);
        console.log(b);

    DESCRICAO
        As expressões de objeto e matriz literais fornecem uma maneira fácil de criar pacotes ad hoc de dados .

        let x = [1,2,3,4,5];
        A atribuição via desestruturação usa sintaxe similar, mas no lado esquerdo da atribuição são definidos quais elementos devem ser extraídos da variável de origem.
        
        let x = [1,2,3,4,5];
        var [x, z] = x; 
        console.log(x);
        console.log(z);

*/

//destructuring de arrays
const numeros = [1,3,5,7];
const [num1, num2, num3, num4] = numeros;

console.log(num1); 
console.log(num2);
console.log(num3);
console.log(num4);

// descartando valores
const [n1,,n3,n4] = numeros;
console.log(n1);
console.log(n3);
console.log(n4);

// colocando valor default que sera usado caso não haja no container

const [nu1, nu2, nu3, nu4 = 34, nu5 = 99] = numeros;
console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);

//destructuring de objeto
const produto ={
    nome: 'Playstation4',
    preco: 5520.06
}
const {nome,preco} = produto;
console.log(`${nome} custa ${preco}`);
