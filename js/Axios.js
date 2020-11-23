/*
    AXIOS 
        é uma cliente HTTP baseado em promises que funciona em browser e node, sendo util tanto de front quanto em back end
*/

let btn = document.querySelector('#btn'); 
let app = document.querySelector('#app');

btn.onclick = ()=>{
    //limpa a div
    app.innerHTML = '';

    // criar o span
    let spanNome = document.createElement('span'); 
    //criar nome
    let txtNome = '';
    // recupear input 
    let github_user = document.querySelector('input[name=github_user').value;

    // axios 
    axios.get(`https://api.github.com/users/${github_user}`)
        .then((response)=>{
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);
                
                let img = document.createElement('img'); 
                img.setAttribute('src', response.data.avatar_url); 
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '50px'); 
                img.setAttribute('height', '50px');

                app.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuário não possui nome');
            }

            // add conteúdo na div
            spanNome.appendChild(txtNome); 
            app.appendChild(spanNome);
        })
        .catch((error)=>{
            txtNome.createTextNode('Não foi possível realizar a requisição');

            // add conteúdo na div
            spanNome.appendChild(txtNome); 
            app.appendChild(spanNome);
        })
}