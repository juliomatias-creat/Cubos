// Faça um programa que calcula e imrime na tela a soma dos itens de uma array
const numeros = [0, 5, 3, 69, 45, 18, 13, 2]; //Tamanho 8
 
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    //Será executado para i de 0 até 7 | 8 não será mais executado
    soma = soma + numeros[i];
    // soma += numeros[i]
}

console.log(soma);

// while (i < numerosPares.length) {
//     console.log(numerosPares[i]);
//     i++
// }
console.log(soma = soma + i);