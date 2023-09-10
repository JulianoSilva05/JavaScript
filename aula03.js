/**
 * Dicas importantes para o curso - Curso de Javascript Moderno 
 * Diferença entre LET, VAR e CONST em Javascript 
 */
"use strict"
// if(true){
//     //var nome="Juliano"/**var são içadas (hoisted) para o topo de seu escopo, tornando-as acessíveis em toda a função ou bloco. */
//     let nome="Juliano"/**let e explica que ele limita o acesso à variável ao bloco em que está definido, impedindo o acesso de fora desse bloco. */
//     const pi=3.14 /**const são usadas para criar constantes cujos valores não podem ser alterados após a inicialização. */
// }

// console.log(nome)
// const nome="Fernando"
// function teste(){
    
//     if (true){
//         let nome="Juliano"
//         console.log("Dentro do IF do teste: " + nome)
//     }
//     console.log("Dentro do teste: " + nome)
// }
// teste()
// console.log("Fora do teste:" + nome)

let nome = "Juliano"
nome = "Fernando"
nome = 10 /**Java realiza o Casting (Conversão de tipos de variaveis) de forma automática */

const curso="JavaScript"
curso = "Senai"

console.log(nome)
console.log(curso)
