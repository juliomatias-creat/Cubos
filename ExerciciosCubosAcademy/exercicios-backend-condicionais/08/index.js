const idade = 66;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

// Montanha Russa Muito Assustadora

// não são permitidas pessoas:

// Menores de 12 anos
// Maiores de 65 anos
// Que possuam qualquer patologia cardíaca
// Menores de 150cm de altura

// Preços para quem pode brincar:
// 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// 20 reias, caso contrário
// Seu papel é imprimir na tela:

// Seu papel é imprimir na tela:

// ACESSO NEGADO caso a pessoa não possa brincar
// 10 reais caso esse seja o valor que a pessoa deve pagar para brincar
// 20 reais caso esse seja o valor que a pessoa deve pagar para brincar

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante || idade < 18) {
    console.log("10 reais")
} else {
    console.log("20 reais")
}

// Correção: A diferença é que dentro do else está o if e o else
// if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
//     console.log("ACESSO NEGADO");
// } else {
//     if (ehEstudante || idade < 18) {
//         console.log("10 reais");
//     } else {
//         console.log("20 reais");
//     }
// }

