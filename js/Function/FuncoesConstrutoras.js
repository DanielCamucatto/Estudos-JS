function Pessoa(n,s, raca = 'humano') {
    let altura = 0.30;
    let peso = 0.5; 
    let idade = 0; 
    let nome = n;
    let sexo = s;

    // atributo publico pode ser acessado fora da funcao construtora
    this.raca = raca;


    // metodo privado so conseguimos fazer uso dentro da funcão construtora
    let imprimir_dados = function () {
        console.log(`Nome: ${nome}, 
        'Idade:' ${idade},
        'Peso:' ${peso},
        'Altura:' ${altura},
        'Sexo:' ${sexo}
        `
         )
    }

    //metodo publico conseguimos acessar fora da funcão construtora
    this.fazer_aniversario = function(){
        idade += 1
        imprimir_dados()
    } 
    this.getIdade = function(){
        return idade;
    }
}
// instaciando um objeto
const angelina = new Pessoa('angelina', 'feminino')
console.log(angelina);

// instaciando um novo objeto 
const jaspion = new Pessoa('jaspion', 'masculino')
console.log(jaspion);
jaspion.fazer_aniversario()
console.log(jaspion.getIdade())

console.log(typeof (Pessoa))
console.log(typeof(jaspion));