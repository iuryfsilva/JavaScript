function gerarTabuada() {
    let numero = document.getElementById('txtNumero');
    let tabuada = document.getElementById('slctTabuada');

    if (numero.value.length == 0) {
        window.alert('Número não informado!');
    } else {
        tabuada.innerHTML = '';
        let valorNumero = Number(numero.value);
        let operacao = document.getElementsByName('radOperacao');
        
        //Verifica qual operação foi selecionada e chama sua respectiva função de calculo
        verificaOperacao(operacao, valorNumero, tabuada);
    }
}

function verificaOperacao(operacao, valorNumero, tabuada){
    if(operacao[0].checked){
        tubuadaSoma(valorNumero, tabuada);
    }else if(operacao[1].checked){
        tubuadaSubtracao(valorNumero, tabuada);
    }else if(operacao[2].checked){
        tubuadaProduto(valorNumero, tabuada);
    }else if(operacao[3].checked){
        tubuadaQuociente(valorNumero, tabuada);
    }
}

//Calcula tabuada soma
function tubuadaSoma(valorNumero, tabuada) {
    for (let controle = 1; controle <= 10; controle++) {
        let item = document.createElement('option');
        item.text = `${valorNumero} + ${controle} = ${controle + valorNumero}`;
        
        //para liguagem  server side esse value identifica cada valor do select
        item.value = `tabuada${controle}`;
        
        //Add um elemento filho á tabuada 
        tabuada.appendChild(item);
    }
}

//Calcula tabuada subtracao
function tubuadaSubtracao(valorNumero, tabuada) {
    for (let controle = 1; controle <= 10; controle++) {
        
        //cria um novo elemento a ser add na select posteriormente
        let item = document.createElement('option');
        item.text = `${valorNumero} - ${controle} = ${valorNumero - controle}`;
        
        //para liguagem  server side esse value identifica cada valor do select
        item.value = `tabuada${controle}`;
        
        //Add um elemento filho á tabuada 
        tabuada.appendChild(item);
    }
}

//Calcula tabuada produto
function tubuadaProduto(valorNumero, tabuada) {
    for (let controle = 1; controle <= 10; controle++) {
        let item = document.createElement('option');
        item.text = `${valorNumero} X ${controle} = ${controle * valorNumero}`;
        
        //para liguagem  server side esse value identifica cada valor do select
        item.value = `tabuada${controle}`;
        
        //Add um elemento filho  tabuada 
        tabuada.appendChild(item);
    }
}

//Calcula tabuada quociente
function tubuadaQuociente(valorNumero, tabuada) {
    for (let controle = 1; controle <= 10; controle++) {
        let item = document.createElement('option');
        item.text = `${valorNumero} / ${controle} = ${valorNumero / controle}`;
        
        //para liguagem  server side esse value identifica cada valor do select
        item.value = `tabuada${controle}`;
        
        //Add um elemento filho á tabuada 
        tabuada.appendChild(item);
    }
}