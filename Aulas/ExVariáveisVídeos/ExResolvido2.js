const valorDaCompra = 100;
const numeroDeParcelas = 15;
const valorApagarDesconto = valorDaCompra - (valorDaCompra * 0.1);
const valorDaParcelaComJuros = (valorDaCompra * ((1 + 0.01) ** numeroDeParcelas) / numeroDeParcelas).toFixed(2);
const valorDaParcelaSemJuros = (valorDaCompra / numeroDeParcelas).toFixed(2);


if (numeroDeParcelas === 1) {
    console.log(` Você deve pagar R$ ${valorApagarDesconto}, pois à vista tem 10% de desconto`);
} else if (numeroDeParcelas >= 7) {
    console.log(` Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcelaComJuros}`);
} else {
    console.log(` Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcelaSemJuros}`);
}




