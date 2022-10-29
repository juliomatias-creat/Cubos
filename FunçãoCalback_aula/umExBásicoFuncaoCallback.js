/* Nossa primeira funcao que recebe uma funcao
callback como argumento:*/

// A função saudacao recebe o parâmetro callback, que por sua vez é um funçao
// que recebe um parãmetro algumaCoisa. Esse parâmetro recebe o valor da variável
// nome e imprime esse valor, simplesmente isso. assim é a funçao callback
// quem imprime a mensagem na tela acessando os dados da função saudação 
// dentro dela.

function saudacao(callback) {
    const nome = 'Julio';
    callback(nome);
    }
    
    saudacao(function (algumaCoisa){
    console.log(`Olá ${algumaCoisa}, seja bem vindo!`);
    })
    