function Contar(){
    var n1 = window.document.getElementById('txtnum1')
    var n2 = window.document.getElementById('txtnun2')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    res.innerHTML=''

    if(n1.value.length==0){
        alert('inicio não pode ser vazio')
    }
    if(Number(passo.value)<=0){
        alert('O numero de passo tem que ser mair que zero! Foi considerado o valor 1')
        passo.value = 1
    }

    for(var c =Number(n1.value); c <= Number(n2.value) ; c+= Number(passo.value)){
        res.innerHTML+=`${c},`

    }
}