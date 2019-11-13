function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value<0)){
         window.alert('Verifique os dados e tente novamente')
    }else
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `sua idade é ${idade}, sexo = ${fsex.value}`
    }