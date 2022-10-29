//faca uma funcao de apresentacao que, por sua vez, chama a funcao 
// que determina a faixa etaria.
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
    const faixaEtaria = determinaFaixaEtaria(pessoa.idade);
   
   console.log(`sou ${pessoa.nome}, sou um ${faixaEtaria} de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
}
const pessoa1 = {
    nome: 'Julio',
    idade: 31,
    profissao: 'professor'
};

apresentar(pessoa1);
