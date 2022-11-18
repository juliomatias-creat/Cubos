const buscarFruta = (arrayFrutas, callback) => {
// então aqui usamos o for of para percorrer esse array. Ele percorre o array que é passado e pra cada elemento
// eu valido se o que vai ser passado no callback é igual a fruta que eu desejo achar.
for (let fruta  of frutas) {
    if(callback(fruta)) {
        console.log('Fruta encontrada');
        return; // interrompe, dispensado a procura por outras frutas
    }
// essa condição tem que ser verdadeira para ser exibido a mensagem que a fruta foi encontrada.
// E quem retornará essa condição verdadeira ou falsa será a função callback que vamos passar quando 
// executarmos a função buscarFruta

    }
    
        console.log('Fruta não encontrada');
    
}

const frutas = ['uva', 'manga', 'abacaxi', 'banana'];

// percorrer cada elemento, e se o elemnto passado na condição do callback atender a um desses valores que temos nesse array, 
// será exibido uma mensagem que a fruta foi encontrada. Caso contrário será informado que a fruta não foi encontrada.

buscarFruta(frutas, (item) => { // item é a fruta e tem que ser exetamente igual a fruta que eu procuro
    return item === 'mangaba'     // Quero encontrar manga. Essa função tem que retornar se o item é igual a manga.
                                // se for, essa função vai retornar um verdadeiro, senão for, vai retornar um falso.
});                             // É por isso que o callback vai retornar sempre V ou F
