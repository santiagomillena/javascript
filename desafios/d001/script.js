function carregar(){
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += (' Bom dia!')
        img.src = 'imagens/manha250x250.png'
        document.body.style.background = '#E0C690'
        //BOM DIA!
    } else if ( hora >= 12 && hora <= 17) {
        msg.innerHTML += (' BOA TARDE!')
        img.src = 'imagens/tarde250x250.png'
        document.body.style.background = '#646C62'
        //BOA TARDE
    } else {
        msg.innerHTML += (' BOA NOITE!')
        img.src = 'imagens/noite250x250.png'
        document.body.style.background = '#634B74'
        //BOA NOITE
    }
}