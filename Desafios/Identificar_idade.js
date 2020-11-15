let idade = prompt('Informe uma idade')

if (idade >= 0 && idade < 15 ){
    document.write('criança');
} else if (idade >= 15 && idade <= 30){
    document.write('Jovem');
}else if(idade > 30 && idade < 60){
    document.write('Adulto');
}else{
    document.write('Idoso');
}