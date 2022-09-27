const temIngresso = false;

//Só entrou no if porque o oposto de false dá true e sabemos que só entra no no else quando a condição é vdd...
//Pode ser lido como: se não rem ingresso, faça isso...

if (!temIngresso) {
    console.log("pessoa sem ingresso.");
}
console.log(`variável temIngresso: ${temIngresso}`);

//Há apenas a inversão do valor da varíável
//para ser analizada dentro do if
//E não uma reatribuição, pois se trata de const.