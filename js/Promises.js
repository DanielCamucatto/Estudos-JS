/*
    PROMISES 
        são funções javaScript que não influenciam a linha de tempo da aplicação, são promessas que quando finalizadas os dados são apresentados

*/

let btn = document.querySelector('#btn')
let app = document.querySelector('#app')

// promise 
let promise =() =>{
    return new Promise((resolve, reject)=>{
        let github_user = document.querySelector('input[name=github_user').value;
        let ajax = new XMLHttpRequest(); 
        ajax.open('GET', `http://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4 ){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText))
                }else{
                    reject('Não foi encotrado nenhum usuário com esse nome')
                }
            }
        }
    })
}

// criando o botao 
btn.onclick = () =>{
    // limpar div 
    app.innerHTML = '';

    // criar span
    let spanNome = document.createElement('span');

    // criar a variavel nome
    let txtNome = '';

    //executando promises
    promise()
    .then((response)=>{
        // se o usuário tiver nome
        if(response['name'] !== null){
            txtNome = document.createTextNode(response['name']);

            let img = document.createElement('img'); 
            img.setAttribute('src', response['avatar_url'])
            img.setAttribute('alt',response['name']); 
            img.setAttribute('width', '45px'); 
            img.setAttribute('heigth', '45px')

            app.appendChild(img);

        }else{
            txtNome = document.createTextNode('O usuário não possui nome');
        }
        // add o texto ao span e o span à div
        spanNome.appendChild(txtNome); 
        app.appendChild(spanNome);
    })
    .catch((error) =>{
        txtNome =  document.createTextNode(error); 
        spanNome.appendChild(txtNome); 
        app.appendChild(spanNome);
    })
}