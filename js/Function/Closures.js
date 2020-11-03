/*
    FUNÇOES CLOSURES
        closure é o escopo que é criando quando uma variável é declarada
        dado que esse escopo permite a função acessar e manipular váriaveis declaradas externas a função 

 */
// contexto lexico em javascript
let variavel = 'global'; //pode ser acessada globalmente 

function imprimir() {
    console.log(variavel)
}
function outra(){
    let variavel = 'local'; //pode ser acessada somente no bloco/localmente
    imprimir();
}
outra();

//novo exemplo
let espaco = 'global'; 

function externa (){
    let espaco = 'local'; 

    function interna(){
        return espaco;
    }
    return espaco
}

let executa = externa(); 
console.log(executa())