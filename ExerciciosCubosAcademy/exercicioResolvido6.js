// Faça um programa que imprima todos os números pares, entre 1 e 50

//  Minhas respostas:

// for (let i = 50; i > 0; i -= 2) { // Imprime em ordem decrescente, não é o ideal...
//                                   // O interessante do for de c é a variável,       
// console.log(i);                   // a condição e o contador ficarem dentro da sua própria estrutura.
// }

// let i = 50;   //Funciona exatamente igual a forma anterior...

// while (i > 0) {
// console.log(i);
// i -= 2;
// }

// let numeros = 0;   Aqui caímos em um loop infinito pois sempre o novo numero acrescido de 2 será >= 0

// while (numeros >= 0) {
//     console.log(numeros)
//     numeros += 2;
// }

// Resolução do professor, da forma ideal pois agora a impressão está em ordem crescente

let numero = 2;

while (numero <= 50) {
    console.log(numero);
    numero += 2;
}
