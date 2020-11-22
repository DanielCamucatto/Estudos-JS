/*
    FUNÇOES NATIVAS PARA MANIPULAR STRINGS

*/
let name = 'Jorge Sant Ana'
// propriedade lenght = retorna a quantidade de caracteres da string 

console.log(name.length);

// charAt = metodo que retorna valor de indexação de uma string
console.log(name.charAt(7))

// indexOf = retorna a posição da primeira ocorrencia de um valor especifico dentro de uma string 
console.log(name.indexOf('g'));

// replace() = permite substituir textos dentro de uma string 
console.log(name.replace('Sant Ana', 'Santana'))

// substr() = um metodo que recorta uma parte da string 
console.log(name.substr(6,4))

// toLowerCase = coverte todos os caracteres de uma string em caixa baixa
console.log(name.toLowerCase());
// toUpperCase = converte todos os caracters de uma string em caixa alta
console.log(name.toUpperCase());

// trim() = remove os espaços em branco de uma estremidade de um string 
console.log(name.trim());