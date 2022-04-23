let books = [];
const check = window.localStorage.getItem('localBooksData');

if(check !== null){
  books = JSON.parse(window.localStorage.getItem('localBooksData'));
}

function message() {
  console.log('books');
}

const tableElement = document.getElementById('bookTable');
//Separated so that we could reset the table every render

function renderTable() {
  tableElement.innerHTML = ''; //On every call of renderTable(), the table gets cleared
  books.forEach((element) => {
    const tableRow = document.createElement('tr');
    const tableDataTitle = document.createElement('td');
    const tableDataAuthor = document.createElement('td');
    const tableDataRead = document.createElement('td');
    const tableDataFav = document.createElement('td');

    tableDataTitle.innerText = element.title;
    tableDataAuthor.innerText = element.author;

    tableDataRead.innerHTML =
      '<input type="checkbox" ' + (element.read ? 'checked=true' : '') + '/>';
    tableDataFav.innerHTML =
      '<input type="checkbox" ' +
      (element.favorite ? 'checked=true' : '') +
      '/>';

    tableRow.appendChild(tableDataTitle);
    tableRow.appendChild(tableDataAuthor);
    tableRow.appendChild(tableDataRead);
    tableRow.appendChild(tableDataFav);
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
    title: formElement['title'].value,
    author: formElement['author'].value,
    read: formElement['read'].checked,
    favorite: formElement['favorite'].checked,
  };
  books.push(values);

  renderTable();
  window.localStorage.setItem('localBooksData', JSON.stringify(books));
});

