let amigo = {nome:'josé', 
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p // função dentro de um objeto  podendo mudar o peso
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)