// O pensei desse jeito abaixo. Funcionou? Sim!

//const saldo = 1;
//if (saldo > 1) {
//    console.log(` você tem ${saldo} reais`);
//} else if (saldo <= 1) {
//    console.log(` você tem ${saldo} real`);
//}

// professor:

// if (saldo === 1) {
//     console.log(` Você tem ${saldo} real`);
// } else {
//     console.log(` Você tem ${saldo} reais`);
// }

const saldo = 1;

const unidade = (saldo === 1 ? "real" : "reais");

console.log(` Você tem ${saldo} ${unidade}`);

// Esse ternário é equivalente a forma abaixo:

// if (saldo === 1) {
//     unidade = "real"
// } else {
//     unidade = "reais"
// }

