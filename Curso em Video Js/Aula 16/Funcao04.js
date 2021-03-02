function calculaFatorial(numero){
    let fatorial = 1;
    for(let controle = numero; controle > 1; controle--){
        fatorial *= controle;
        console.log(controle + " ");
    }
    return fatorial;
}

console.log(calculaFatorial(5));
//5! = 5x4x3x2x1 = 120