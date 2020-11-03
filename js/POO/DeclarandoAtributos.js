/*
    Declarando Atributos
        Atributos são caracteristicas dos objetos, em javascript para declarar atributos em uma classe precisamos de um metodo construtor. 
        Declaramos os atributos de um classe dentro do metodo construtor 
         

*/

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome; 
        this.sobrenome = sobrenome;
    }
}

class Carro{
    constructor(modelo){
        this.marca = 'Honda'; 
        this.modelo = modelo; 
    }
}