// vou repetir o mesmo execício onde eu crio uma função e passo dois parâmetros, um
// array e uma função callback. A diferença é que agora a função callback está separada

// O objetivo continua sendo criar um programa que percorrer um array de frutas
// e verifica se a função callback retorna verdadeiro, comparando o elemnto do array
// que é o mesmo passado como argumento na chamada da função callback com a string imple
// mentada na criação da fumção callback.
// Se retorna true, é exibida a mensagem fruta encontrada e na próxima linha do if
// o comando return encerra a execução do código. Se retorna false para todos os itens, do array
// a execução sai do loop e imprime a mensagem 'fruta não encontrada.



const buscarFruta = (arrayFrutas, callback) => {
    for (const fruta of frutas) {
        if(callback(fruta)) {
            console.log('Fruta encontrada');
                return;
        }
    }
        console.log('fruta não encontrada');
}

const retornaVerdadeiroOuFalso = (item) => {
    return item === 'maracujá'
}

    buscarFruta(frutas, retornaVerdadeiroOuFalso);

    const frutas = ['uva', 'manga', 'abacaxi', 'banana'];