/*
    AJAX - (XMLHTTPREQUEST) - Asynchronous and xml 


*/
// pegando o button no html
let btn = document.querySelector('#btn'); 
// pegando o valor name do input 
let input = document.querySelector('input[name=github_user]'); 
// pegando a div para renderizacão do AJAX
let app = document.querySelector('#app');

// colocar um evento no btn para quado for clicado buscar o user na api do github
btn.onclick = function(){
    // limpar o conteudo da div
   app.innerHTML = ''; 
   
    // criando uma variavel AJAX
    let github_user = new XMLHttpRequest(); // instanciando objeto ajax 
    
    // abrir uma conexao 
    github_user.open('GET',`https://api.github.com/users/${input.value}`);

    //enviar requisicao 
    github_user.send(null);

    // lendo as informações da requisição 
    github_user.onreadystatechange = function(){
        // criar elemento span 
        let spanNone = document.createElement('span')

        // criar a variavel name
        let txtName = ''; 

        if(github_user.readyState === 4 ){
            if(github_user.status === 200){
                //transformar   os dados JSON em array
                usuario = JSON.parse(github_user.responseText);
                //se usuario possuir nome
                if(usuario['name'] !== null){
                    txtName = document.createTextNode(usuario['name']);

                    let img = document.createElement('img'); 
                     img.setAttribute('src',usuario['avatar_url']); 
                     img.setAttribute('alt', usuario['name']); 
                     img.setAttribute('width', '45px');
                     img.setAttribute('height','45px');
                     app.appendChild(img);
                }else{
                    txtName = document.createTextNode(`O usuário ${input.value} não tem nome`)
                }
                // add o texto ao span e o span a div
                spanNone.appendChild(txtName); 
                app.appendChild(spanNone);

                // limpar o input 
                input.value = '';
            }else{
                txtName = document.createTextNode(`Não encontramos o usuário ${input.value}`); 
                spanNone.appendChild(txtName); 
                app.appendChild(spanNone);
            }
        }
    }
}