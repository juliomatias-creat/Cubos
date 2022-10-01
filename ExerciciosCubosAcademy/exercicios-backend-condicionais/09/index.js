const nota = 100;
let conceito = "";
// 9 a 10	A
// 8 a 8,9	B
// 6 a 7,9	C
// 4 a 5,9	D
// menos que 4	E

// Meus códigos: 

// 1°
// if (nota < 4) {
//     console.log("O estudando obteve conceito E ")
// } else {
//     if (nota >= 4 && nota <= 5.9) {
//         console.log("O estudando obteve conceito D");
//     } if (nota >= 6 && nota <= 7.9) {
//         console.log("O estudando obteve conceito C");
//     } if (nota >= 8 && nota <= 8.9) {
//         console.log("O estudando obteve conceito B");
//     } else (nota >= 9 && nota <= 10); {
//         console.log("O estudando obteve conceito A")
//     }
// }

// 2°
// if (nota >= 9 && nota <= 10) {
//     console.log("O estudando obteve conceito A ");
// } else if (nota >= 8 && nota <= 8.9) {
//     console.log("O estudando obteve conceito B");
// } else if (nota >= 6 && nota <= 7.9) {
//     console.log("O estudando obteve conceito C");
// } else if (nota >= 4 && nota <= 5.9) {
//     console.log("O estudando obteve conceito D");
// } else {
//     console.log("O estudando obteve conceito E");
// }

// Resolução do professor:


if (nota < 4) {         // Foi criada a variável let conceito = "" para atualizar seu valor vazio 
    conceito = "E";     // para cada conceito de acordo com o valor das notas 
} else if (nota < 6) {
    conceito = "D";
} else if (nota < 8) {
    conceito = "C";
} else if (nota < 9) {
    conceito = "B";
} else {
    conceito = "A";
}
console.log(`O estudando obteve conceito ${conceito}`);

// Percebi também que é possível fazer sem declarar  a variável let, neste caso.
// A diferença é que vai retornar any. 