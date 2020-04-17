let txtnumero = document.querySelector('input#txtnumero')
let selnumero = document.querySelector('select#selnumero')
let resultado = document.querySelector('p#resultado')
let numeros = []

function adicionar() {    
    if (txtnumero.value.length == 0 || txtnumero.value < 1 || txtnumero.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let numero = txtnumero.value        
        let item = document.createElement('option')
        item.value = `item${numero}`
        item.text = `Valor ${numero} adicionado.`
        selnumero.options.add(item)        
        numeros.push(numero)
        resultado.innerHTML = ''
    }
}

function finalizar() {
    alert('Testando integração com o GitHub');
}