/*
TRY CATCH
    As declarações try...catch são blocos de declarações para testar (try) e especifica uma resposta, caso uma exceção seja lançada

SINTAXE 
    try {
   try_statements
}
[catch (exception_var_1 if condition_1) {
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]
DESCRIÇĀO
    A declaração TRY é um bloco que contem uma ou mais declarações e ao menos uma declaração CATCH ou uma clausula FINALLY, ou ambas, 
        1.Try
        2.Catch
        3.Finally
    Uma clausula CATCH contem declarações que especificam o que fazer caso uma exceção aconteça, caso uma exceção seja lançada no bloco TRY ou dentro dele dentro de uma função o controle muda imediatamente para o bloco CATCH . 
    A clausula FINALLY é executada apos a execução do bloco TRY, ela é sempre executada, independente se uma exceção for lançada ou capturada. 
    é possivel aninhar varios TRY e CATCH
*/

//lancando erro
function dividir (num1 , num2){
    if (num1 === 0  || num2 === 0){
        throw("os valores devem ser positivos") // vai dar erro
    }else{
        return num1 / num2;
    }
}
try{
    let ret = dividir(8 ,0);
    console.log(ret);
}catch(e){ //e de error
    console.log('Não foi possivel dividir');
}finally{
    console.log('vamos continuar...')
}