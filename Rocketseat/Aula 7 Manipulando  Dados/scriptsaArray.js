//Manipulando Arrays

// Verificar se o texto contém a palavra AMOR

let phrase = "I want to live a love"
console.log(phrase.includes("love"))//O includes é case sensitive

//Separe um teto que contém espaços em um novo array onde cada teto é uma posiçãp do array. Depois disso, transforme o array em um texto  e onde eramespaços, coloque _

let myArray = phrase.split(" ")//O split separa a string pelovalor informado  entre aspas
console.log(myArray)

let phraseWithUndercore = myArray.join("_")//une os valores do array em uma string separadas por "_"
console.log(phraseWithUndercore)

let otherMethod  = phrase.replace(' ','_')//nesse caso só substitui o primeiro " " da string
console.log(otherMethod)


//Criar um Array com construtor
myArray = ['a','b','c']
console.log(myArray)

myArray = new Array('a','b','c')// Usando o construtor
console.log(myArray)

// Contar elementos de um array

let elementosArray = [
    "a", 
    {type: "array"},
    function(){return "Alô"}
]


console.log(elementosArray[2]())//Aqui nessa linha é selecionada a pposição 2 do vetor e com o () mando execultar a função que me retorna a string Alô no console

console.log(elementosArray.length)//aqui conta  quantos elementos tem no array

console.log(elementosArray)//aqui exibe o arry no console


//Transformar uma cadeia de caractyeres em elementos de um array

word = 'manipulação'
console.log(Array.from(word))//converte uma string em elementos de um array


//Manipulando Arrays

let techs = ["html", "CSS", "Js"]

//adicionar um item no fim 
console.log(techs)
techs.push("nodejs")//adiciou o elemento "nodejs" no final do array

//add no começo
console.log(techs)
techs.unshift("SQL")

//remover do fim
console.log(techs)
techs.pop()

//remover do começo
console.log(techs)
techs.shift()

//pegar somente alguns elementos do array

console.log(techs.slice(1,3))//retira somente 3 elementos apartir da posição 1

//remover 1 ou mais items em qualuer posição do array

techs.splice(1,1)//aqui eu informo qualo inde do array  e quantos eu quero tirar

//encontrar a posição de um elemento no array

techs = ["nodejs", "html", "CSS", "Js"]

let index = techs.indexOf("nodejs") 
console.log("Posição nodejs: " + index)
techs.splice(index + 1, 2)//removeu os elemntos do index+1 e o elemento da posuição 2 pois foram dois elementos ao total

console.log(techs)