function carregar() {
    let mensagem = window.document.getElementById("msg");
    let imagem = window.document.getElementById("imagem");
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getUTCMinutes();
    
    mensagem.innerHTML = `Agora são <strong>${hora} horas e ${minutos} minutos</strong>`;
    hora = 11;
    if(hora >= 0 && hora < 12){
        //Bom dia
        imagem.src = "/Aula 12 Exercicios/Ex114/Imagens/morning.png";
        window.document.body.style.background = '#f8b754';
    }else if(hora <= 18){
        //Boa tarde
        imagem.src = "/Aula 12 Exercicios/Ex114/Imagens/afternoon.png";
        document.body.style.background = '#d74458';
    }else{
        //Boa noite 
        imagem.src = "/Aula 12 Exercicios/Ex114/Imagens/nigth.png";
        window.document.body.style.background = '#012931';
    }
}
