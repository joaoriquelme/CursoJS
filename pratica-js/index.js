function antsuc() {
    var num = window.document.getElementById('principal')
    var ante = Number(num.value)  //Transformando o valor de string em number
    var suc = Number(num.value)  //Transformando o valor de string em number
    var ante = --ante   //Utilizando o Operador de Pré-Incremento para chegar ao antecessor
    var suc = ++suc    //Utilizando o Operador de Pré-Incremento para chegar ao sucessor
    var textant = window.document.getElementById('antsuc')     // var textant recebe a ligação por id com paragráfo antsuc
    textant.innerText = `Antecessor: ${ante} Sucessor ${suc}` // var textant recebe o resultado de antecessor e sucessor de num
}

//Código para pegar o nome do usuário e enviar mensagens personalizadas

var nome = window.prompt('Qual é o seu nome?')    //Solicitando um nome ao user, e armazenando ele dentro da var -> nome

var texto = window.document.getElementById('p1') //Fazendo a ligação da var texto (q irá armazenar o texto) com o paragráfo de id 'p1' que irá exibir o texto no HTML

texto.innerText = `Olá, ${nome} coloque o cursor dentro da div, clique e depois coloque fora.` //Texto que será enviado direto do JS pro paragráfo em HTML

var textsoma = window.document.getElementById('psoma') // Fazendo a ligação da var textsoma, com o paragráfo de id 'psoma' que irá exibir o texto personalizado ao user.

textsoma.innerText = `Olá, ${nome} digite dois números para efetuarmos uma Soma!` //Texto que será enviado ao paragráfo de id 'psoma'.



//Função que irá efetuar a Soma
                                                 //Os dados que vem das caixas de texto sempre vem em formato de string então 
function somar () {                             //precisaremos transformar em number.
                                               //COMO LER AS LINHAS
    var tn1 = window.document.getElementById('txtn1')       //var tn1 recebe a ligação com o elemento selecionado pelo id "txtn1" (input 1)
    var tn2 = window.document.querySelector('input#txtn2') //var tn2 recebe a ligação com o elemento selecionado pelo Seletor CSS de ID "#txtn2" (input 2)
    var res = window.document.getElementById('res')      //var res recebe a ligação com o elemento selecionado pelo id "res" (div que exibirá o resultado)
    var n1 = Number(tn1.value)   //Var n1 recebe o valor da var tn1 convertido em Number.
    var n2 = Number(tn2.value)  //Var n2 recebe o valor da var tn2 convertido em Number.
    var s = n1 + n2            //Var s recebe o valor da SOMA entre n1 e n2.
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}` //Var s recebe o seguinte texto concatenado e com a formatação HTML > A soma entre n1 e n2 é igual a resultado
}

//Declaração de Eventos feita pelo método Listener

var a = window.document.getElementById('area')  //Colocar a var fora das functions resulta num escopo maior que permite utilizar a mesma VAR dentro de várias functions.
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'blue'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}

//Declaração de Eventos feita pelo método HTML

var a2 = window.document.getElementById('area2')  //Um escopo maior que permite utilizar a mesma VAR dentro de várias functions

function clicar2() {
    a2.innerText = 'Clicou!'
    a2.style.background = 'deepskyblue'
}

function entrar2() {
    a2.innerText = 'Entrou!'
    a2.style.background = 'black'
}

function sair2() {
    a2.innerText = 'Saiu!'
    a2.style.background = 'gray'
}

function verifycountry() {
    var vpaís = window.document.getElementById('ipaís')
    resp = window.document.querySelector('div#txtpaís')
    var vnome = nome

    if (vpaís.value == 'Brasil') {
        resp.innerHTML = `Olá <strong>${nome}</strong> seu país de origem é <strong>${vpaís.value}</strong> portanto você é <strong>Brasileiro.</strong>`
    } else {
        resp.innerHTML = `Olá <strong>${nome}</strong> seu país de origem é <strong>${vpaís.value}</strong> portanto você é <strong>Estrangeiro.</strong>`
   }
}

function checkdata() {
    let nameform = document.getElementById('iname')
    let ageform = Number(document.getElementById('iage').value);
    let salform = Number(document.getElementById('isal').value);
    let sexoform = document.getElementById('igen')
    let civilform = document.getElementById('icivil')
    let respform = document.getElementById('pformresp')
    let genero = ""

    salform = salform.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    if(sexoform.value.toLowerCase() === 'feminino'  ){
        genero = 'Mulher'
        respform.innerHTML = `<strong id="rosa">${nameform.value}</strong> é uma <strong id="rosa">${genero}</strong> <strong>${civilform.value}</strong> de <strong>${ageform} anos</strong> e que recebe um salário de: <strong id = "green">${salform}</strong>`
    } else if(sexoform.value.toLowerCase() === 'masculino'){
        genero = 'Homem'
        respform.innerHTML = `<strong id="azul">${nameform.value}</strong> é um <strong id="azul">${genero}</strong> <strong>${civilform.value}</strong> de <strong>${ageform} anos</strong> e que recebe um salário de: <strong id = "green">${salform}</strong>`
    }
}