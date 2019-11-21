function Tabuada(){
    let n = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')

    for(let c = 1; c > 10; c++){
        let tab= Number(n.value) * c
        res.innerHTML=`${Number(n.value)} * ${c} = ${tab} <br>`
    }
}