//Estrutura de repetição 


//for
//break - para a execução do loop
//continue - pula a execução do momento

for(let i = 12; i >= 0; i--){
  if(i === 7){
    console.log('Aqui chegou 7 continua para proxima iteração');
    continue;
  }
  if(i === 2){
    console.log('Aqui chegou 2 para o loop');
    break;
  }
  console.log(i);
   
}

// while
let condition = 0;
console.log(condition);


while (condition < 10) {
  console.log(condition);
  ++condition;
}

//for...of

let name = 'Iury';
let names = ['jao','paulo','tulio'];

for(let char of name){//pega cada caracter de name e atribui a variavel char que é impressa na linha abaixo
  console.log(char);
}

for(let name of names){//pega cada string do array e atribui a variavel name que é impressa na linha abaixo
  console.log(name);
}

let number = 123455;
let numbers = [12,3122,432341];

//O bloco abaixo não será execultado pois o number não é iterável.
/* for(let num of number){
  console.log(num);
} */

for(let number of numbers){//pega cada numero de numbers e atribui a variavel number que é impressa na linha abaixo
  console.log(number);
}


//for ....in

let person = {
  name:'jao',
  age: 30,
  weigth: 88.6
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}