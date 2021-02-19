//Exemplos a baixo segundo a documentação disponível em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es

//Declaração de uma function
function square(numero) {
  return numero * numero;
}

//Expressão de função

//Funcção anônima
var quadrado = function (numero) {
  return numero * numero;
};
var x = quadrado(4); //x recebe o valor 16

//Recursão em uma function
var fatorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
console.log(fatorial(5));

//forma mais explicita de recursão
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var a, b, c, d, e;
a = factorial(1);
b = factorial(2);
c = factorial(3);
d = factorial(4);
e = factorial(5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//Espression functions São convinientes ao passar uma função como argumnto para outra
function map(f, a) {
  let result = []; //cria um novo Array

  for (let incremento = 0; incremento != a.length; incremento++) {
    result[incremento] = f(a[incremento]);
  }
  return result;
}

console.log(
  map(
    function (x) {
      return x * x * x;
    },
    [0, 1, 2, 5, 10]
  )
);

//Escopo e a pilha de função

//Recursão
var foo = function bar() {
  // declaracoes
};

/*dentro do corpo da função, todos a seguir são equivantes 
    -bar()
    -arguments.calle()
    -foo()
 */

//Uma função recursiva e uma chamada
function loop(x) {
  if (x >= 10) {
    return;
  }
  console.log(x);
  loop(x + 1);
}

loop(0);

//conseguir todos nos da estrutura  de uma arvore (por exemplo o DOM)
function walkTree(node) {
  if (node == null) {
    return;
  }
  for (var controle = 0; controle < node.childNodes.length; controle++) {
    walkTree(node.childNodes[controle]);
  }
}

//O comportamento da pilha pode ser vista a seguir no exemplo:
function pillhaDeFuncoes(i) {
  if (i < 0) return;
  console.log("Begin:" + i);
  pillhaDeFuncoes(i - 1);
  console.log("end:" + i);
}
pillhaDeFuncoes(4);

//Funções anininhadas
function addSquare(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

a = addSquare(2, 3);
b = addSquare(3, 4);
c = addSquare(4, 5);

console.log(a);
console.log(b);
console.log(c);

//Clousure
function fora(x) {
  function dentro(y) {
    return x + y;
  }
  return dentro;
}
//Pense nisso como: receba uma função que add 3 ao que quer que você repasse para ela
fn_inside = fora(3);
result = fn_inside(5);
console.log(result); //imprime 8

result1 = fora(3)(5);//passa o valor 3 para a função mais externa e o valor 5 para a mais interna
console.log(result1); //imprime 8

//Multiplas funções aninhadas
function A(x) {
  function B(y) {
    function C(z) {
      alert(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); //Exibe um alerta com o valor 6 (1 + 2 + 3)


//Conflito de nome
function fora(){
  var x = 10;
  function dentro(x){
    return x;
  }
  return dentro;
}
result = fora()(20);//retorna 20 em vez de 10
console.log(result); //imprime 20
