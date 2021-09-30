function calcularIdade(dataNascimento){

    const data = new Date();
    const anoAtual = data.getFullYear();
    return anoAtual-dataNascimento;  

}

console.log(`A sua idade é ${calcularIdade(1800)}`)