

//faça um programa que encontre o maior número desse array e o imprima no console.


// Quais ferramentas eu preciso?

// Eu preciso percorrer cada item desse array

/* Eu preciso olhar cada um dos números e verificar se ele é maior do que o que eu já considerava o maior até aqui. 

Então, começando pelo 3, ele começa sendo o maior de todos, enquanto eu ainda não olhei quem são os próximos... Quando eu chego no 4, 
eu me pergunto se ele é maior que o 3, que dá positivo. Logo ele passa a ser o maior até agora. Quando eu chego no 1 eu me pergunto 
se ele é maior que o 4. Não é, pego o 8, e me pergunto se ele é maior que o 4, a resposta é sim. Agora eu esqueço o 4 e o oito passa a 
ser o maior até agora. Dai eu repito o mesmo passo agora com o 11 e a resposta é que ele é maior que o 8 
e agora ele assumi o lugar do maiorNumeroAteAgora. 
Isso se repete até o último item e eu imprimo quem terminar com o título do maiorNumeroAteAgora, que nesse caso é o 11 mesmo.*/
 
// Algotimo:

// Percorrer o Array;
// Verificar se item é maior que o maiorNumeroAteAgora;
/* Se for, substitui.Esse item passa a ser o maior até agora.
 E eu vou comparar os próximos itens, com esse novo que substituiu.*/
// Repetir.

const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorNumeroAteAgora = numeros[0];

for (let item of numeros) {
    
    if (item > maiorNumeroAteAgora ) {
        maiorNumeroAteAgora = item;
    }
}
console.log(maiorNumeroAteAgora);