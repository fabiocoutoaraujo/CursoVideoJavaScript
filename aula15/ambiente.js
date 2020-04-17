let num = [5, 8, 2, 9, 3]

num.push(4) // acrescenta na última posição do array

console.log(num)

console.log(`O primeiro elemento do vetor é ${num[0]}`)

console.log(`Temos ${num.length} elementos no vetor`)

num.sort()

console.log(`Vetor ordenado é ${num}`)

console.log(`Removendo o último elemento (${num.pop()}) do vetor`)

console.log(`Vetor após remoção do último elemento é ${num}`)

num[3] = 10 // não ordena com o método sort()

/* Por padrão, o método sort() classifica os valores como strings em ordem alfabética e crescente */
num.sort()
console.log(`Vetor com o método sort() é ${num}`)

// método alternativo
num.sort(function(a, b) { return a-b})
console.log(`Vetor ordenado com método alternativo é ${num}`)

// Código tradicionar para percorrer um vetor
for (let i = 0; i < num.length; i ++)
{
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('==========================')

// for simplificado e otimizado para variáveis compostas e objetos
for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// buscando valores dentro do vetor
console.log(`A posição do elemento 8 é ${num.indexOf(8)}`)

// buscando um valor inexistente
console.log(`Um elemento inexistente dentro do vetor é ${num.indexOf(100)} `)