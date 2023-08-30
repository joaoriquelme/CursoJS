function parimp(n) {
    if (n % 2 == 0) {
        return 'PAR!'
    } else {
        return 'ÍMPAR!'
    }
}

var res = parimp(4) // Var Res recebe o retorno da função parimp passando o parâmetro real: 4

console.log(res)       // Escrevendo o retorno na tela armazenando através de uma variável
console.log(parimp(4)) // Escrevendo na tela sem precisar jogar p dentro da variável