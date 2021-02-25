let idade = 56;
if(idade < 16){
    console.log("Não Vota");
}else if(idade < 18 || idade >= 65){
    console.log("Voto Opcional");
}else if (idade >= 18 && idade < 65){
    console.log("Voto Obrigatorio");
}