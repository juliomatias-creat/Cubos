const minhaFuncao = (mensagem) => { // Aqui temos uma function expression que recebe 
    // faz algo                       um parâmetro chamado mensagem, que é utilizada 
                                      //no valor de retorno da minhaFuncao.
    console.log("minhaFuncao executada", mensagem)
    return "minhaFuncao executada" + mensagem
  }

  minhaFuncao("Julio");

