// CRIAR UMA FUNÇÃO QUE IMPRIME DADOS E QUE RECEBE UMA FUNÇAO CALLBACK

const imprimeDados = (callback) => {
    let nome = 'Julio';
    let idade = 31;
    
    callback(nome, null);
        }
    
//         const mensagem = (nome) => {
//     console.log(`Olá ${nome}, seja bem vindo!`)
// }

imprimeDados((nome1, idade1) => { // Observei que não há como imprimir idade1 apenas
    console.log('Função executada');
    console.log(nome1, idade1)
    if (nome1) { // Eu não entendi o porquê dessa estrutura, a relação de nome1 ter sido informado com true
        //Existe um método que associa true ou false quando uma variável armazena algum dado?

        console.log(`Nome: ${nome1}`);
    } 
    if (idade1) {
        console.log(`Nome: ${idade1}`);
    } 
});

// const dados = (nome1, idade1) => {
//     console.log('Função executada');
    
//     if (nome1) {
//         console.log(`Nome: ${nome1}`);
//     } 
//     if (idade1) {
//         console.log(`Nome: ${idade1}`);
//     } 
// } 

// imprimeDados(dados);
