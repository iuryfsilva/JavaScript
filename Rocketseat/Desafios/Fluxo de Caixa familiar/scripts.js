/* ## Sistema de gastos familiar

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    -receitas:[]
    -despesas:[]

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagemse a familía está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
  incomes: [400, 200, 1056.42342],
  expenses: [350, 143, 150, 87.654234235],
};

function calculateBalance(family) {
  const calculateIncomes = sumArrayValues(family.incomes);
  window.alert('Receita total: ' + calculateIncomes.toLocaleString('pt-Br', {style: 'currency',currency:'BRL'}));
  
  const calculateExpenses = sumArrayValues(family.expenses);
  window.alert('Despesa total: ' + calculateExpenses.toLocaleString('pt-Br', {style: 'currency',currency:'BRL'}));

  const balance = calculateIncomes - calculateExpenses;
  
  window.alert(`O saldo ${balance.toLocaleString('pt-Br', {style: 'currency',currency:'BRL'})} é ${balance >= 0 ? "positivo" : "negativo"}`);

  //console.log(`O saldo ${balance.toFixed(2)} é ${balance >= 0 ? "positivo" : "negativo"}`);
}

function sumArrayValues(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

console.log(family);
calculateBalance(family);
