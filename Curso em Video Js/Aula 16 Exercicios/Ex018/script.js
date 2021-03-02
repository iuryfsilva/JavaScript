let  arrayNumbers = [];

function addOnArray() {
    let formNumber = document.getElementById('txtNumero');
    let number = Number(formNumber.value);

    let valuesOfArray = document.getElementById('slctValoresArray');
    if ((number >= 1 && number <= 100) && (arrayNumbers.indexOf(number) == -1)) {
        arrayNumbers.push(number);
        //console.log(arrayNumbers);
        addNewItemToSelect(valuesOfArray, number);
    } else {
        window.alert('Valor inválido ou já existente na lista.');
    }

    //apaga o ultimo valor digitado da caixa de texto
    formNumber.value = "";

    //Leva o cursor do mouse para a caixa de texto novamnte automaticamente
    formNumber.focus();
}

function addNewItemToSelect(valuesOfArray, informedValue) {
    let item = document.createElement('option');
    item.text = `Valor ${informedValue} adicionado.`;

    //para Linguagem server side identifica cada valor do select
    item.value = `valuesOFArray ${arrayNumbers.length}`;

    //add um elemento filho ao select
    valuesOfArray.appendChild(item);
}

function showAnalisis() {
    if (arrayNumbers.length != 0) {
        let formResult = document.getElementById('result');

        let text = document.createTextNode(`Ao todo, temos ${arrayNumbers.length} números cadastrados.`);
        createParagraph(formResult, text);

        //arrayNumbers.sort();
        //console.log(arrayNumbers);

        text = document.createTextNode(`O maior valor informado foi ${arrayNumbers[arrayNumbers.length - 1]}.`);
        createParagraph(formResult, text);

        text = document.createTextNode(`O menor valor informado foi ${arrayNumbers[0]}.`);
        createParagraph(formResult, text);

        text = document.createTextNode(`Somando todos os valores temos ${sumArrayValues()}.`);
        createParagraph(formResult, text);

        text = document.createTextNode(`A media dos valores é ${sumArrayValues() / arrayNumbers.length}.`);
        createParagraph(formResult, text);

    } else {
        window.alert("Insira os valores acima primeiro!");
    }

}

//cria tag <p></p> dinamicamente  com o texto recebido como parametro
function createParagraph(formResult, text) {
    const paragraph = document.createElement("p");

    //usando o appendChild tenho um ganho em performace em comparação com o innerHTML
    paragraph.appendChild(text);
    formResult.appendChild(paragraph)
}

function sumArrayValues() {
    let returnValue = 0;
    for (let counter = 0; counter < arrayNumbers.length; counter++) {
        returnValue += arrayNumbers[counter];
    }
    return returnValue;
}