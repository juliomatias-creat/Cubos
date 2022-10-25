// Verificar se uma pessoa é maior de idade
// ate entao haviamos construindo funcoes que apenas imprimiam
// um valor. Agora function verificarMaiorIdade(){} retornara um valor. O que significa?
// R: a chamada verificaMaiorIdade(); se trasformara em uma valor, que pode ser qualquer
// um que possa ser armazenado numa variavel. Logo, vou armazenar esse valor retornado na variavel:
//const valorRetornadoPelaFuncao = verificarMaiorIdade();
// Usando o comando (palavra reservada) return é que "pegamos o valor que o bloco de codigo retorna"

function verficarMaiorIdade(idade) { // funcao declarada
    if (idade > 18) {
        // e maior de idade; // para verificar, é preciso conhece-la e é a chamada quem passa esse valor.
        return true;         // por isso passamos o parametro idade
        console.log('essa linha nunca vai ser executada');
        console.log(valorRetornadoPelaFuncao);
    } else {
        // nao e maior de idade;
        return false;
    }
}

 // Aqui é informado a idade que eu quero verifica, 20, no caso. 
// como se fosse let idade = 20;
const valorRetornadoPelaFuncao = verficarMaiorIdade(20); 
console.log(valorRetornadoPelaFuncao);
