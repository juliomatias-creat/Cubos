// faça um programa que conta quantas letras 'a' existe nma determinada palavra.
// Impra o resultado na tela

const palavra = 'pneumoultramicroscópicossilicovulcanoconiótico';

// 1° percorrer cada item e se  encontrar uma letra 'a', somar 1 
// Precisa quardar essa soma, então monto um for of e uso if para testar a condição. 

let soma = 0;

for (let letra of palavra) {
    if (letra === 'a')
    soma++
}

console.log(`Logo, a palavra ${palavra} tem ${soma} letras a`);
