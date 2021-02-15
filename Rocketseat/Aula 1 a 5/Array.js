// Array

const animals = [
    'Lion', 
    'Cat',
    {//essa maneira misturando objetos com strings não é recomendado
        name: 'Snake',
        age: 4
    }
]

//Acessar valores dentro do Array

console.log(animals[2].name)
console.log(animals[2].age)