const txtnumero = document.querySelector('input#txtnumero')
const selnumero = document.querySelector('select#selnumero')
const divresult = document.querySelector('div#resultado')
const array = []
let soma = 0
let media = 0
let menor = 0
let maior = 0

function isNumero(n) {
    return Number(n) > 0 && Number(n) < 101
}

function inLista(n, arr) {
    return arr.indexOf(Number(n)) !== -1
}

function limpanumero() {
    txtnumero.value = ''
    txtnumero.focus()
}

function maiormenor(n)
{
    const n1 = Number(n)
    if (array.length === 0) {
        maior = n1
        menor = n1
    } else {
        if (n1 > maior) {
            maior = n1
        }
        if (n1 < menor) {
            menor = n1
        }
    }
}

function adicionar() { 
    if (isNumero(txtnumero.value) && !inLista(txtnumero.value, array)) {
        const n = Number(txtnumero.value)
        soma += n
        media = soma / array.length
        maiormenor(n)
        array.push(n)
        const item = document.createElement('option')
        item.value = `item${n}`
        item.text = `Valor ${n} adicionado`
        selnumero.appendChild(item)
        divresult.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    limpanumero()
}

function finalizar() {
    divresult.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados.</p>`
    divresult.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
    divresult.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
    divresult.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    divresult.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}