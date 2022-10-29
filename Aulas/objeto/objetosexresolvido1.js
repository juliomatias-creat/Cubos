//Faça um programa que imprime na tela o belo texto abaixo, substituindo os dados pessoais pelos dados do objeto:

// "Julio Mtias tem 31 anos, 1,73m de altura, possui CNH e os seguintes apelidos: 
// -biito
// -Marcelo"

let textoCNH = "";

const minhaPessoa = {
    nome: "Julio Matias", 
    idade: 31,
    altura: 1.73,
    temCNH: true,
    apelidos: ["biito", "marcelo"]
};
    if (minhaPessoa.temCNH) {
        textoCNH = 'possui CNH';
    } else {
        "não possui CNH";
    }
    console.log(`${minhaPessoa.nome}, tem ${minhaPessoa.idade} anos, ${minhaPessoa.altura}m, 
    ${textoCNH}, e os seguintes apelidos: 
    -${minhaPessoa.apelidos[0]}
    -${minhaPessoa.apelidos[1]}.`);