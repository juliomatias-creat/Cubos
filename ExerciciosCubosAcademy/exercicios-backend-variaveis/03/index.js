// Cálculo percentual do desconto a ser concebido
// dados: % percentual = desconto/valor do produto

let recurso = 80, valorProduto = 129.99, desconto = valorProduto - recurso;
const taxaPercentual = desconto / (valorProduto) * 100;

console.log(` o desconto precisa ser de ${taxaPercentual}% `);