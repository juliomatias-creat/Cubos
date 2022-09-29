const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855970 * 100; //emCentavos

//seu código aqui

// Não precisava multiplicar o totalDerendimentos*100 pois 2855970 já está em centavos 

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970 * 100) {
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');
} else {
    console.log("PEGA LEÃO");
}

// Correção: Ao meu ver esse código precisava também igualar o rendimento. <= 2855970 pois
// se o valor for igual a 2855970 a msg dá PEGA LEÃO, o que não faz sentido pois 2855970 não
// > que ele mesmo e sim igual, logo deveria retornar 'VAZA LEAO! JA TA DIFICIL SEM VOCE'.

// if (aposentada || portadoraDeDoenca) {
//     console.log("ISENTA");
// } else if (totalDeRendimentos < 2855970) {
//     console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');
// } else {
//     console.log("PEGA LEÃO");
// }