//Calcula o fatorial de maneira recursiva
function calculaFatorial(numero){
   if(numero == 1){
       return 1;
   }else{
       return calculaFatorial(numero-1) * numero;
   }
}

console.log(calculaFatorial(5));
/* 
    5! = 5x4x3x2x1 = 120
    5! = 5x4!

    n! = nx(n-1)!
    1! = 1
 */