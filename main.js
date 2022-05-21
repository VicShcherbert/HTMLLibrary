let books = [];
const localStorageBooks = JSON.parse(
  window.localStorage.getItem('localBooksData')
);

if (localStorageBooks !== null && Array.isArray(localStorageBooks)) {
  books = localStorageBooks;
}

function message() {
  console.log('books');
}

const tableElement = document.getElementById('bookTable');
//Separated so that we could reset the table every render

let numberid = 0;

function renderTable() {
  tableElement.innerHTML = ''; //On every call of renderTable(), the table gets cleared
  books.forEach((element) => {
    // element.id = numberid;
    // numberid = numberid + 1;
    const tableRow = document.createElement('tr');
    const tableDataTitle = document.createElement('td');
    const tableDataAuthor = document.createElement('td');
    const tableDataRead = document.createElement('td');
    const tableDataFav = document.createElement('td');
    const deleteButton = document.createElement('button');

    tableDataTitle.innerText = element.title;
    tableDataAuthor.innerText = element.author;

    tableDataRead.innerHTML =
      '<input type="checkbox" ' + (element.read ? 'checked=true' : '') + '/>';
    tableDataFav.innerHTML =
      '<input type="checkbox" ' +
      (element.favorite ? 'checked=true' : '') +
      '/>';
    deleteButton.innerHTML = '<button>Delete</button>';

    deleteButton.addEventListener('click', function (event) {
      event.preventDefault();
      books = books.filter(book => book.id != element.id);
      window.localStorage.setItem('localBooksData', JSON.stringify(books));
      renderTable();
    });

    tableRow.appendChild(tableDataTitle);
    tableRow.appendChild(tableDataAuthor);
    tableRow.appendChild(tableDataRead);
    tableRow.appendChild(tableDataFav);
    tableRow.appendChild(deleteButton);
    tableElement.appendChild(tableRow);
  });
}
renderTable(); //In order so that on load, the table could be populated

const formElement = document.getElementById('form');
// Attaches event handler to the specifyed element.
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  // Cancels the defаult behavior. If it's a link, the default is to open it.
  // This prevents it
  const values = {
    id: Date.now(),
    title: formElement['title'].value,
    author: formElement['author'].value,
    read: formElement['read'].checked,
    favorite: formElement['favorite'].checked,
  };
  books.push(values);
  renderTable();
  window.localStorage.setItem('localBooksData', JSON.stringify(books));
  {
    formElement['title'].value = '';
    formElement['author'].value = '';
    formElement['read'].checked = '';
    formElement['favorite'].checked = '';
  }
});

console.log(books);
