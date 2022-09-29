// Dominó
// Num jogo de dominó toda pedra tem dois números. Quando uma pedra tem o mesmo número dos dois lados, dizemos que essa pedra é uma bucha. Faça um programa que imprima "SIM" caso a pedra seja uma bucha e "NÃO" caso contrário.

const ladoA = 4;
const ladoB = 4;

//seu código aqui

const bucha = (ladoA === ladoB ? "sim" : "não");
console.log(bucha);

// if (ladoA === ladoB) {
//     console.log("Sim");
// } else {
//     console.log("Não");
// }
