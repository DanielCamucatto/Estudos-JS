/*
    OBEJETO E SUAS FUNÇÕES




*/

const { objectExpression } = require("jscodeshift");

const curso = {
    nome: 'Programação em Javascript', 
    horas: 25, 
    preco: 27.99
}
console.log(curso);
console.log(Object.keys(curso));
console.log(Object.values(curso));
console.log(Object.entries(curso));

//iteração de objetos
Object.entries(curso).forEach(par => {
    console.log(`${par[0]} : ${par[1]}`);
})

//iteração usando o destructuring

Object.entries(curso).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(curso, 'publicação', {
    enumerable: true, 
    writable: false,
    valeue: 07/12/2019
})
console.log(curso);
// object.freeze(curso); // congela o objeto tornando impossivel qualquer mudança 

const usuarios = [
    {nome: 'Clark Kent', empresa: 'Clarim Diário'},
    {nome: 'Bruce Wayne', empresa: 'Wayne Company'},
    {nome: 'Tony Stark', empresa: 'Stark Industries'}
]; 

console.log(usuarios);
console.table(usuarios);