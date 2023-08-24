function tabuada() {
    var txtnum = window.document.getElementById('txtn')
    var pres = window.document.getElementById('txtres')
    
    
    pres.innerHTML = `` //Reset da caixa de Texto

    if (txtnum.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        for (c = 1; c <= 10; c++) {
            var num = Number(txtnum.value)
            var totX = num * c
            pres.innerHTML += `${num} x ${c} = ${totX} <br>`
        }
    }
}