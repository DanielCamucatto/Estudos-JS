/*
    SOBRESCRITA DE METODO E POLIMORFISMO

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
        this._registro = registro;   
    }
    //Sobreescrita de método
    imprimir_dados(){
        super.imprimir_dados(); 
        console.log(`Registro: ${this.registro} Salário: ${this.salary}`)
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

const dev = new Funcao('developer', 5987.44); 
const f1 = new Employee('Peter', 'Parker','homem@aranha.com', '123.456.789',dev,'123456'); 
f1.imprimir_dados();