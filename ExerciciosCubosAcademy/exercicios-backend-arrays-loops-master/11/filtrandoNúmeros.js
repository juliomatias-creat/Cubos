// números do array original que estejam entre 10 e 20, incluindo esses números, 
// ou que sejam maiores que 100.

// Entendendo o problema: O que é preciso fazer para achar a solução?

// Eu preciso filtrar apenas os itens desse array que estão entre 10 e 20 ou que sejam maiores do que 100
// Ou seja, filtrar os numeros >= 10 

// Por fim, pego eles e os insiro no novo array: 

// Código do Professor:

const original = [5, 7, 13, 17, 26, 34, 118, 245];

const filtrados = [];
for (let numero of original) {
    if ((numero >= 10 && numero <= 20) || numero > 100) {
        filtrados.push(numero);
    }
}
console.log(filtrados);

// Meu código:

// const original = [5, 7, 13, 17, 26, 34, 118, 245];
// const numerosMaioresEiguaisA10 = [];
//  for (let numero of original) {
//     if ( numero >= 10) {
//         numerosMaioresEiguaisA10.push(numero);
//     }
//  }  
//     console.log(numerosMaioresEiguaisA10);

// const original = [5, 7, 13, 17, 26, 34, 118, 245];
// const numerosMaioresEiguaisA10 = [];
//  for (let numero of original) {
//     if ( numero >= 10 || numero <= 20 || numero > 100) {
//         numerosMaioresEiguaisA10.push(numero);
//     }
//  }  
//     console.log(numerosMaioresEiguaisA10);

// Todos os dois raciocícinios estão equivocados poisnão satisfazem a condição