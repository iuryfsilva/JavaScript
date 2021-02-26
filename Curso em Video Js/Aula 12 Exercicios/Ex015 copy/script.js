function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = document.getElementById('txtAno');
    var result = document.querySelector('div#result');

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let formularioSexo = document.getElementsByName('radSexo');
        let idade = ano - Number(formularioAno.value);
        let genero = '';

        //cria uma tag img dinâmicamente
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        console.log(formularioSexo)
        //img.setAttribute('src', "afternoon.png");


        if (formularioSexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 4) {
                //baby
                img.setAttribute('src', "foto_baby.png");
            } else if (idade < 18) {
                //girl
                img.setAttribute('src', "foto_girl.png");
            } else if (idade < 70) {
                //woman
                img.setAttribute('src', "foto_woman.png");
            } else {
                //oldwoman
                img.setAttribute('src', "foto_oldwoman.png");
            }
        } else if (formularioSexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 4) {
                //baby
                img.setAttribute('src', "foto_baby.png");
            } else if (idade < 18) {
                //boy
                img.setAttribute('src', "foto_boy.png");
            } else if (idade < 70) {
                //man
                img.setAttribute('src', "foto_man.png");
            } else {
                //oldman
                img.setAttribute('src', "foto_oldman.png");
            }
        }
        //Centraliza o texto de result via js
        result.style.textAlign = "center";
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        //add o elemento imagem apos o texto acima
        result.appendChild(img);

    }

}

