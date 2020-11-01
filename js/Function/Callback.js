/*CALLBACK 
    Callback é uma função passada como paramentro para outra função. Na programação assincrona callbacks são passados como funcoes para serem executadas após um certo evento. 


*/

const cursos = [
    'programação para leigo', 
    'Algoritimos e logica de programação',
    'programação em C', 
    'programação em java', 
    'programação em python', 
    'banco de dados', 
    'programação web', 
    'programacão com Django'
]
function apresentar (curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}
 cursos.forEach(apresentar) // aqui esta acontecendo o callBack

 // usando lambda 
 cursos.forEach(function(cursos,indice){
     console.log(`${indice + 1} - ${cursos + 1}`)
 })

 // arrow functions
 cursos.forEach((cursos, indice) =>{
     console.log(`${indice + 1} - ${cursos + 1}`)
 })

 let precos = [
     23.55,
     12.33,
     56.77,
     98.67,
     94.45,
     1.45
 ]
 let menores=[]

for(let p in precos){
    if(precos[p]< 50){
        menores.push(precos[p])
    }
}
console.log(menores)

for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}
console.log(menores);

menores = precos.filter(function (precos) {
    return precos < 50;
})
console.log(menores);

menores = precos.filter(precos => precos < 50)

console.log(menores);