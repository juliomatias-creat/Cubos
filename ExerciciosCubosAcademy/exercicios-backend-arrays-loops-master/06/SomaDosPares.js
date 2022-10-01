
//  percorra este array e calcule a soma dos números pares presentes nesse array.

// 1- Percorrer o array analisando cada item
// 2-Verficar se o item é par.
// 3-Criar uma variável pra armazenar a soma iniciando em 0
// Reatribuir a somaPares a adição do elemento par encontrado com o antigo valor de somaPares.
// Esse antigo valor de somaPares não muda até um novo elemento par ser encontrado, ou seja. somaPares só
// é atualizado quando o elemento par for encontrado. Daí ele recebe seu valor com o valor do elemento.
// O loop volta a se repetir enquanto a condição for true.

const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 14];
let somaPares = 0;

// for ( let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         somaPares += numeros[i];
//     }
// }
// console.log(soma);

for (let numero of numeros) {
    if (numero % 2 === 0) {  // é par
        somaPares += numero;
    }
} 

 console.log(somaPares);