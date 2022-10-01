// percorra este array, filtrando apenas os números pares e os armazenando em um novo array.

// 1- Percorrer o array analisando cada item
// 2-Verficar se o item é par.
// 3-Inserir no novo array
// 4-Olha o próximo número e repetir
// no final imprimir na tela

const original = [1, 4, 12, 21, 53, 88, 112, 114];
let pares = [];

for (let numero of original) {
    const restoDaDivisaoPor2 = numero % 2;   // if (numero % 2 === 0)
    if (restoDaDivisaoPor2 === 0) {
        // é par
       pares.push(numero); // Insere no array de pares
}

} console.log(pares);

// for (let numero of original) {
//        if (numero % 2 === 0) {
//         // é par
//        pares.push(numero); // Insere no array de pares
// }

// } console.log(pares);

// for (let i = 0; i < original.length; i++) {  //Com for de C
//     if (original[i] % 2 === 0) {
//         pares.push(original[i]);
//     }
// } console.log(pares);
 
//  O for de C traz o valor do índice e sua posição

//  O for of analisa cada elemento, salvando seu valor direto na variável let, mas não traz a sua posição.
 
//  Logo, apesar do fo of ser mais prático, ele pode não ser a melhor alternativa que dependerá do caso.

//  Se o problema quiser a posição, além do valor, o ideal é usar o forDeC 