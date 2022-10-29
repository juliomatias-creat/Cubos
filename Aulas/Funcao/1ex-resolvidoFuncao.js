// 1- Declare uma variável que armazena um objeto contendo dados de uma pessoa
const pessoaObj = {
    nome: 'Julio',
    idade: 32,
    estatura: 1.73,
    ocupacao: 'estudante'
};
 
// Faca uma funcao que tem um parametro e nao retorna valores, que imprima 
// a apresentacao de uma pessoa seguindo o modelo abaixo:
// "Olá, meu nome é Julio, sou um jovem de 31 anos, 1.74m e sou estudante"

function apresentacao(pessoa) {
console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, 
${pessoa.estatura}m e sou ${pessoa.ocupacao}`);
};
apresentacao(pessoaObj);

//console.log(qualquerCoisa); 