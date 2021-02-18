/* 
    Object Rocketseat e developer.mozilla

    *object
    *null
        -atributos
        -metodos
    
    *sintaxe
        {
        propriedade:"valor", 
        caracteristica: "valor"
        }
*/

console.log({
  name: "iury",
  idade: 26,
  andar: () => {
    console.log("andar");
  },
});

//Exemplo object
const person = {
  name: "Jao",
  age: 30,
  weigth: 88.5,
  isAdmin: true,
};

//Acessando atributos de um object
console.log(`${person.name} tem ${person.age} anos`);

let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

meuCarro["semPropriedade"]; //posso acessar os atributos do obj usando []
//vai imprimir undefined pois a prorpiedae foi declada mas não inicializada
console.log(meuCarro["semPropriedade"]);

//Nome de propriedade de objteos em js podem ser da seguinte maneira
var meuObj = new Object(),
  str = "minhaString",
  aleat = Math.random(),
  obj = new Object();

meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criação"] = "String com espaço";
meuObj[str] = "valor de string";
meuObj[aleat] = "Numero aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "mesmo uma string vazia";

console.log(meuObj);

//Usando a notação de colchetes no for...in
function mostrarPropriedades(obj, nomeDoObj) {
  let resultado = "";
  for (let propriedade in obj) {
    if (obj.hasOwnProperty(propriedade)) {
      resultado +=
        nomeDoObj + "." + propriedade + " = " + obj[propriedade] + "\n";
    }
  }
  return resultado;
}

console.log(mostrarPropriedades(meuCarro, "meuCarro"));

//Recebendo um array com as chaves ou nomes das propriedades do objeto
const object1 = {
  nome: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
console.log(Object.getOwnPropertyNames(object1));

//Essa fu7nção pode ser útil para revelar propriedades escondidas(propriedads na cadeia de protótipos que não são acessiveis atraves do objeto)
function listarTodasAsPropriedades(obj) {
  let objectASerInspecionado;
  let resultado = [];

  for (
    objectASerInspecionado = 0;
    objectASerInspecionado !== null;
    objectASerInspecionado = Object.getPrototypeOf(objectASerInspecionado)
  ) {
    resultado = resultado.concat(
      Object.getOwnPropertyNames(objectASerInspecionado)
    );
  }
  return resultado;
}

console.log(listarTodasAsPropriedades(object1));

//Criação de um objeto usando um inicializador de objeto
var obj = {
  propriedade_1: "Valor qualquer",  //propriedade_# pode ser um identificador
  2: "Valor qualquer",              // ou um número
  "propriedade n": "Valor qualquer",// ou uma string
};


//Criando novo objeto usando uma função contrutora
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

var outroCarro = new Carro("Ford", "F1000", 1993);

function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}

var maria = new Pessoa("Maria Silva", 23, "F");
var iury = new Pessoa("Iury Silva", 21, "M");

//Cria um objeto que recebe no construtor um objeto como parametro
function CarroComDono(marca, modelo, ano, dono) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.dono = dono;
}

var novoCarro = new CarroComDono("GM", "chevette", 1979, maria);
var novoCarro2 = new CarroComDono("Volks", "fusca", 1969, iury);

console.log(novoCarro);
console.log(novoCarro2);

//nevega pelo objeto usando o ponto
console.log(novoCarro.dono);

//Adiciona umanova propriedade somente ao objeto ja definido
novoCarro2.cor = "Azul-Marinho";
outroCarro.cor = "Preto";


console.log(outroCarro);
console.log(novoCarro2);
/* #####OBS: A definição acima só funciona para objetos já instanciados, para adicionar uma nova proipriedade à todos os objetos de um tipo isso deve ser feito na definição do objeto na própria função construtora
*/

//Definindo Propriedades para um tipo de objeto usando prototype
Carro.prototype.cor = null;
novoCarro.cor = "Verde";
console.log(novoCarro);

Pessoa.prototype.altura = null;
iury.altura = 1.79;
console.log(iury);

//Criando objeto com o Object.create()
//Encapsulamento das propriedades e métodos de Animal
let Animal = {
  tipo: "Invertebrados",//Propriedades de valores padrão
  qualTipo: function () {     //Método que irá mostrar o tipode Animal
    console.log(this.tipo); //Não funciona () => {} nesse caso retorna undefined
  }
}

//Cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
animal1.qualTipo();
console.log(animal1);

//cria um novo tipo de animal chamado Peixes
let peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo();//aqui chama a função dentro do objeto


//Métodos de um objeto 
var otherObject = {
  myMethod: () => {
    console.log("Do something!");
  }
}

otherObject.myMethod();

//getter's e setter's
var obj_o = {
  a: 2,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(obj_o.a);//2
console.log(obj_o.b);//3
obj_o.c = 50;
console.log(obj_o.a);//25
//Os getters e setters são propriedades do objeto que alteram seus valores

//O código a seguir ilustra  como getters e setters podem extender o protótipo Date para add a propriedade ano para todas as instâncias de classes Date pré definidas

var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function(){ return this.getFullYear() },
  set:  function(y){ this.setFullYear(y) }
}); 

var now = new Date();
console.log(now.year);
now.year = 1994;
console.log(now);

//Definição getter e seter usando objetos inicializadores
var ob_ject = {
  a:7,
  get b(){return this.a + 1;},
  set c(x){this.a = x / 2;}
}

//Definição getter e setter usando o metodo Object.defineProperties()
Object.defineProperties(ob_ject, {
  'e':{get:function(){return this.a+45;}},
  'f':{set:function(x){this.a = x/4; }}
});

//Nessas linhas foram add metodos a um objeto ja definido
ob_ject.f = 50;
console.log(ob_ject.b);
console.log(ob_ject);