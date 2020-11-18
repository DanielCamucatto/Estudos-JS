// entrada de dados
let name = prompt('Digite seu nome'); 
let alt = prompt('Insira sua altura em cm');
let peso = prompt('Insira seu peso');

// conversão das string  
alt = parseFloat(alt);
peso = parseFloat(peso);

alt /= 100; 
let M = peso / (alt * alt);  

function classificacao(){
if(M < 16){
    return ('Baixo peso, muito grave')
}else if(M > 16 && M <= 16.99){
    return ('Baixo peso, grave')
}else if(M >= 17 && M <= 18.49){
    return ('Baixo peso')
}else if(M >= 18.50 && M <= 24.99){
    return ('Peso normal')
}else if(M >= 25 && M <= 29.99){
    return ('Sobrepeso')
}else if(M >= 30 && M <= 34.99 ){
    return('Obesidade grau I')
}else if( M >= 35 && M <= 39.99){
    return ('Obesidade grau II')
}else if( M >= 40){
    return ('Obesidade grau III')
}
}

document.write(`${name} possui índice de massa corporal igual a ${M} sendo classificada como ${classificacao()}`)


// saida 
