let num = window.document.getElementById('txt1')
let res = window.document.getElementById('res')
let lista = window.document.getElementById('selnum')
let vet=[]

//let n1 = Number(num.value)


function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true

    }else{
        return false
    }
}

function inLista(n , l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
}


function adicionar(){
    
   if(isNumero(num.value) && !inLista(num.value, vet)){
    vet.push(Number(num.value))

    let item= document.createElement('option')
    item.text= `adicionado ${num.value}`
    lista.appendChild(item)
    res.innerHTML=''

   }else{
       window.alert('Valor invalido ou já esta na lista')
   }

   num.value=''
   num.focus()
}



function finalizar(){
    

    if(vet.length==0){
        window.alert('adicone um numero antes de finaliar')
    }else{
        let total= vet.length
        let menor = vet[0]
        let maior = vet[0]
        let soma = 0
        let media = 0
        for(let p in vet){
            soma += vet[p]
            if(vet[p]> maior){
                maior= vet[p]
            }
            if(vet[p]<menor){
                menor= vet[p]
            }
        }
        media = soma/total
        res.innerHTML=''
        res.innerHTML+= `<p>O valor total de elementos é ${total}.</p>`
        res.innerHTML+= `<p>O menor numero é ${menor}</p>`
        res.innerHTML+= `<p>O maior valor é ${maior}</p>`
        res.innerHTML+= `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML+= `<p>A médias entre eles  é ${media}.</p>`

    
    }


}