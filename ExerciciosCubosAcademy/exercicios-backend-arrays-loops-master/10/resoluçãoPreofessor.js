    // faça um programa que calcule a maior diferença entre dois números desse array.

    //  Para garantir que a maior diferença foi encontrada, é preciso calcular todas as diferenças. Ou seja, 
    //  8 - 11, 8- 4, 8 -1... e vendo quais são as diferenças. Então a ideia é sempre comparar um item com todos
    //  os outros. Uma das formas de se fazer isso é ir calculando e inserindo os resultados num Array, depois
    //  filtar apenas o maior desse Array, porém isso gasta muita memória, por ter que guardar cada um desses 
    //  resultados. O mais eficiente é já ir calculando cada um e ver se é o maior até agora.

    //  Quais ferramentas eu preciso?

    //  Como eu faço para comparar cada item de um arrary com todos os outros?
    //  Bom, é só fazer um loop dentro do outro. Para o oito eu posso compará-lo com o 8, 11, 4 e o 1.
    //  O 11 com o 8, com ele mesmo, com o 4 e com o 1 e assim para todos...
    const numeros = [8, 11, 4, 1]

    let maiorDif = -Number.MAX_VALUE // Ou: numeros[0] - numeros[1];
    // Que seja o menor possível, para que a primeira difença que eu calcular já seja a maior de todas até aqui.
    // Ou armazeno um núnero negativo muito pequeno ou o cálculo da primeira diferença.

    for (let xLoopFora of numeros) { // pra cada xLoop de fora, eu comparo com tosos os yLoopdedentro.
        for (let yLoopDentro of numeros) {
            const difAtual = xLoopFora -yLoopDentro;
        // Agora é verificar a maior diferença 
            if (difAtual > maiorDif) {
            maiorDif = difAtual;
            }

        } 
            
    }
        console.log(maiorDif);