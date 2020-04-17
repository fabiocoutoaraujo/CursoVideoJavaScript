/* 
    https://unicode.org/emoji/charts/full-emoji-list.html 
*/

function contar()
{
    let txtinicio = document.querySelector('input#txtinicio')
    let txtfim = document.querySelector('input#txtfim')
    let txtpasso = document.querySelector('input#txtpasso')
    let divresultado = document.querySelector('div#resultado')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {            
        divresultado.innerHTML = 'Impossível contar!'
    } else {
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        
        if (passo == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        
        divresultado.innerHTML = '<p>Contando:</p>'
        
        if (inicio < fim) {
            // Contagem crescente
            for (let i = inicio; i <= fim; i+=passo) {
                divresultado.innerHTML += `${i} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for (let i = inicio; i >= fim; i-=passo) {
                divresultado.innerHTML += `${i} \u{1F449} `
            }
        }
        divresultado.innerHTML += ` \u{1f911}`
    }
}