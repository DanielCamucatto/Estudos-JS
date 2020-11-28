/*
    FUNCAO PARA MANIPULACAO DE DATAS
        para manipular datas em javaScript é necessario instanciar um novo objeto 
*/

const data = new Date(); // instanciando uma nova data 

// console.log(data.getDate()); // pega o dia baseado no sistema operacional 
// console.log(data.getMonth() + 1) // pega o mês atual 
// console.log(data.getFullYear()); // pega o ano atual 
// console.log(data.toString()); // converte a data formato string 
// data.setDate(data.getDate()+ 1); // add um dia a mais no mes 
// console.log(data.getDate());
// data.setDate(data.getDate() - 1); // remove um dia a mais no mes
// console.log(data.getDate());
// data.setMonth(data.getMonth() + 1); // add um mes a mais no ano
// console.log(data.getMonth() );
// data.setMonth(data.getMonth() - 1); // remove um mes a mais no ano
// console.log(data.getMonth() );
// data.setFullYear(data.getFullYear() + 1) // add um ano 
// console.log(data.getFullYear()); 
// data.setFullYear(data.getFullYear() - 1) // remove um ano 
// console.log(data.getFullYear()); 

// calculando duas datas diferentes 

// criando datas 15/01/2020
let data1 = new Date(2020, 0, 15);

// criando datas 23/02/2020
let data2 = new Date(2020, 1 , 23);

// console.log(data1.toString()); 
// console.log(data2.toString());

// converter datas para que possa ser calculado 
data1.getTime(); // transforma as datas em milessegundos desde janeiro de 1970 
data2.getTime(); // transforma as datas em milessegundos desde janeiro de 1970

// encontrar a qtde de milissegundos entre data1 e data2 
console.log(Math.abs( data1.getTime() - data2.getTime()));// Math.abs() retorna um vaor absoluto de um numero

// 1 dia tem 24h, cada hora tem 60 min, cada min 60s e cada segundo tem 1000 milsegunds
// quantos miliessegundos existem em um dia?
console.log('1 dia tem: ' + (1*24*60*60*1000) + ' Milissegundos');

// divisão da diferença do milessegundos 
let milessegundos_diferenca = Math.abs(data1.getTime() - data2.getTime());

let milessegundos_dia = (1*24*60*60*100);
console.log(Math.ceil( milessegundos_diferenca / milessegundos_dia)); // Math.ceil() arredonda os valores para cima