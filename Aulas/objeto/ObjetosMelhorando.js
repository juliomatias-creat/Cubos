// O código anterior tinha um certo problema: os apelidos não estavam companhando dinâmicamente as 
// possíveis "edições", ou seja: caso se tirasse ou acrescentasse um apelido, teríramos um problema.
// Então agora vamos consertar isso com um for...

const pessoa = {
    nome: "julio",
    idade: 31,
    altura: 1.73,
    temCnh: true,
    apelidos: ["biito", "marcelo","baytes", "abonitado"]
}; 

let textoCnh = "";

if (pessoa.temCnh) {
    textoCnh = "possui cnh";
} else {
    "Não possui Cnh"
}
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCnh} e os seguintes apelidos:`);
 for (let apelido of pessoa.apelidos) {
    console.log(`-${apelido}`);
 }