//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorComDesconto = 0;

// Código do professor:

if (tipoDePagamento === "credito"){
    valorComDesconto = valorDoProduto * 95/100;
} else if (tipoDePagamento === "cheque"){
    valorComDesconto = valorDoProduto * 93/100;
} else {
    valorComDesconto = valorDoProduto * 90/100;
}

console.log(`Valor a ser pago é de: R$ ${(valorComDesconto / 100).toFixed(2)}`);  
  
//a) Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado. 

// Meu código:
// if (tipoDePagamento === "credito") {
//     const descontoCartao = 5/100; 
//     const valorFinal = (valorDoProduto - (valorDoProduto  * descontoCartao)) / 100;
//     console.log(`desconto de ${descontoCartao}, logo o valor final do produto é de R$ ${valorFinal.toFixed(2)}`);
// } else if (tipoDePagamento === "cheque") {
//     const descontoCheque = 3/100; 
//     const valorFinal = (valorDoProduto - (valorDoProduto  * descontoCheque)) / 100;
//     console.log(`desconto de ${desconto}, logo o valor final do produto é de R$ ${valorFinal.toFixed(2)}`);
// } else  {
//     const descontoDinheiroDebito = 10/100; 
//     const valorFinal = (valorDoProduto - (valorDoProduto  * descontoDinheiroDebito)) / 100;
//     console.log(`desconto de ${desconto}, logo o valor final do produto é de R$ ${valorFinal.toFixed(2)}`);
// }

// Tentei executar com o console.log fora do if e simplesmente não funciona.
// Acredito ser porque a cosntante desconto só exista dentro do scopo do if...