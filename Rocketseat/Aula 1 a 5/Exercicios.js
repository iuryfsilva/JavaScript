//1.Declare uma variável de nome weight
let weight

//2.Que tipo de dado é a variavelacima?
console.log(typeof weight)//vai retornar undefined pouis ainda não foi inicializada

/*
  3.Declare uma variável e atribua valores para cada um dos dados:
    -name: String
    -age: Number(integer)
    -stars: Number(float)
    -isSubscribed: Boolean
*/

let name = 'Iury', age = 26, stars= 5.8, isSubscribed = true

/*
  4.A variável student abaixo é de um tipo de dado?

  4.1 Atribua a ela as mesmas proprieddes e valores do exercicio 3.

  4.2 Mostre no console a seguinte mensagem:
        <name>de idade <age> pesa <weight>kg.

*/

let student = {};//Essa variável é do tipo object
console.log(typeof student)
student = {
    name: 'Iury',
    age: 26,
    weight: 74.9,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)


/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja , somente Array vazio
*/

let students = []

/*
  6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o obj, mas usar o obj criato e inserir ele no Array)
*/
students = [
    student
]
console.log(students)

/*
  7.Coloque  no console o valor da posição zero do arry acima
*/

console.log(students[0])

/*
  8.Crie um novo student e coloque na posição 1 do Array students
*/
const jao = {
    name:"Jao",
    age: 20,
    weight: 55.7,
    isSubscribed: false
}
students[1] = jao

console.log(students)

/*
  9.Sem rodar o código respondaqual é a resposta do codigo abaixo e porque? Apos sua resposta, rode o codigo e veja se voce acertou.

  console.log(a) - a foi elevado(criado mas não possui tipo - hoisting) sera apresentado undefined
  var a = 1 aqui a vai ser inicializado seria eq a subir o "var a" e em seguida após o 
            "console.log()" o "a=1"    
*/

console.log(a)
var a = 1
console.log(a)

/*
  10.Sem rodar o código responda qual é a resposta do codigo abaixo e porque? Apos sua resposta, rode o codigo e veja se voce acertou.

  console.log(a) - Vai acontecer um erro de referencia pois olet não sofre elevação  ou hoisting
  let a = 1     
*/
