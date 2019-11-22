function Tabuada(){
    let n = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')
    res.innerHTML='calculando <br/> '
    for(let c = 0; c <= 10; c++){
        let tab= Number(n.value) * c
        res.innerHTML+=`${Number(n.value)} * ${c} = ${tab} <br>`
    }
}