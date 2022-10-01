//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

//Código do professor:

const valorDaParcelaEmReais = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasPagas = valorPago / valorDaParcelaEmReais;

console.log(` Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$ ${valorDaParcelaEmReais}`)

//Meu código:

// const valorDaParcela = (valorDoProduto / quantidadeDoParcelamento) / 100;
// const valorRestante = (valorDoProduto - valorPago) / 100;
// const parcelasRestantes = valorRestante / 100;
// console.log(`Falta pagar ${parcelasRestantes} parcelas de R$ ${valorDaParcela.toFixed(2)}`);

