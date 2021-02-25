function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = document.getElementById('txtAno');
    let result = document.querySelector('div#result');

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        //window.alert(`Funcionou!! ${ano}`);
        let formlarioSexo = document.getElementById('radSexo')
        let idade = ano - Number(formularioAno.value);
        let genero = '';

        //cria uma tag img dinâmicamente
        let imagem = document.createElement('imagem');
        imagem.setAttribute('id', 'foto');

        if (formlarioSexo[1].cheked) {
            genero = 'Homem';
            verificarIdade(genero, idade);
        } else if (formlarioSexo[0].cheked) {
            genero = 'Mulher';
        }
        //Centraliza o texto de result via js
        result.style.textAlign = "center";
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
function verificaIdade(genero, idade){
    if (idade >= 0 && idade < 2) {
        //baby
    } else if (idade >= 2 && idade <18) {
        //boy or girl
        if (genero.toUpperCase === '') {
            //boy
        } else {
            //girl
        }
    } 
}