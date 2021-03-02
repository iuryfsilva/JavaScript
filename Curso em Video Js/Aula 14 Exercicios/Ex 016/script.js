function contar() {
    let formularioInicio = document.getElementById('txtInicio');
    let formularioFim = document.getElementById('txtFim');
    let formularioPasso = document.getElementById('txtPasso');
    let resultado = document.getElementById('result');

    console.log(formularioInicio.typeOf);
    if (formularioInicio.value.length == 0 || formularioFim.value.length == 0 || formularioPasso.value.length == 0) {
        window.alert(`Não pode realizar a contagem`);
    } else if (formularioPasso.value == 0) {
        window.alert("Passo inválido considerando passo 1");
        formularioPasso.value = 1;
        selecionaContagem(formularioInicio, formularioFim, formularioPasso, resultado);
    } else {
        selecionaContagem(formularioInicio, formularioFim, formularioPasso, resultado);
    }
    resultado.innerHTML += "\u{1f3c1}"; 
}

function selecionaContagem(formularioInicio, formularioFim, formularioPasso, resultado) {
    let inicio = Number(formularioInicio.value);
    let fim = Number(formularioFim.value);
    let passo = Number(formularioPasso.value);
    resultado.innerHTML = ' ';
    if (inicio > fim) {
        contaDecrescente(inicio, fim, passo, resultado);
    } else if (inicio < fim) {
        contaCrescente(inicio, fim, passo, resultado);
    }
}

function contaDecrescente(inicio, fim, passo, resultado) {
    resultado.style.textAlign = 'center';
    for (let control = inicio; control >= fim; control -= passo) {
        resultado.innerHTML += `${control} \u{27A1} `;
    }
}

function contaCrescente(inicio, fim, passo, resultado) {
    resultado.style.textAlign = 'center';
    for (let control = inicio; control <= fim; control += passo) {
        resultado.innerHTML += `${control} \u{27A1} `;
    }
}