/** /dias da semanas */

var agora = new Date()
var diaSem= agora.getDay() 

//diaSem=10 // teste dia 
    
/* dias da semana JS
    .getDay busca o dias da semana 
    0- Domingo
    1- Segunda 
    2- Terça 
    3- Quarta 
    4- Quinta
    7- Sexta
    6- Sabado 
 */
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexxxtou, Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido!')
}