// Crie um novo array a partir do primeiro que contenha apenas os nomes que começam com a letra "A" ou "a". 
// Ao final, imprima a variável que guarda o array.

// percorrer array procurando "A" ou "a"
// Se encontrar, inseri-las no novo array
// imprima a variável que guarda o array.


// const nomes = ["Ana", "Joana", "Carlos", "amanda"];
// let novoArray = [];

//     for (let nome of nomes) {
//         if (nome[0] === "A"|| nome[0] === "a") {
//         novoArray.push(nome);
//     }
    
// } 

// console.log(novoArray);

const nomes = ["Joana", "Adalberto", "Carlos", "amanda", "Pedro", "Araújo"];

let nomesComecadosComA = [];

    for (let nome of nomes) {
        const inicial = nome[0];
        if (inicial === "A"|| inicial === "a") {
            nomesComecadosComA.push(nome);
    }
    
} 

console.log(nomesComecadosComA);



    