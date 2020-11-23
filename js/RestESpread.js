/*
    OPERADORES REST E SPREAD
        Eles permitem trabalhar com multiplos parametros em funcão, sendo que o REST permite que uma funcão receba um numero indefinido de paramentros, enquanto o SPREAD permite definir um número indefinido de paramentro para uma funcao, array ou objeto 
 */

 function total(...precos){
    let total = 0;
    precos.forEach(p => total += p) 
    return total
 }
 console.log(total(23,44, 22, 3.45,5.56).toFixed(2)); 
 console.log(total(23, 67)); 
 console.log(total(3,6,77));

 // exemplo com array de strings
 let frutas1 = ['laranjas', 'bananas', 'jaca']; 
 let frutas2 = ['maça', 'manga', 'limão']; 

 let compras = [...frutas1, ...frutas2]; 
 console.log(compras);

 let alunos = ['Chição', 'Zulo', 'Palhacinho']; 
 let novoAluno = 'Billy'; 
 let todosAlunos = [...alunos,novoAluno];
 console.log(todosAlunos);