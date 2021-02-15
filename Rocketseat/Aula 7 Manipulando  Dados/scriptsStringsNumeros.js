
//Manipulando Strings e numeros

//Trasformar String em número e o Número em String

let string = '1234'
console.log(Number(string))
//window.alert(Number(string))
let number = 54321
//window.alert(String(number))
console.log(String(number))

// contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
number = 43334345345345.342212
console.log(String(number).length)


//transformar um numero quebrado com 2 cassa decimais e trocar o ponto por virgual

console.log(number.toFixed(2).replace('.', ','))//apresenta o number somente com duas cas e troca o ponto por virgula usando o .replace(oque esta, oque vai cusbstituir)

//Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.
word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())


