const buscarFruta = (arrayFrutas, callback) => {
    for(let fruta of arrayFrutas){
        if(callback(fruta)){
            const retornoFuncao = callback(fruta);
            console.log(retornoFuncao);// console.log('Fruta encontrada');
            
            return;
        }
       
    }

    console.log('Fruta não encontrada');
}

const frutas = ['uva', 'manga', 'abacaxi', 'banana'];

buscarFruta(frutas, (item) => {
    return item === 'manga';
});