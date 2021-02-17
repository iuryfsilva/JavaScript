//if e else

let temperature = 36.5;

if(temperature >= 37){
  console.log("Temperatura MUITO ALTA");
}else if(temperature == 36.5){
  console.log("Temperatura media");
}else{
  console.log('Normal');
}

//switch case

let expression = 'a';

switch(expression){
  case 'a':
    console.log("a");
    break;
  case 'c':
    console.log("c");
    break;
  default:
    console.log("default");
    break
}


// throw

function sayMyName(name = ""){
  if(name === ""){
    throw new Error("O nome não pode ser vazio");
  }
  console.log(name);
}

//try ... catch

try {
  sayMyName("iury");
} catch (error) {
  console.log(error);
}

console.log('apos a função de erro');





