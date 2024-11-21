function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('sexo')
        var idade = ano - Number(fano.value)
        var genero = ('')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=1 && idade < 10){
                 //Criança
                 img.setAttribute('src', 'imagens/menino250x250.png')
            } else if (idade <=18) {
                //Jovem
                img.setAttribute('src', 'imagens/rapaz250x250.png')
            } else if (idade <=50){
                //Adulto
                img.setAttribute('src', 'imagens/homem250x250.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/senhor250x250.png')
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=1 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/menina250x250.png')
            } else if (idade <=18) {
            //Jovem
            img.setAttribute('src', 'imagens/moca.png')
            } else if (idade <=50){
            //Adulto
            img.setAttribute('src', 'imagens/mulher250x250.png')
            } else {
            //Idoso
            img.setAttribute('src', 'imagens/senhora250x250.png')
        }
    }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    } 
}