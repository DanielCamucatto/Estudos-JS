/*
    As configurações de estilos via javascript seguem os mesmos conceitos e atributos utilizados em CSS

*/

let boxElement = document.querySelector('.box'); // selecionando o class = 'box'

// estilizando a class 'box'
boxElement.style.width = '200px'; 
boxElement.style.height = '200px'; 
boxElement.style.backgroundColor = 'green'

let btns = document.querySelectorAll('button');

for( let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        document.querySelector('body').style.backgroundColor = this.style.backgroundColor;
    }
}