const pessoa = {
    nome: 'Julio',
    idade: 32,
    profissao: 'professor'
} 
    if (pessoa.idade < 25) {
        console.log(`sou ${pessoa.nome}, sou um jovem de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
    } else if(pessoa.idade < 65) {
        console.log(`sou ${pessoa.nome}, sou um adulto de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
    } else {
        console.log(`sou ${pessoa.nome}, sou um idoso de  ${pessoa.idade} anos, e sou ${pessoa.profissao}`);
    }
console.log(`sou ${pessoa.nome}, tenho ${pessoa.idade} anos, e sou ${pessoa.profissao}`);

const pessoa2 = {
    nome: 'Pedro',
    idade: 65,
    profissao: 'médico'
}
if (pessoa2.idade < 25) {
    console.log(`sou ${pessoa2.nome}, sou um(a) jovem(a) de  ${pessoa2.idade} anos, e sou ${pessoa2.profissao}`);
} else if(pessoa2.idade < 65) {
    console.log(`sou ${pessoa2.nome}, sou um(a) adulto(a) de  ${pessoa2.idade} anos, e sou ${pessoa2.profissao}`);
} else {
    console.log(`sou ${pessoa2.nome}, sou um(a) idoso(a) de  ${pessoa2.idade} anos, e sou ${pessoa2.profissao}`);
}


const pessoa3 = {
    nome: 'Álvaro',
    idade: 31,
    profissao: 'entregador'
}
if (pessoa.idade < 25) {
    console.log(`sou ${pessoa3.nome}, sou um(a) jovem(a) de  ${pessoa3.idade} anos, e sou ${pessoa3.profissao}`);
} else if(pessoa.idade < 65) {
    console.log(`sou ${pessoa3.nome}, sou um(a) adulto(a) de  ${pessoa3.idade} anos, e sou ${pessoa3.profissao}`);
} else {
    console.log(`sou ${pessoa3.nome}, sou um(a) idoso(a) de  ${pessoa3.idade} anos, e sou ${pessoa3.profissao}`);
}

