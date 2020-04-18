const amigo = {
    nome: 'Fábio Couto Araujo',
    idade: 37,
    email: 'fabiocoutoaraujo@gmail.com',
    sexo: 'M',
    peso: 104.5,
    engordar(p=0)
    {
        this.peso += p
        console.log(`Engordou ${this.peso}`)
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)
amigo.engordar(2)