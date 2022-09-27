
const temIngresso = true;
const idade = 16;
const censura = 16;
const estaComOsPais = false;

// tem ingresso 
// idade >= censura OU estar acompanhado dos pais


if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("pode entrar");
    } else {
        console.log("barrada");
    }
} else {
    console.log("Barrada.");
}

//Interessante: Quanso a variável que estamos comparando é do tipo
//Boleano, não precisa igualar a true porque o javascript já tenta
//transformar em V ou F.
//Então quando a variável é boleana, eu posso omitir, quando a intenção
//é justamente saber se é verdadeiro.

//Eu entendi que (temIngresso === true)
//equivale a     (temIngresso).

