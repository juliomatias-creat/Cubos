const somar = (primeiroNumero, segundoNumero, callback) => {
    const resultado = primeiroNumero + segundoNumero;
    callback(resultado);
}

somar(13, 1215, (resultado) => {
    console.log(`Resultado da soma: ${resultado}`);
});
