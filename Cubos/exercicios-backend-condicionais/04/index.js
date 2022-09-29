const ladoA = 6;
const ladoB = 6;

// Correção do professor: 

if (ladoA === ladoB) {
    //console.log("Sim");
    if (ladoA === 0) {
        console.log("Bucha de branco")
    } else if (ladoA === 1) {
        console.log("Bucha de ás");
    } else if (ladoA === 2) {
        console.log("Bucha de duque");
    } else if (ladoA === 3) {
        console.log("Bucha de terno");
    } else if (ladoA === 4) {
        console.log("Bucha de quadra");
    } else if (ladoA === 5) {
        console.log("Bucha de quina");
    } else {
        console.log("sena");
    } g
}

/* Meu código:

if (ladoA === 0 && ladoB === 0) {
    console.log("Bucha de branco");
} else if (ladoA === 1 && ladoB === 1) {
    console.log("Bucha de Ás");
} else if (ladoA === 2 && ladoB === 2) {
    console.log("Bucha de duque");
} else if (ladoA === 3 && ladoB === 3) {
    console.log("Bucha de terno");
} else if (ladoA === 4 && ladoB === 4) {
    console.log("Bucha de quadra");
} else if (ladoA === 5 && ladoB === 5) {
    console.log("Bucha de quina");
} else if (ladoA === 6 && ladoB === 6) {
    console.log("Bucha de sena");
} else {
    console.log("Não é bucha");
}

Só era necessário verificar se LadoA === LadoB no if inicial, caso fosse, bastava verificar 
a identidade de LadoA ou LadoB nos outros valores de 0 a 6*/