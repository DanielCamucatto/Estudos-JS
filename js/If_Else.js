let nota = prompt('Digite a nota do aluno/a'); 
let faltas = prompt('Digite a quantidade faltas do aluno/a')
const media = 7; 
const  faltas_maximas = 15; 

if( nota >= media && faltas <= faltas_maximas){
    document.write('aprovado')
}else{
    document.write('reprovado')
}