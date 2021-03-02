let agora = new Date();//acessa as informaçoes de data e hora do sistema que esta rodando o app
var hora = agora.getHours();
console.log(`Agora são ${hora} horas`);
if(hora < 12){
    window.alert("Bom dia");
    console.log('Bom dia');
}else if(hora <= 18){
    window.alert("Boa tarde");
    console.log('Boa tarde');
}else{
    window.alert("Boa noite");
    console.log('Boa noite');
}