// Faca uma funcao que tem um parametro chamado idade e que determina a faixa etaria
// de uma pessoa a partir dessa idade.
 
// 21 anos ou menos => jovem;
// 22 a 65 anos => adulto;
// 66 ou mais anos => idoso.

// sua funcao devera retorna uma string que informa se a pessoa e jovem, adulto(a),
// ou idoso(a).

function determinaFaixaEtaria(idade) {
    
    if(idade <= 21) {
        return "jovem";
    } // else if(idade <= 65)
        else if(idade < 66) {
        return "adulto(a)";
    } else {
        return 'idoso(a)' ;   
    }
} 

function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`sou ${pessoa.nome}, sou um jovem de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
    } else if(pessoa.idade < 66) {
        console.log(`sou ${pessoa.nome}, sou um adulto de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
    } else {
        console.log(`sou ${pessoa.nome}, sou um idoso de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
    }
}
const pessoa1 = {
    nome: 'Julio',
    idade: 18,
    profissao: 'professor'
};

apresentar(pessoa1);













// const valorRetornoDaFuncao = determinaFaixaEtaria(70);
// console.log(valorRetornoDaFuncao);
// console.log(determinaFaixaEtaria(30));