const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

for (let objeto of usuarios) {
    if (objeto.idade > 17) {
        objeto.maiorIdade = true;
    } else {
        objeto.maiorIdade = false;
    }
}
console.log(usuarios);
