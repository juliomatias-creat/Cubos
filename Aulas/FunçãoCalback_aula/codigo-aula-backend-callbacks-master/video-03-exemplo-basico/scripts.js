function saudacao(callback) {
    const nome = 'Guido';
    callback(nome);
}

saudacao(function (algumaCoisa){
    console.log(`Bem vindo, ${algumaCoisa}`);
}); 