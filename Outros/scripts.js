//Alguns testes com funções

var pessoa = {
  nome: "jao",
  idade: 25,
  cidade: "BSB",
  profissao: "assasino",
};

function novaPessoa(nome, idade, cidade, profissao) {
  pessoa.nome = nome;
  pessoa.idade = idade;
  pessoa.cidade = cidade;
  pessoa.profissao = profissao;
}

//Função recebendo um obj como parametro
function newPearson(novoObjetoPessoa){
    if(typeof novoObjetoPessoa == 'object'){
        pessoa = novoObjetoPessoa;
        return true;
    }else{
        return false;
    }
}

//Função que recebe paramentros dinâmicamente
function testeParametroDinamico(){
    console.log(arguments);//arguments é um variavel do escopo dessa função
    return true;
}