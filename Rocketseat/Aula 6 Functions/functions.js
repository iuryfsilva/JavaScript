//Escopo da função e seus parametros segundoa decumentação 

function myFunction(objeto){//recebe um parametro que será decladado em seguida
    objeto.make = 'Toyota';
    objeto.model = 'Corola';
}

let myCar = { make: 'Honda', model: 'Accord', year: 1998};//obj que sera passado como parametro à myFunction

var x,y,z;

x = myCar.make;
z = myCar.model;
console.log(z);

console.log(x);

myFunction(myCar);
y = myCar.make;
z = myCar.model;

console.log(y);
console.log(z);
console.log(x);