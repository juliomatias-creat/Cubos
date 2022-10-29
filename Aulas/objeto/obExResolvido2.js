// crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
// Nome do cliente
// idade do cliente
// produtos consumidos

// cada produto pode ter:
// nome do produto
// preço do unitário(em centavos)
// quantidade comprada
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

//  console.log(cartaoConsumo);
console.log(produtosConsumidos[0].nome);
console.log(cartaoConsumo.produtosConsumidos[produtosConsumidos.length-1].precoUnit);