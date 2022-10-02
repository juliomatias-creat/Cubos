
//Crie um novo array a partir do primeiro que contenha apenas os nomes que começam com a letra "A" ou "a". 
// Ao final, imprima a variável que guarda o array.

/* Quais ferramentas eu preciso para resolver este problema?

1° Eu preciso criar uma constante para armazenar a primeira letra de cada nome do array.
Mas ela tem que está dentro do for(local), senão dá erro.

2° Eu preciso de um novo array vazio para receber os nomes que satisfaçam a condição.*/

// passos da execução do código:

// 1° ler cada um dos nomes.

/* 2° Testar a seguinte condição: Se letraInicialDoNome  é igual a “A” ou  “a” . 
 
3° Se for, execute: pegar esse nome e por no final do último item do novo array.*/

// 4° Imprimir a variável que guarda esse novo array.


const nomes = ["Joana", "Adalberto", "Carlos", "amanda", "Pedro"];

const nomesIniciadosComA = [];

for (let nome of nomes) {
    
    const letraInicialDoNome = nome[0];

    if (letraInicialDoNome === "A" || letraInicialDoNome === "a") {
        nomesIniciadosComA.push(nome);
    }
} console.log(nomesIniciadosComA);




  
	

