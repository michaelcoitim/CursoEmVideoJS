let  num =[5,8,9,1,1.5]
num.push(0)// adciona um valor no ultimo indice do vetor
num.sort() // ordena o vetor
console.log(num)
console.log(`conteudo do vetor -> ${num}`)
console.log(`o vetor tem ${num.length}`) // mostra o tamanho do array
console.log (`o promeiro valor do array é ${num[0]}`) //sempre começa com 0

let pos = num.indexOf(8) // buscando a possição do valor 8 no array 
if(pos ==-1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na possição ${pos}`)
}