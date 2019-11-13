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
        var genero= ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto') //criando foto dinamicamente com js

        if(fsex[0].checked){  //buscando elementos radio (sexo selecionando)
            genero='Homem'
            if(idade >=0 && idade <10){
                // crianca
                img.setAttribute('src', 'menino.png')
            }else if(idade <21){
                // jovem
                img.setAttribute('src', 'adlmenino.png')

            }else if (idade <50){
                //adulto
                img.setAttribute('src','homenadulto.png')
            }else{
                // idoso
                img.setAttribute('src','idoso.png')
            }
        }else{
            genero='Mulher'
            if(idade >=0 && idade <10){
                // crianca
                img.setAttribute('src','menina.png')

            }else if(idade <21){
                // jovem
                img.setAttribute('src','adlmenina.png')

            }else if (idade < 50){
                //adulta
                img.setAttribute('src','mulheradulta.png')
            }else{
                // idosa
                img.setAttribute('src','idosa.png')
            }
        }
    

    
        res.style.textAlign='center' //ajustando o css pelo JS
       // res.innerHTML=`${img.src} <br/>` não funcionou 
        res.innerHTML+=`${genero} idade ${idade}`
        res.appendChild(img)
    }