const idade = 29;

// Menor de 18 → menor de idade
// Maior de idade, mas menor ou iguala 65 anos → Adulto
// Maior de 65 anos → Idoso

if (idade < 18) {
    console.log("Menor de idade")
} else if (idade <= 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
