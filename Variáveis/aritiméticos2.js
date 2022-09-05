let x = 10, y = 2;

let resultado = x + y; //12
let mensagem = `A soma de ${x} e ${y} é ${resultado}`;
console.log(mensagem);
console.log(`A soma de ${x} e ${y} é ${resultado}`); // não cria variável

resultado = x - y; //8
console.log(`A subtração de ${x} e ${y} é ${resultado}`);

resultado = x * y; //20
console.log(`A multiplicação de ${x} e ${y}} é ${resultado}`);

resultado = x / y; //5
console.log(`A divisão de ${x} e ${y} é ${resultado}`);


//começei assim, é resultado ao invés da última soma. 
console.log(`a soma de ${x} e ${y} é ${x} + ${y}`); 