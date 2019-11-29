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

   }else{
       window.alert('Valor invalido ou já esta na lista')
   }

   num.value=''
   num.focus()
}

function finalizar(){

}