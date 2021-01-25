function mudaBackground(){
    document.getElementById('input_form').style.backgroundColor = 'yellow'; 
}
function recuperaValor(){
    let form = document.getElementById('input_form').value.length;
    console.log(form); 
    if(form <= 3){
        document.getElementById('input_form').style.backgroundColor = 'red';
    }else{
        document.getElementById('input_form').style.backgroundColor = 'green'; 
    }
}

// solucao do professor 
function acionaCampo() {
    document.getElementById('campo').style.background = "yellow" }
    function validaCampo() {
    var valorCampo = document.getElementById('campo').value
    if(valorCampo.length < 3) { document.getElementById('campo').style.background = "red"
    } else {
    document.getElementById('campo').style.background = "green"
    } }