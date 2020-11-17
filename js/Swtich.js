/*
    SWITCH 
        A condicional switch avalia uma expressão, combinando o valor da expressão para uma clausula CASE, e executa as instruções associadas ao CASE
    
    SINTAXE 
        var expressao = 2
        switch (expressão){
            case valor1
            // Instruções executadas quando o resultado da expressão for igual á valor1
            [break;]
            case valor2
            //Instruções executadas quando o resultado da expressão for igual á valor2
            [break;]
        }
        expressão
            Uma expressão que será comparada á cada cláusula case.
        case expressão
            Uma cláusula case que será comparada á expressão.
    DESCRICAO
        Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

        O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão (usando a comparação de igualdade estrita, ===) transferindo assim o controle para a cláusula encontrada e em seguida execudando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opicional default, que, se encontrado, tem o controle transferido à ele, executando suas instruções associadas. Se não ouver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula default é a última, mas não é algo obrigatório.

        A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada  e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch. 

*/

let paramentro = 2; 
switch(paramentro){
    case 1: 
        console.log('paramentro 1'); 
    break; 
    case 2: 
        console.log('paramentro 2'); 
    break; 
    default: 
        console.log('Default');
}