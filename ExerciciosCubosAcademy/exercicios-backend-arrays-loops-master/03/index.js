const numeros = [54, 22, 14, 87, 1, 6, 10, 284];

// Faça um programa que verifica se existe o número 10 nesse array. Caso exista, 
// informa a posição (índice) em que o número 10 se encontra. Caso não exista, deverá ser impresso -1.

let resposta = -1;

for (let i =0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 10) {
        resposta = i;
        break;
    }
}
console.log(resposta);

