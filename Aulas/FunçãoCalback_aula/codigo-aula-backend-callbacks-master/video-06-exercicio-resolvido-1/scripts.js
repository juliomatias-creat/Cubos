const informarDadosUsuario = (callback) => {
    const nome = 'João';
    const idade = 20;
    callback(nome, idade);
}

const funcaoCallback = (nome, idade) => {
    console.log(`Olá, ${nome}!`);

    if (idade) {
        const anoAtual = new Date().getFullYear();
        console.log(`Você nasceu em ${anoAtual - idade}`);
    }
}

informarDadosUsuario(funcaoCallback);