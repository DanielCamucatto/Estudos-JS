/*
    INSTANCIANDO OBJETOS 


*/
class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome; 
        this._sobrenome = sobrenome;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`)
    }
    comer(){
        console.log(`${this.nome} está comendo...`)
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`)
    }
}

class Carro{
    constructor(modelo){
        this._marca = 'honda'; 
        this._modelo = modelo;
    }
    get marca(){
        return this.marca;
    }

    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }


    imprimir(){
        console.log(`${this.marca} ${this.modelo}`)
    }
}

// forma 1 - instanciando objetos
const curso = new Object(); 
curso.nome = 'Programação em JavaScript'; 
curso.preco = 27.99; 
console.log(curso);
curso['qtd_alunos'] = 999; 
console.log(curso);
// deletando atributos de forma dinamica
delete curso ['qtd_alunos']; 
delete curso ['preco'];
console.log(curso)

//Forma 2 - objeto literal 
const programa = {
    nome: 'Photoshop', 
    preco: 8999.99, 
    fabricante:{
        nome: 'Adobe', 
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima', 
            cidade: 'São Paulo'
        },
    filiais: [
        {cidade: 'Rio de Janeiro'}, 
        {cidade: 'Recife'}
    ]
    }
}
console.log(programa);
console.log(programa.nome);
console.log(programa.fabricante);
console.log(programa.fabricante.nome);
console.log(programa.fabricante.filiais.length);
console.log(programa['fabricante']['filiais']);

programa.nome = 'Playstation OS';
console.log(programa.nome);

delete programa.fabricante.filiais;
console.log(programa.fabricante.filiais);

// Forma 3 - Objeto Literal 
const pessoa = {};
pessoa.nome = 'Daniel'; 
console.log(pessoa);

// forma 4 - funçao construtora 
function Lampada(cor){
    this.cor = cor; 
}
const li = new Lampada('Branca'); 
console.log(li); 

// forma 5 - objeto a partir das classes 
const p1 = new Pessoa('Peter', 'Parker');
console.log(p1); 
console.log(typeof(p1)); 
console.log(p1.nome); // função get
console.log(p1.sobrenome); 

p1.nome = 'Alana'; // utilizando metodo set 
console.log(p1);

p1.falar("ola mundo"); // utilizando metodo da classe

const corola = new Carro('Corola'); 
corola.imprimir();

