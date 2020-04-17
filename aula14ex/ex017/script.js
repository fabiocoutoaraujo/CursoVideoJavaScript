function tabuada()
{
    let txtnumero = document.getElementById('txtnumero')
    if (txtnumero.value.length == 0)
    {
        window.alert('Por favor, digite um número!')
        fnumero.focus()
    }
    else
    {
        let numero = Number(txtnumero.value)
        let seltabuada = document.getElementById('seltabuada')
        seltabuada.innerHTML = ''
        for (i = 1; i < 11; i++)
        {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${numero} x ${i} = ${numero*i}`            
            seltabuada.options.add(item)
        }
    }
}