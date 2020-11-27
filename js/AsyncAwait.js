const { rejects } = require("assert");
const { response } = require("express");
const { async } = require("rxjs");

/**
 * Async e Await 
 
 */
 const promise = () => new Promise((resolve, reject) => {
    let value = Math.floor(Math.random()* 10)
    setInterval(() =>{
        if(value % 2 == 0){
            resolve(`O valor ${value} é par`)
        }else{
            reject(`O valor ${value} é impar`)
        }
    },2000)
 });

 async function executarPromise(){
     try{
         const response = await promise();
         console.log(response);
     }catch(error){
         console.log(error)
     }
 }
 executarPromise();