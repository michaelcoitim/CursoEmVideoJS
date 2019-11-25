// função (com parâmetro) para calcular se o numero é par ou impar

function parimpar (n){
    if(n%2 ==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimpar(5) // camada da função passando parâmetro , e guardando seu valor na vareavel

console.log(res) // mostra o resultado salvo na vareavel res 