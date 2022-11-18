// Imprime a tabuada de qualquer número
// Enquanto i <= 10, ou seja, de 0 10, a variável resultado tem seu valor 
// atualizado. Na primera vez que o loop finaliza sua execução, seu valor 
// que inicia com uma string vazia é alterado para 5x0 = 0 através da 
// concatenação, graças ao +=. Isso "soma" as strings, e o resultado disso é 
// que a string anterior é unida com a atual em cada interação do loop.
// o \n quebra uma linha toda vez que um loop é interado. Ao sair do loop, toda a string é construída. 
// A funcção callback é executada na pŕoxima linha. Ela exibe o valor que lhe é passado por parâmetro 
// e como esse valor é o resultado de toda a opereação da tabuada, esse valor é impresso de uma 
// única vez na tela, com cada operação sendo mostrada numa linha abaixo da outra devido ao \n. 
// Assim o exercício tem sua resolução atendida, onde a função tabuada recebe dois parametros, sendo um deles uma função.

// function tabuada (numero, callback) {
//     let resultadoTabuada = ''
    
//     for (let i = 0; i <= 10; i++) { 
//         resultadoTabuada += `${numero} x ${i} = ${numero * i} \n`
    
//     }
//     callback(resultadoTabuada)  
// }

// function exibeResultado(resultado) {  // essa função recebe um parâmetro e imprime na tela o valor que lhe é passado por argumento
//     console.log(resultado);           // no momento de sua chamada.
// }

// tabuada(5, exibeResultado);

const tabuada = (numero, callback) => {
    let resultado = ''
    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i} \n`
    }
    
    callback(resultado)
}

const exibeResultado = (resultado) => {
    console.log(resultado);
}

tabuada(5, exibeResultado);
