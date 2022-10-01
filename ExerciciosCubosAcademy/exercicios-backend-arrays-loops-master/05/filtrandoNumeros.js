// percorra este array, filtrando apenas os números pares e os armazenando em um novo array.

// 1- Percorrer o array analisando cada item
// 2-Verficar se o item é par.
// 3-Inserir no novo array
// 4-Olha o próximo número e repetir
// no final imprimir na tela

const original = [1, 4, 12, 21, 53, 88, 112, 114];
let pares = [];

for (let numero of original) {
    const restoDaDivisaoPor2 = numero % 2;
    if (restoDaDivisaoPor2 === 0) {
        // é par
       pares.push(numero); // Insere no array de pares
}

} console.log(pares);