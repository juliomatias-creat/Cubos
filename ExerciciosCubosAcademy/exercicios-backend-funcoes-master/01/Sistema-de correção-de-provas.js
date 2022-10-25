const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

    function corrigirProva(prova) {
    let acertos = 0;
 
    for (const item of prova.questoes) {
    if(item.resposta === item.correta) {
        acertos++;
 }
}

let valorPorQuestao = prova.valor / prova.questoes.length;

let notaDaProva = acertos * valorPorQuestao;

if(acertos === 0) {
    console.log(`o aluno ${prova.aluno} nao acertou nenhuma questao e obteve nota 0`);
} else if (acertos === 1) {
    console.log(`o aluno ${prova.aluno} acertou ${acertos} questao e obteve nota ${notaDaProva}`);
} else {
    console.log(`o aluno ${prova.aluno} acertou ${acertos} questoes e obteve nota ${notaDaProva}`);
}
}
//Implemente a função corrigirProva de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.
//O aluno(a) João acertou 3 questões e obteve nota 6


corrigirProva(prova); 
