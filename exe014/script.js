function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora=5
    
    msg.innerHTML =`Agora são ${hora} horas,`

    if(hora >=0 && hora < 12){
        //bom dia 
        img.src= 'manha.png'
        document.body.style.background='#b5625e'
        msg.innerHTML +='<br/> Bom dia'
    }else if (hora  >= 12 && hora <= 18){
        // boa tarde
        document.body.style.background='#c54d01'
        img.src='tarde.png'
        msg.innerHTML +='<br/> Boa Tarde'
    } else {
        // boa noite
        img.src='noite.png'
        document.body.style.background='#353232'
        msg.innerHTML +='<br/>Bao Noite'
    }


}