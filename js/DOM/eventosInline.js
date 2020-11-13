function showAlert(){
    alert('Você clicou em mim')
}

function changeText(ev){
    ev.innerHTML = 'eu estou avisando ...'
}

function changeColor(){
    let color = [   
        'green', 
        'red', 
        'magenda', 
        'purple', 
        'blue', 
        'yellow', 
        'black', 
        'orange', 
    ];

    const number = Math.floor((Math.random() * color.length) + 1);
    document.bgColor = color[number];
}

function readText(input){
    let span = document.getElementById('text')
    span.innerHTML = input.value;
}