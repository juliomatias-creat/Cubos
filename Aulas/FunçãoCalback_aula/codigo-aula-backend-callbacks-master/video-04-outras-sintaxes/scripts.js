const saudacao = (callback) => {
    const nome = 'Guido';
    callback(nome);
}

const mensagem = (nome) => {
    console.log(`Bem vindo, ${nome}`);
}

saudacao(mensagem);

// saudacao(nome => {
//     console.log(`Bem vindo, ${nome}`);
// });
