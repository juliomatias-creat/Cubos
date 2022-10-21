const produtosConsumidos = [
    {
        nome: "amedoim",
        precoUnit: 200,
        quantidade: 2
    }, 
    
    {
        nome: "cerveja",
        precoUnit: 1000,
        quantidade: 2
    },
    
    {
        nome: "cigarro",
        precoUnit: 10,
        quantidade: 1
    }]

const cartaoConsumo = {
    nome: "Julio",
    idade: 31,
    produtosConsumidos // atalho shorthand
};

let total = 0;

for (let item of produtosConsumidos) {
    total += item.precoUnit * item.quantidade;
    } 
    console.log(`sr°(a) ${cartaoConsumo.nome}, seu consumo é: R$${(total/100).toFixed(2)}`);
    
