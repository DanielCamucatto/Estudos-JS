/**
 * Crie uma função que receba um valor em anos de experiencia de um funcionario e retorne o nivel de experiencia deste conforme: 
 * de 0 a 2 anos : junior 
 * de 3 a 5 anos: pleno
 * acima de 6 anos: senior 
 */

const { assignmentPattern } = require("jscodeshift");


//metodo 1
 function nivelExeperiencia(anoExperiencia){
    if( anoExperiencia >= 0 && anoExperiencia <= 2 ){
        console.log('Júnior')
    } if(anoExperiencia >= 3 && anoExperiencia <= 5){
        console.log('Pleno')
    }else if(anoExperiencia >= 6){
        console.log('Senior')
    }
 }
 //nivelExeperiencia(4);

 //metodo
function nivelExeperiencia2(anoExperiencia){
    let nivel = anoExperiencia >= 0 && anoExperiencia <= 2 ? 'Junior' : 
                anoExperiencia >= 3 && anoExperiencia <= 5 ? 'Pleno' : 
                anoExperiencia >= 6 ? 'Senior' : false;

    return nivel;

}
nivelExeperiencia(1);


