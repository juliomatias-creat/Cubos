// tem ingresso 
// idade >= 16 OU estar acompanhado dos pais

const temIngresso = true;
const idade = 17;
const censura = 16;
const estaComOsPais = false;

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("pode entrar");
    } else {
        console.log("barrada");
    }
} else {
    console.log("barrado");
}