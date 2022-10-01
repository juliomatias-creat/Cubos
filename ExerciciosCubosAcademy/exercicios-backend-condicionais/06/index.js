const alturaEmCm = 180;

// //seu código aqui

// // CORREÇÃO: PROF:

if (alturaEmCm < 180) {
    console.log("REPROVADO");
} else if (alturaEmCm <= 185) {
    console.log("LÍBERO");
} else if (alturaEmCm <= 195) {
    console.log("PONTEIRO");
} else if (alturaEmCm <= 205) {
    console.log("OPOSTO");
} else {
    console.log("CENTRAL");
}
//  Meu código: (Funciona, mas está em desacordo com o problema que pede para retornar REPROVADO
//  se a altura for < 180 e não APROVADO  se a altura >= 180).

// if (alturaEmCm >= 180) {
//     //console.log("APROVADO");
//     if (alturaEmCm < 186) {
//         console.log("LÍBERO");
//     } else if (alturaEmCm >= 186 && alturaEmCm < 196) {
//         console.log("PONTEIRO");
//     } else if (alturaEmCm >= 196 && alturaEmCm < 206) {
//         console.log("OPOSTO");
//     } else if (alturaEmCm > 205) {
//         console.log("central");
//     }
// } else {
//     ("REPROVADO");
// }

// Caso o jogador tenha menos de 180cm, o programa deve imprimir REPROVADO
// Caso tenha entre 180cm e 185cm, o programa deve imprimir LÍBERO
// Caso tenha entre 186cm e 195cm, o programa deve imprimir PONTEIRO
// Caso tenha entre 196cm e 205cm, o programa deve imprimir OPOSTO
// Caso tenha mais de 205cm, o programa deve imprimir CENTRAL

// MINHA SEGUNDA FORMA DE FAZER: (Apenas um pouco diferente,
//  o prof usa <= e o último núero de cada intervalo )

// if (alturaEmCm < 180) {
//     console.log("REPROVADO");
// } else if (alturaEmCm < 186) {
//     console.log("LÍBERO");
// } else if (alturaEmCm < 196) {
//     console.log("PONTEIRO");
// } else if (alturaEmCm < 206) {
//     console.log("OPOSTO");
// } else {
//     console.log("CENTRAL");
// }

