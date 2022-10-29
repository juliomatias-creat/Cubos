    const pessoa = {
        nome: "julio",
        idade: 31,
        altura: 1.73,
        temCnh: true,
        apelidos: ["biito", "marcelo","baytes", "abonitado"]
    }; 
    let textoCnh = pessoa.temCnh ? "possui cnh" : "Não possui Cnh";
    // Usaremos ternário nesse trecho do if...
        
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCnh} e os seguintes apelidos:`);
    for (let apelido of pessoa.apelidos) {
        console.log(`- ${apelido}`);
    }