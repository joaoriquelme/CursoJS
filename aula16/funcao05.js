// RECURSIVIDADE - FUNÇÃO RECURSIVA (FUNÇÕES QUE CHAMAM A SI PRÓPRIAS)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) //var 'n' recebe o valor de 'n' - 1 vezes 'n' em looping
    }
}

console.log(fatorial(5))

/*

O fatorial de um número pode ser calculado baseado no Fatorial de outro, por exemplo:

5! = 5 x 4 x 3 x 2 x 1    //(Se calcularmos apenas a partir do 4 iremos obter a Fatorial do número 4 -> (4 x 3 = 12 x 2 = 24 x 1 = 24)
5! = 5 x 4!    //Então podemos reescrever que a fatorial de 5 (120) é igual a 5 x a fatorial de 4 (24) -> 5 x 24 = 120

n! = n x (n-1)! //Se eu tenho um número 'n' a fatorial dele sempre será igual a N * (n-1)! )(Ou seja: N vezes o valor de N menos um)
               //Caso eu queira a fatorial de 4 basta apenas eu calcular 4 vezes a fatorial de 3 que é 6 ou seja 4x6 = 24
1! = 1  //Isso só não se aplica caso o número que queira obter a fatorial seja o 1, pois a fatorial de 1 é 1.

*/