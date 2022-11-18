const imprimirMensagem = (nome, idade) => {
    console.log(`Olá ${nome}. Você tem ${idade} anos!`);
}

setTimeout(imprimirMensagem, 2000, 'Maria', 23);