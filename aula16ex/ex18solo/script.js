//Linkando os Paragráfos
var ptotnum = window.document.getElementById('p1')
var pmaiornum = window.document.getElementById('p2')
var pmenornum  = window.document.getElementById('p3')
var ptotsoma = window.document.getElementById('p4')
var pmedianum = window.document.getElementById('p5')

//Criando o vetor de armazenagem
var vetor = []

var totnum = 0

var soma = 0

var txtnum = window.document.getElementById('inum') 

function add() {
    var txtnum = window.document.getElementById('inum')    
    var select = window.document.getElementById('iselect') 
    var num = Number(txtnum.value) 
    
    var verifying = vetor.indexOf(num)

    if (num.length == 0 || num < 1 || num > 100 || verifying != -1) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        ptotnum.style.display = 'none'
        pmaiornum.style.display = 'none'
        pmenornum.style.display = 'none'
        ptotsoma.style.display = 'none'
        pmedianum.style.display = 'none'

        vetor.push(num)
        totnum = totnum + 1
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        select.appendChild(item)
    }
}

function cleaninput() {
    const campo = document.querySelector('#inum');
    campo.value = '';
}

function calc() {
    //Fazer a validação
    if(vetor[0] <= 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        for(cont = 0; cont < vetor.length; cont++) {
            soma = soma + vetor[cont] //Ficava somando novamente sempre que acionavam o a Função pelo botão
        }
    
        var maiornum = Math.max(...vetor)
        var menornum = Math.min(...vetor)
        var media = (soma/totnum)
    
        ptotnum.innerHTML = `Ao todo, temos ${totnum} números cadastrados.`
        pmaiornum.innerHTML = `O maior valor informado foi ${maiornum}.`
        pmenornum.innerHTML = `O menor valor informado foi ${menornum}.`
        ptotsoma.innerHTML = `Somando todos os valores, temos ${soma}.`
        pmedianum.innerHTML = `A média dos valores digitados é ${media}`
    
        ptotnum.style.display = 'block'
        pmaiornum.style.display = 'block'
        pmenornum.style.display = 'block'
        ptotsoma.style.display = 'block'
        pmedianum.style.display = 'block'
    
        soma = 0 // Reset que resolveu o problema da soma descontrolada ao acionar calc()
    }
}
