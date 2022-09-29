// pedra, papel, tesoura

// pedra x pedra = empate -> tesoura x tesoura = empate -> papel x papel = empate


// pedra x papel = papel ganha
// pedra x tesoura = tesoura ganha

// tesoura x papel = tesoura ganha
// tesoura x pedra = pedra ganha

// papel x tesoura = tesoura ganha
// papel x pedra = papel ganha


const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {

    console.log("pedra");

} else if (jogada1 === "pedra" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {

    console.log("papel");

} else if (jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {

    console.log("tesoura");

} else {
    console.log("empate");
}
