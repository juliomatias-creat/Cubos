const cartaoConsumo = {
    nome: "Julio",
    idade: 31,
    produtosConsumidos: [
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
}; 
// Imprima o nome do cliente
// Imprima a idade do cliente
// modifique a idade do cliente
// imprima a nova idade do cliente
// imprima o nome do primeiro produto consumido
// imprima o preço unitário do último produto consumido por ele

//console.log(cartaoConsumo.produtosConsumidos[0].nome); 

// Tá pegando o primeiro item do array através do índice 0(que é o primeiro objeto), e depois, pega
// a propriedade nome desse objeto através do.nome -Que loucura, legal!!! rsrsrsrsrsrs...

console.log(cartaoConsumo.produtosConsumidos[cartaoConsumo.produtosConsumidos.length-1].precoUnit);