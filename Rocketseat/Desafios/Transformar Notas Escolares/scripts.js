/*### Transformar notas escolares 
Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

  -de 90 para cima - A
  -entre 80 - 89   - B
  -entre 70 - 79   - C
  -entre 60 - 69   - D
  -menor que 60    - F
  
*/

function transformaNota() {
  let nota = window.prompt("Informe a nota a ser transformada. ");
  let notaTranformada;

  if (nota < 60 && nota >= 0) {
    notaTranformada = "F";
  } else if (nota >= 60 && nota <= 69) {
    notaTranformada = "D";
  } else if (nota >= 70 && nota <= 79) {
    notaTranformada = "C";
  } else if (nota >= 80 && nota <= 89) {
    notaTranformada = "B";
  } else if (nota >= 90 && nota <= 100) {
    notaTranformada = "A";
  } else {
    throw new Error("Nota Inválida Informada!");
  }
  window.alert(`A nota transformada é ${notaTranformada}`);
}

try {
  transformaNota();
} catch (error) {
  window.alert(error);
}
