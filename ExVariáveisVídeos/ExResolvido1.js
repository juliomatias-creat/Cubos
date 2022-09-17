// para pagamento à vista o cliente tem 10% de desconto
// Ou parcelado em até 6 vezes, mas sem desconto 
// Imprimir como ele deve pagar, incluindo o valor da parcela 

const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    // à vista - com 10% de desconto

    const valorApagar = valorDaCompra - (valorDaCompra * 0.1); // Não precisou criar a variável desconto...
    console.log(` Você deve pagar R$ ${valorApagar}, pois à vista tem 10% de desconto`);
} else {
    // parcelado
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(` Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)
}