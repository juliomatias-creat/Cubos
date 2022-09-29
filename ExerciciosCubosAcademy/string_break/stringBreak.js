// Faça um programa que verifica se um determinado texto tem a letra H. 
// Imprima o resultado.

const nome = 'caminhada';
let encontrado = false

for (let letra of nome) {
    if (letra === 'h') {
        console.log('tem a letra h');
        encontrado = true;
    break;    
    };
}
if (!encontrado) {
    console.log('não tem h');
}