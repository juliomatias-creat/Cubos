// calcule e imprima no console a soma de todos os números desse array.

// 1° percorrer todos os itens e fazer um loop. E o melhor pra iso é o forOf

// 2° Preciso concentrar minha resposta final em alguma variável, então crio let somaTotal = 0;
// Inicio ela com 0 porque eu ainda não começei acontar...

// 3° Eu sempre vou pegar o que eu já tenho acumulado em somaTotal,
// somar com o número atual, que é item, e o resultado disso vou guardar no próprio somaTotal.
// Por isso que somaTotal tem que ser criada com let, pois eu vou estar fazendo reatribuiçoes o tempo todo.

// 4° Por fim vou dar um console.log(somaTotal) fora do loop.
 
// Com fofOf:

const numeros = [2, 3, 4, 6];

let somaTotal = 0;

for (item of numeros) {
somaTotal = somaTotal + item;
}  
   console.log(somaTotal);

// Com for_De_C:

// const numeros = [2, 3, 4, 6];

// let somaTotal = 0;
// for (let i = 0; i < numeros.length; i++) { // para índice na posição 0, enquanto o número da posição( e não o valor da posição) for menor que o tamanho da aray, 
//   somaTotal = somaTotal + numeros[i];                // execute o que está dentro das chaves( que é colocar o resultado da adição na variável soma).
// }                                          // Ou seja, soma vale 0 e numeros[i] = numeros[0], nesse primeiro momento. Numero[o] é igual ao valor do numero que ocupa essa posição.
// console.log(somaTotal);                       // logo soma + numeros[i] = 0 + 0 = 0. E esse valor é guardado em soma. Por fim é acrescido 1 ao índice, que passa a valer 1.

 // O segredo consiste em separa as coisas: o valor do índice é a posição do elemento. Já o valor do elemento 
 // na posição x é numeros[x]. E acrescentar 1 ao índice significa pular para o próximo elemnto do array.

//  Com while:  
 
//  const numeros = [2, 3, 4, 6];
   
//    let somaTotal = 0;
//    let i = 0;
//    while (i < numeros.length) {
//    somaTotal += numeros[i];
//    i++
//  }

//  console.log(somaTotal);