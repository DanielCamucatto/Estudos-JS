/*
    FUNCTION FACTORY OU FUNÇAO FáBRICA
        a função de fábrica é qualquer função que não seja um classe ou um construtor  que retorna um objeto (presumivelmente novo). em javascript qualquer função pode retornar um objeto. Quando isso acontece sem o NEW, é uma função de fábrica. 


 */


 function fabricar_curso(n, p){
     const desconto = 0.90;
     return{
         nome: n, 
         preco: (p * desconto).toFixed(2)
     }
 }
 console.log(fabricar_curso('programação em javascript', 27,99)); 
 console.log(fabricar_curso('criacão de APIs com Django Rest Framework'), 35.99)

 cursos = []; 

for(let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`Curso ${i + 1}, ${19.99 + i * 3}`));
}
console.log(cursos)