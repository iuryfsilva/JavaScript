let agora = new Date();
let diaDaSemana = agora.getDay();
/* 
    O js retorna para esse metodo um numero correspondente ao dia da semana
    conforme abaixo.

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sabado
*/

//diaDaSemana = 7;

//Retorna um numero correspondente ao dia da semana
console.log(diaDaSemana);

switch (diaDaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("[ERRO] Dia inválido");
        break;
}