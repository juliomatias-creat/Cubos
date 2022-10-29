//1 - Separando as funções
//Aqui basta apenas colocar o nome da função callback dentro da funçção
//principal.

// function mensagem (nome){
//     console.log(`Olá ${nome}, seja bem vindo!`);
//     }


// function saudacao(callback) {
//     const nome = 'Julio';
//     callback(nome);
//     }
    
//     saudacao(mensagem);

    //2 - O modelo de arown function separadas

//    const saudacao = (callback) => {
//         let nome = 'Julio';
//         callback(nome);
//             }
        
//             const mensagem = (nome) => {
//         console.log(`Olá ${nome}, seja bem vindo!`)
//     }

//     saudacao(mensagem);
 
//3 - Passando o modelo de arown funtio como parâmetro...

// As funçoes continuam separadas nesse modelo e como não é preciso
// nomear a função que é passada como parâmetro, basta apenas passar 
// a funcão callback sem o nome.Ignora-se const nome...
// Por fim, quando uma função só tem um parâmetro, os parêntes é opcional.

const saudacao = (callback) => {
            let nome = 'Julio';
            callback(nome);
                }
            
        //         const mensagem = (nome) => {
        //     console.log(`Olá ${nome}, seja bem vindo!`)
        // }
    
        saudacao(nome => {
            console.log(`Olá ${nome}, seja bem vindo!`)
        });


