let num = [5, 3, 1, 2];

console.log(num);

num[4] = 6;
console.log(num);

//empura o valor entre parenteses na ultima posição do vetor
num.push(7);
console.log(num);

console.log(num.length);

//organiza de forma crescente os elementos do array
console.log(num.sort());

//percorre o array
for(let posição = 0; posição < num.length; posição++){
    console.log(`A posição ${posição} tem o valor ${num[posição]}`);
}
console.log('');


//For in
for(let posição in num){
    console.log(`A posição ${posição} tem o valor ${num[posição]}`);
}

//buscar um valor no vetor
console.log(num.indexOf(7));

//retorna o valor -1 para indicar que o valor buscado no parenteses do indexOf não esta no vetor
console.log(num.indexOf(4));

console.log('');


//buscando uma string no array
let arrayString = ['palavra', 'texto'];

arrayString.indexOf(palavra)

arrayString.indexOf(palavra)? console.log("Tem a string palavra no array"): console.log('não tem a string palavra no array');