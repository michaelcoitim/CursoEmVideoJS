//fatorial recursiva chamada da de uma função dentro da dela mesma
//recursividade
function fatorial (n){
    if(n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(1))

/**
 * n!= n x (n-1)!*/