// tem ingresso 
// idade >= 16 OU estar acompanhado dos pais

const temIngresso = false;
const idade = 15;
const censura = 16;
const estaComOsPais = false;

// Interessante: Podemos omitir a comparação de variáveis do tipo boleana


if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("pode entrar");
    } else ("barrada");
} else {
    console.log("Barrada");
}