/* ##### Buscando e contatdo dados em Arrays 

  Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

    -Contar o número de categorias e o número de livros em cada categoria
    -Contar o número de autores
    -Mostrar livros do autor Augusto Cury
    -Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

//Conta o número de categorias
const totalCategories = booksByCategory.length;
console.log(`Total de categorias - ${totalCategories}`);

//Conta o número de livros em cada categoria poderia ser feita com o for of
for (
  let controlCategory = 0;
  controlCategory < totalCategories;
  controlCategory++
) {
  let totalBooks = booksByCategory[controlCategory].books.length;
  console.log(
    `Total de livros categoria ${booksByCategory[controlCategory].category} - ${totalBooks}`
  );
}

//Função que Conta a quantidade total de autores
function countOfAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let books of category.books) {
      //autor do livro atual estiver no array -> não faz nada caso contrario add ano array
      if (authors.indexOf(books.author) == -1) {
        authors.push(books.author);
      }
    }
  }

  console.log(`Total de autores: ${authors.length}`);
}

countOfAuthors();

//Função que Mostra os Titulos do Augusto Cury
function showAugustoCuryTitles() {
  let titles = [];

  for (let category of booksByCategory) {
    for (let books of category.books) {
      if (books.author.toUpperCase() === "AUGUSTO CURY") {
        titles.push(books.title);
      }
    }
  }
  
  console.log(`Títulos de Augusto Cury: ${titles.join(", ")}`);//titles.join(", ") altera o separador que une os elementos do array
}

showAugustoCuryTitles();

//Função que Mostra os Titulos do Augusto Cury
function booksOfInformedAuthor(author) {
  let titles = [];

  for (let category of booksByCategory) {
    for (let books of category.books) {
      let authorsBook = books.author.toUpperCase().replace(" ","");
      if (authorsBook === author.toUpperCase().replace(" ","")) {
        titles.push(books.title);
      }
    }
  }

  return titles;
}

console.log("Titulos de T. Harv Eker: ", booksOfInformedAuthor("T. Harv Eker"))
console.log("Titulos de George S. Clason: ", booksOfInformedAuthor("George S. Clason"))
console.log("Titulos de Robert T. Kiosaki e Sharon L. Lechter: ", booksOfInformedAuthor("Robert T. Kiosaki e Sharon L. Lechter"))
console.log("Titulos de Stephen R. Covey: ", booksOfInformedAuthor("Stephen R. Covey"))
