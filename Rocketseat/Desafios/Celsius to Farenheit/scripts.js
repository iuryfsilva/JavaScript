/* ###Celsius em Fahrenheit 
  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32

*/

function temperatureConverter(string) {
  let conversionType = window.prompt("Informe a qual o tipo de conversão: 1 - °F -> °C ou 2 - C -> °F");

  switch (Number(conversionType)) {
    case 1:
      let celsiusValue = ((Number(string) - 32) * 5/9);
      window.alert(`O valor em Fahrenheit é: ${celsiusValue.toFixed(2)}`);
      break;

    case 2:
      let fahrenheitValue = ((Number(string)* 9/5) + 32);
      window.alert(`O valor em Celsius é: ${fahrenheitValue.toFixed(2)}`);
      break;

    default:
      throw new Error('O tipo de conversão informado é inválido!');
      break;
  }
}

let string = window.prompt("Informe o valor a ser convertido: ");
try {
  temperatureConverter(string);
} catch (error) {
  window.alert(error);
}