// Programa que determina se uma pessoa pode assistir a um filme 
// baseado em três critérios: Se tem ingresso, censura e idade

const temIngresso = true;
const censura = 16;
const idade = 13;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log(" Pode entrar no cinema");
    } else {
        console.log("barrada pela censura");
    }

} else
    console.log(" barrada, pois não tem ingesso");

// Ter ingresso e ter idade >= censura

 // O legal dessa forma é que é possível mostrar msg`s de erro bem específicas para cada caso.
