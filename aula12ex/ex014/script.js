function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) 
    {
        img.src = 'fotodia.png'
        img.alt = 'Foto do dia'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) 
    {
        img.src = 'fototarde.png'
        img.alt = 'Foto da tarde'
        document.body.style.background = '#b9846f'
    } 
    else 
    {
        img.src = 'fotonoite.png'
        img.alt = 'Fota da noite'
        document.body.style.background = '#515154'
    }
}
