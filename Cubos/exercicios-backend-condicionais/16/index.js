//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

// Código do professor:
if (idadeDoAluno >= 18 || possuiResponsavel === true) {
    console.log("Rematrícula realizada com sucesso");
} else {
    console.log("Não é possível fazer a rematrícula");
}

// Meu código: está fazando a mesma coisa, só que pela óptica de testar o caso proibido primeiro, com &&
// Já no código do professor ele começa testando o caso permitido com ||(OU)

// if (idadeDoAluno < 18 && possuiResponsavel === false) {
//     console.log("Não é possível fazer a rematrícula");
// } else {
//     console.log("Rematrícula realizada com sucesso");
// }