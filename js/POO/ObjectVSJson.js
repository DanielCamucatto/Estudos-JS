/**
    OBJECT VS JSON

    JSON - Javascript object notation 
 */

 const curso = {
     nome: 'Programação em Javascript',
     Horas: 27, 
     Preco() {
         return this.Horas * 0.67 
     }
 }
console.log(curso); 
console.log(typeof(curso));
console.log(curso.Preco());

// convertendo o objeto javascript para JSON
const json = JSON.stringify(curso); 
console.log(json); 
console.log(typeof(curso))

//convertendo de Json para objeto javascript 
const obj = JSON.parse(json); 
console.log(obj); 
console.log(typeof(obj));