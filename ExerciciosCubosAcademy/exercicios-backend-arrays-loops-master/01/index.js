const numeros = [2, 3, 4, 6];

// calcule e imprima no console a soma de todos os números desse array.

// 1° percorrer todos os itens e fazer um loop. E o melhor pra iso é o forOf

// 2° Preciso concentrar minha resposta final em alguma variável, então crio let somaTotal = 0;
// Inicio ela com 0 porque eu ainda não começei acontar...

// 3° Eu sempre vou pegar o que eu já tenho acumulado em somaTotal,
// somar com o número atual, que é item, e o resultado disso vou guardar no próprio somaTotal.
// Por isso que somaTotal tem que ser criada com let, pois eu vou estar fazendo reatribuiçoes o tempo todo.

// 4° Por fim vou dar um console.log(somaTotal) fora do loop.
 
let somaTotal = 0;

for (item of numeros) {
somaTotal = somaTotal + item;
}

console.log(somaTotal);