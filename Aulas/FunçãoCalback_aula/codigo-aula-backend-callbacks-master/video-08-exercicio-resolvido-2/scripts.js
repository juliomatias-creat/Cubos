const calcularIMC = (altura, peso, funcaoCallback) => {
    const imc = peso / (altura * altura);
    let faixa;
    

    if (imc < 18) {
        faixa = 'Desnutrição';
    } else if (imc >= 18 && imc <= 25) {
        faixa = 'Normal';
    } else {
        faixa = 'Sobrepeso';
    }

    funcaoCallback(imc, faixa);
}

calcularIMC(1.73, 75, (imc, faixa) => {
    console.log(`IMC: ${imc}`);
    console.log(`Faixa Correspondente: ${faixa}`);
});

