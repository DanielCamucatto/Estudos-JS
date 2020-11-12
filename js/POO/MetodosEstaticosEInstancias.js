/*
    METODOS ESTATICOS E METODOS DE INSTANCIA 
*/

class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
    }
    get marca(){ // metodo de instancia
        return this._marca;
    }

    get modelo(){ // metodo de instancia
        return this._modelo;
    }
    set modelo(modelo){  // metodo de instancia
        this._modelo = modelo;
    }
    imprimir_dados(){ // metodo de instancia
        console.log(`${this.marca} ${this.modelo}`);
    }
    static retornar_marca(){ //metodo estatico 
        return 'Honda'
    }
}

// acessando a classe sem precisar instaciar um objeto
console.log(Carro.retornar_marca());  