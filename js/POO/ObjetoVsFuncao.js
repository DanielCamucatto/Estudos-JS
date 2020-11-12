/*
    OBJETOS VS FUNCAO

*/

// criando objeto através de uma factory function 
// const pessoa1 = (name, lastname) => {
//     return {
//         andar:() => console.log(`${name}  ${lastname} está andando...`)
//     }
// }

// const p1 = pessoa1('Bruce', 'Banner'); 
// console.log(p1)
// console.log(typeof(p1)); 
// p1.andar();

// criando objeto através de uma funcao construtora 

function Pessoa2(name, lastname){
    this.name = name; 
    this.lastname = lastname; 

    this.andar = function(){
        console.log(`${this.name} ${this.lastname} está andando`)
    }
} 

const p2 = new Pessoa2('Miles', 'Morales'); 
console.log(p2); 
console.log(typeof(p2));
p2.andar();

//Criando objeto através de uma classe 
class Pessoa3{
    constructor( name, lastname){
        this.name = name; 
        this.lastname = lastname
    }
     andar3(){
         console.log(`${this.name} ${this.lastname} está andando ...`)
     }
}

const p3 = new Pessoa3 ('Selinna', 'Kyle'); 
console.log(p3); 
console.log(typeof(p3)); 
p3.andar3()
