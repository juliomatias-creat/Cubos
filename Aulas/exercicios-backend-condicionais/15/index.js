const primeiroNome = "Julio";
const sobrenome = "Matias";
const apelido = "biito";

if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(` ${primeiroNome} ${sobrenome}`);
} else {
    console.log(primeiroNome);
}