/*
    HERANÇA 

*/

class Funcao{
    constructor(description, salary){
        this._description = description; 
        this._salary = salary; 
    }
    get description(){
        return this.description; 
    }
    set description(description){
        this.description = this.description; 
    }
    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = this.salary;
    }
} 

class Person {
    constructor(name, lastname, email, cpf){
        this.name = name; 
        this.lastname = lastname; 
        this.email = email; 
        this.cpf = cpf;
    }

    get name(){
        return this.name;
    }
    set name(name){
        this._name = name; 
    }
    get lastname(){
        return this.lastname; 
    }
    set lastname(lastname){
        this._lastname = lastname;
    }
    get email(){
        return this.email;
    }
    set email(email){
        this._email = email; 
    }
    get cpf(){
        return this.cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
    // metodos extras 
    get nome_completo(){
        return this_name + ' ' + this_lastname;
    }
    set nome_completo(nome_completo){
        //transforma a string em um array onde cada elemento do array será as partes da string separadas por espaço
        nome_completo = nome_completo.split(' '); 
        
        // remove e retorna o elemento da posição 0 do Array
        this._name = nome_completo.shift();
        //Junta os elementos do array em uma string separando cada elemento por espaço 
        this._lastname = nome_completo.join(' ');
    }

    imprimir_dados(){
        console.log(`${this._name} ${this._lastname}`);
    }
}

class Employee extends Person{
    constructor(name, lastname, email, cpf, funcao, registro){
        super(name, lastname, email, cpf)
        this._funcao = funcao;
        this._registro = registro
    }

    get funcao(){
        return this.funcao;
    }
    set funcao(funcao){
        this._funcao = funcao;
    }
    get registro(){
        return this.registro; 
    }
    set registro(registro){
        this.registro = registro;   
    }
}

class Client extends Person{
    constructor(name, lastname, email, cpf, renda){
    super(name, lastname, email, cpf)
    this._renda = renda;
    }

    get renda(){
        return this.renda;
    }
    set renda(renda){
        this._renda = renda;
    }
}

// let c1 = new Client('Peter', 'Parker', 'homem@aranha.com', '123.456.789', 500);
// console.log(c1);
// let c2 = new Client('Brunce', 'Wayne', 'i@mbatman.com','789.456.123', 10000000000000);
// console.log(c2);

// c2.imprimir_dados();

const developer = new Funcao ('Developer', 4899.54);
const suport  = new Funcao( 'suport', 2799.34); 

console.log(developer); 
console.log(suport); 

const f1 = new Employee('Daniel', 'Santana', 'cara@legal.com', '456.123.789', developer,'f00');
const f2 = new Employee('Lois', 'Lane', 'clarim@diario.com', '789.123.456', suport, ' Bar');

console.log(f1); 
console.log(f2);