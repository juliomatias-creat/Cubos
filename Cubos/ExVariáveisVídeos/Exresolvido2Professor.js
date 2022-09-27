// para pagamento à vista o cliente tem 10% de desconto
// Ou parcelado em até 6 vezes, mas sem desconto 
// Modificar de modo a ser possível pagar em até 12x, com juros a partir de 7x
// Imprimir como ele deve pagar, incluindo o valor da parcela 

const valorDaCompra = 100;
const numeroDeParcelas = 0;

if (numeroDeParcelas === 1) {
    // à vista - com 10% de desconto

    const valorApagar = valorDaCompra - (valorDaCompra * 0.1); // Não precisou criar a variável desconto...

    console.log(` Você deve pagar R$ ${valorApagar}, pois à vista tem 10% de desconto`);

} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado - Sem juros

    const valorDaParcelaSemJuros = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(` Você deve pagar ${numeroDeParcelas}x sem juros de R$ ${valorDaParcelaSemJuros}, totalizando R$ ${valorDaCompra} `)

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // Pagamento com incidência de juros de 1% ao mês

    const valorApagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcelaComJuros = (valorApagarComJuros / numeroDeParcelas).toFixed(2);

    console.log(` Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcelaComJuros}, totalizando R$ ${valorApagarComJuros} pois incide juros de 1% ao mês`);

} else {
    console.log(" Numero de parcelas inválido.");
}