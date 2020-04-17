function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-homem-bebê.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                img.setAttribute('src', 'foto-homem-idoso.png')
            }
        } else if (fsexo[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-mulher-bebê.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                img.setAttribute('src', 'foto-mulher-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}