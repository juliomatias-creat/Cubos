const numeros = [8, 11, 4, 1];

// faça um programa que calcule a maior diferença entre dois números desse array.

// Para isso é preciso antes ter a informação do maior e do menor numero desse Array. 

// Depois basta subtrair o menor do maior

let maiorNumeroAteAgora = numeros[0];

let menorNumeroAteagora = numeros[0];

let maiorDiferença = 0;

for (let item of numeros) {
    
    if (item > maiorNumeroAteAgora) {
        maiorNumeroAteAgora = item;
    } else if (item < menorNumeroAteagora) {
        menorNumeroAteagora = item;
    }
}
// console.log(maiorNumeroAteAgora - menorNumeroAteagora);

maiorDiferença = maiorNumeroAteAgora - menorNumeroAteagora;

console.log(maiorDiferença);
