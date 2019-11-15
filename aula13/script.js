function comerPizza(){
    var msg = window.document.getElementById('resposta')
    var pedecos= window.document.getElementById('txtPizza')
    var contador = 1
   /* while (contador <= pedecos.value){
        msg.innerHTML+=` <br/>Pedaço ${contador}`
        contador++
    }*/

    do {
        msg.innerHTML+=` <br/>Pedaço ${contador}`
        contador++
    }while(contador <= pedecos.value)
}