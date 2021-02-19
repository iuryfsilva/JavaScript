// criar app de frases motivacionais

//Function statement
function createPhrases(){
  console.log('Estudar é muito bom')
  console.log('Paciencia e persistencia')
  console.log('Lororiririroileoriro')  
}

//execulte, ru, call, invoke
createPhrases()


//function expression
//function anonymous
//paramenters
const sum = function(number1, number2){
  let total = (number1 + number2)  
  return total
}

sum(1,3)//arguments

let number1 = 22,number2 = 3

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1,number2)}`)

//função liquidifiucador
function fazerSuco(fruta1, fruta2){
  let copo = fruta1 + fruta2
  return copo
}

let suco = fazerSuco('uva', 'laranja')
console.log(suco)

//function scope
let subject = 'Create Video'

function createThink(subject){
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)


//function hoisting
sayMyName()

function sayMyName(){
  console.log('Iury')
}

//Arrow function

const digaMyName = () =>{
  console.log('Iury')
}

digaMyName()


//Arrow function with parameters

const saymyName = (name) =>{
  console.log(name)
}

saymyName('Iury')


//Callback function - função recursiva

function sayMyname(name){
  name()
}
sayMyname(  
  () => {
    console.log('Estou em uma callback')
  }
)


/*
  Function() constructor

  *expressão new
  *criar um novo obj
  *this keyword

*/

function Person(name){ //A classe não precisa ter letra maiuscula mas é boa prática
  this.name = name
  this.walk = () => {
    return this.name + " está andando"
  }
}
const jao = new Person("Jao")//Instanciação de um novo obj da classe Person
const iury = new Person("Iury")
console.log(jao.walk())
console.log(iury.walk())


//Função contructor  cria um obj do tipo data GMT

let date = new Date("2021-02-14")

console.log(date)


