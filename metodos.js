

//function apresentar(pessoa) {
  
const pessoa1 = {
    nome: 'Julio',
    idade: 31,
    profissao: 'professor',
    apresentar: function () {
        const faixaEtaria = this.determinaFaixaEtaria(this.idade);
        
        console.log(`sou ${this.nome}, sou 
        um ${faixaEtaria} de  ${this.idade} 
        anos, e sou ${this.profissao}`);
    },
    determinaFaixaEtaria: function () {
        if(this.idade <= 21) {
            return "jovem";
        } // else if(idade <= 65)
            else if(this.idade < 66) {
            return "adulto(a)";
        } else {
            return 'idoso(a)' ;   
        }
    }
    };

//apresentar(pessoa1);

// pessoa1.apresentar();
 pessoa1.apresentar();
 console.log(pessoa1.determinaFaixaEtaria());