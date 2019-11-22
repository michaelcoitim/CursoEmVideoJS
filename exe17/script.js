function Tabuada(){
    let n = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')
    let tab = document.getElementById('seltab')
    /*res.innerHTML='calculando <br/> '
    for(let c = 0; c <= 10; c++){
        let tab= Number(n.value) * c
        res.innerHTML+=`${Number(n.value)} * ${c} = ${tab} <br>`
    }*/
    if(n.value.length ==0){
        window.alert('Por gentileza, digite um numero')
    }else{
        let num = Number(n.value)
        let c =0
        tab.innerHTML=''
        while(c <= 10){
            let item= document.createElement('option') // criando option dinamicamente
            item.text =`${num} X ${c} = ${num*c}` // add multiplicaçao nos options
            item.value= `tab${c}` // add valor de c nos option.values
            tab.appendChild(item)
            c++
        }
    }

}