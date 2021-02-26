function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtAno');
    var res = document.querySelector('div#result');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        //window.alert(`Funcionou!! ${ano}`);
        var fsex = document.getElementsByName('radSexo');
        var idade = ano - Number(fano.value);
        var gênero = '';

        //cria uma tag img dinâmicamente
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        //Testes de genero e idade
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 4) {
                //baby
                img.setAttribute('src', 'foto_baby.png')
            } else if (idade < 18) {
                //boy
                img.setAttribute('src', 'foto_boy.png')
            } else if (idade < 70) {
                //man
                img.setAttribute('src', 'foto_man.png')
            } else {
                //oldman
                img.setAttribute('src', 'foto_oldman.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 4) {
                //baby
                img.setAttribute('src', 'foto_baby.png')
            } else if (idade < 18) {
                //girl
                img.setAttribute('src', 'foto_girl.png')
            } else if (idade < 70) {
                //woman
                img.setAttribute('src', 'foto_woman.png')
            } else {
                //oldwoman
                img.setAttribute('src', 'foto_oldwoman.png')
            }
        }

        //Centraliza o texto de result via js
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;

        //add o elemento imagem apos o texto acima
        res.appendChild(img);
    }

}