function fatorial(n) {
    var fat = 1  //Tem que ser 1 pq é o Último número da Fatorial
    for(var cont = n; cont > 1; cont--) { //Contador começa em 5 pq é o parâmetro que foi passado
        fat *= cont   //var Fat recebe o valor de Fat * cont Porém é feito ao contrário dessa forma -> (1 x 5 x 4 x 3 x 2 x 1)
    }
    return fat   //Retornando a Fatorial
}

console.log(fatorial(5))  //Exibindo o resultado da fatorial do num (5)

// 5! = 5 x 4 x 3 x 2 x 1 = 120 (Fatorial de 5 é igual aos cálculos mostrados a Esquerda.)