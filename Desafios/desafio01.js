/**
 *  1. Crie uma função que receba um objeto no formato abaixo: 
 * 
 *      var cliente = {
 *          nome: "Maria das Graças Xuxa Meneguel",
 *          email: "Xuxa@666.com", 
 *          telefone: "+55 11 666-6566", 
 *          rua: "Rua dos baixinhos", 
 *          numero: 666,
 *          bairro: "Pinheiros", 
 *          cidade: "São Paulo", 
 *          uf: "SP"
 *         
 *       }
 *      e retorne uma string com o seguinte formato:
 *      O (a) cliente Maria das Graças Xuxa Meneguel mora em São Paulo, SP. 
 */

let cliente = {
              nome: "Maria das Graças Xuxa Meneguel",
              email: "Xuxa@666.com", 
              telefone: "+55 11 666-6566", 
              rua: "Rua dos baixinhos", 
              numero: 666,
              bairro: "Pinheiros", 
              cidade: "São Paulo", 
              uf: "SP"
}

function imprimeCliente(cliente){
    console.log(`O(a) cliente ${cliente.nome} mora em ${cliente.cidade}, ${cliente.uf}`);
}
imprimeCliente(cliente);