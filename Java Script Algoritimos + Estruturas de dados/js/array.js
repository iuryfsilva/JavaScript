/* //Trabalhando com arrays

var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 45.5;
avgTemp[2] = 38.4;
avgTemp[3] = 23.8;
avgTemp[4] = 33.3;

//Percorrendo cada posição do vetor
for(let position of avgTemp){
    console.log(position);
}

//Criando e inicializando arrays
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);//passando o tamanho do array
var daysOfWeek = new Array('Sunday', 'Mouyoubi', 'Monday');//passando os valores das posiçoes do array


daysOfWeek[0] = 'Wendsday';

//Conseferindo o tamanho do array
console.log(daysOfWeek.length);

//Acessando elementos do array via iteração
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday', 'Saturday'];

for(let controle = 0; controle < daysOfWeek.length; controle++){
    console.log(daysOfWeek[controle]);
}


var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let controle = 3; controle < 20; controle++){
    fibonacci[controle] = fibonacci[controle - 1] + fibonacci[controle - 2];
}
console.log(fibonacci);

for(let controle = 0; controle < fibonacci.length; controle++){
    console.log(fibonacci[controle]);
}


//Metodos de inserção de elementos no array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

numbers[10] = 10;//adiciona a posição 10 ao array e a tribui um valor
console.log(numbers);

numbers[numbers.length] = 11;//adiciona a posição referente ao tamanho do array ao array e a atribui um valor
console.log(numbers);

numbers.push(12)//add o valor informado na posição seguinte ao ultimo elemento no array
console.log(numbers);

numbers.unshift(-1);//add o valor informado na posição anterior a primeira do elemento
console.log(numbers);

//Metodos de remoção de elementos no array
numbers.pop();//remove o ultimo elemento do array
console.log(numbers);

numbers.shift();//remove o primeiro elemento do array
console.log(numbers);

//Inserir e remover elementos de um array a partir de uma posição especifica

//remove uma fatia do arry desde a posição tres contando 4 elementos
numbers.splice(3, 4);
console.log(numbers);

//add apartir da posição 3, o 0 diz que não ira remover nada, 
//os demais são os valores a serem add nas posições seguinte a 3
numbers.splice(3, 0, 456, 654, 987, 123);
console.log(numbers);


//Arrays Bidimensionais
var avgTempWeek = [];

var avgTempWeek1 = [31.9, 45.5, 38.4, 23.8, 33.3, 25.3, 65.1];
var avgTempWeek2 = [34.9, 46.5, 31.4, 25.8, 73.3, 29.3, 65.3];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek);

console.log(avgTempWeek[1][4]);

//Iterando arrays Bidimensionais
for (let indexX = 0; indexX < avgTempWeek.length; indexX++) {
   for (let indexY = 0; indexY < avgTempWeek[indexX].length; indexY++) {
       console.log(avgTempWeek[indexX][indexY]);
   }
   console.log(" "); 
}

//Arrays Tridimensionais
var month = [];
var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek3 = [78, 87, 65, 45, 12, 32, 10];
var avgTempWeek4 = [1, 2, 3, 4, 5, 6, 7];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log(month);

//Iterando arrays Bidimensionais
for (let indexX = 0; indexX < month.length; indexX++) {
    for (let indexY = 0; indexY < month[indexX].length; indexY++) {
        for (let indexZ = 0; indexZ < month[indexX][indexY].length; indexZ++) {
            console.log(month[indexX][indexY][indexZ]);
        }
        console.log(" "); 
    }
    console.log(" "); 
 }
 

 */

 var teste = 1 2 3;
