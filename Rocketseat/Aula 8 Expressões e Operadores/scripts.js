/* 
  Expressoões e Operadores

  - Expressions -Buscar sempre usar o ";"
  - Operators
    -unary
    -binary
    -ternary
    
*/

let number = 1;

(function(){
  console.log("Função auto execultável")
})();

//Operador binario
console.log(number + 1);

//Operador ternario
console.log(100 % 2 == 0 ? "Par": "Ímpar");

//Operador unario
console.log(++number);

/* 
  new
    -Left-hand-side expression
    -criar um novo objeto
*/

let name = new String("Iury");
let age = new Number(26);
console.log( name, age);
name.surName = "Silva";//cria um novo atributo no obj name
console.log( name,name.surName, age);


let data = new Date('2021-02-16');
console.log(data);

//Operador delete
const person = {
  name: 'Iury',
  age: 36
};

console.log(person);

delete person.age;//deleta somente o atributo que está informado

console.log(person);

//Operador de String 

//comparison(comparação)
console.log('a' == 'a');

//concatenation (concatenação)
//Retorna a união de duas Strings
console.log('a' + "b");

let alpha = 'alpha';
alpha += 'bet';
//alpha *= 's' NÃO FUNCIONA GERA UM NaN

console.log(alpha);

console.log(alpha + 321);


//Teste truthy

console.log(Infinity ? "Verdadeiro": "Falso");
console.log();
