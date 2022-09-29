// Atençã, sem chaves só é possível escrever uma linha de código, 
// já com chaves, podemos escrever inifitas linhas, desde que esteja dentro do escopo das chaves. 

const idade = 29;

if (idade >= 18)
    console.log(" É maior de idade");
else
    console.log("É menor de idade");
console.log("Então não pode beber"); // Essa linha é idepedente da condição else, nesse caso.
// Aqui ocorre um bug, pois se a pessoa é maior de 18 ela pode beber. 


console.log(" fim do código");




