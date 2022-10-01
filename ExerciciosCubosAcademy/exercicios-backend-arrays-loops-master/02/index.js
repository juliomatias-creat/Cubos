// seu codigo aqui

// Faça um programa que conta quantas letras "E" ou "e" existem nesse array.

// 1° para contar quantas letras 'E' ou 'e' existem, é preciso varrer a Array e para isso uso o for of

// 2° Depois de encontrado a soma das letras, devo imprimir msgś de acordo com a quantidade ecntrada.

// a) Quando não houver nenhuma letra "E" ou "e", Deverá ser impresso no console:

// Nenhuma letra "E" ou "e" foi encontrada.

// const letras = ["A", "a", "B", "C", "L", "z"];

const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0;

for (let letra of letras) {
    if (letra === 'E' || letra === 'e') {
        contador++
    }
}

 if (contador === 0) {
    // com scape:
    console.log("Nenhuma letra \"E\" ou \"e\" foi encontrada.");
 } else if (contador === 1) {
    console.log('Foi encontrada uma letra "E" ou "e"');
 } else {
    console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
 }



// let somaTotal = 0;
// let encontrado = false;

// for (let item of letras) {
//     if (item === 'E' || item === 'e')
//     somaTotal++;
//     encontrado === true

// }
//  if (!encontrado) {
//     console.log('Nenhuma letra "E" ou "e" foi encontrada.')
//  }