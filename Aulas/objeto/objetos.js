    const pessoa = {
        nome: "julio",
        idade: 31,
        altura: 1.73,
        temCnh: true,
        apelidos: ["biito", "marcelo"]
    }; 
    
    let textoCnh = "";

    if (pessoa.temCnh) {
        textoCnh = "possui cnh";
    } else {
        "Não possui Cnh"
    }
        console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCnh} e os seguintes apelidos: 
    - ${pessoa.apelidos[0]}
    - ${pessoa.apelidos[1]}`);