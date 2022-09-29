const caractere = "6"

if (
    caractere === "A" ||
    caractere === "E" ||
    caractere === "I" ||
    caractere === "O" ||
    caractere === "U") {
    console.log("vogalMaiúscula");
} else if (
    caractere === "a" ||
    caractere === "e" ||
    caractere === "i" ||
    caractere === "o" ||
    caractere === "u") {
    console.log("vogalminúscula");
} else if (
    caractere === "1" ||
    caractere === "2" ||
    caractere === "3" ||
    caractere === "4" ||
    caractere === "5" ||
    caractere === "6" ||
    caractere === "7" ||
    caractere === "8" ||
    caractere === "9" ||
    caractere === "0") {
    console.log("Número");
} else {
    console.log("Consoante");
}

// Meu código:

// if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
//     console.log("vogalMaiúscula");
// } else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
//     console.log("vogalminúscula");
// } else if (caractere != "A" || caractere != "E" || caractere != "I" || caractere != "O" || caractere != "U") {
//     console.log("consoante");
// } A incoerência aqui está em usar != pois bastava usar else na última linha para
// "diferenciar" tudo...