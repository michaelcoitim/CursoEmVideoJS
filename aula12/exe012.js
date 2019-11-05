/** Programa Saudações 
 * pega hora e de acordo com o horario da uma saudação 
 */
var agora = new Date() //clase que busca as horas 
var horas= agora.getHours() 
console.log(`Agora é ${horas}`)
if(horas <=12){
    console.log('bom dia')
}else if (horas <18){
    console.log('Boa tarde')

}else{
    console.log('Boa noite')
}