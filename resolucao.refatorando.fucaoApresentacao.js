function verificaMaiorIdade(pessoa) {
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

verificaMaiorIdade(pessoa1);
    
    const pessoa2 = {
        nome: 'Pedro',
        idade: 31,
        profissao: 'médico'
    }

    verificaMaiorIdade(pessoa2);

    const pessoa3 = {
        nome: 'Álvaro',
        idade: 66,
        profissao: 'entregador'
    }
        verificaMaiorIdade(pessoa3);