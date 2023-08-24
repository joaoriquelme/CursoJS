var agora = new Date()
var hora = agora.getHours()

var msg = window.document.getElementById('texthour')
var imgjs = window.document.getElementById('imagem')
var bodyjs = window.document.getElementById('bodyback')

msg.innerText = (`Agora são ${hora} horas.`)


function hours() {
    if (hora < 12 && hora >= 0) {
        imgjs.src = 'imagens/fotomanha.jpg'
        bodyjs.style.background = '#E2CD9F'
    } else if (hora >= 12 && hora <= 18) {
        imgjs.src = 'imagens/fototarde.jpg'
        bodyjs.style.background = '#A77964'
    } else if (hora > 18 && hora <= 23) {
        imgjs.src = 'imagens/fotonoite.jpg'
        bodyjs.style.background = '#464848'
    }
}