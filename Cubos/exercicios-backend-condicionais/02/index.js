// Par ou ímpar
// Duas pessoas estão jogando par ou ímpar. Você deve imprimir "par" caso a vencedora seja a pessoa que escolheu par e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar.

const jogada1 = 4;
const jogada2 = 3;

//seu código aqui

const somaJogadas = jogada1 + jogada2;
if (somaJogadas % 2 === 0) {
    console.log("par");
} else {
    console.log("ímpar");
}

// const somaJogadas = (jogada1 + jogada2) % 2;

// if (somaJogadas != 0) {
//     console.log(" ímpar");
// } else {
//     console.log(" Par");
// }