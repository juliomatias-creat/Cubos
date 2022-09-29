//  fazer um programa que calcula o total de pessoas infectadas a partir de 3 variáveis.

// Po = a população de pessoas infectadas
// X = quantidade de pessoas para as quais um paciente pode transmitir
// t = tempo percorrido

// Para isso, use a fórmula a seguir:

//  P = p0 * math. pow(x, t/7 ) ou p = p0 * x ** t/7



let p0 = 5000, x = 6, tempo = 15, p = p0 * Math.pow(x, tempo / 7);
console.log(` O total de infectados é ${p} pessoas`);