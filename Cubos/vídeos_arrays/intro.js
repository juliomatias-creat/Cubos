// Arrays são conjunto de dados orndenados e de um mesmo tipo, armezenados numa única varíavel.
// Isso mesmo, agora guardamos vários dados, como uma lista de nomes e para isso não é mais preciso criar 
// uma variável para cada nome.

// const nome1 = 'Jose';
// const nome2 = 'Joao';
// const nome3 = 'Maria';

const nomeDosEstudantes = ['Jose', 'Joao', 'Maria', 'Julio', 'Adriana'];

console.log(nomeDosEstudantes); // Passanso o nome da array, é impresso todos os itens de seu conteúdo

// Usamos índex para acessar o seu centeúdo, incia do index [0](1°) até (langt-1) (último item)

console.log(nomeDosEstudantes[0]); // Jose
console.log(nomeDosEstudantes[1]);
console.log(nomeDosEstudantes[2]);
console.log(nomeDosEstudantes[3]);
console.log(nomeDosEstudantes[4]); // Adriana
console.log(nomeDosEstudantes[5]); // undefined Esse item existe nesse array, 
                                   // é o memso que solicitar uma variável que não foi criada...

const notas = [7, 9,6,3,10]; // Pode-se trbabalhar com os mesmos tipos de dados que uma variável...

const lista = []; // Inclsive sem nenhum contéudo também. Na variável seria ""

console.log(notas);

console.log(lista);