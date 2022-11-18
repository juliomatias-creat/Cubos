const saudacao = () => {
    console.log('Olá guido...');
}

setTimeout(() => {
    console.log('settimeout foi finalizado...');
}, 1000);
console.log('chamada 1');
saudacao();
console.log('chamada 2');
console.log('chamada 3');
console.log('chamada 4');
console.log('chamada 5');