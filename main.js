const books = [
  {
    title: 'Wild Goose Chase',
    author: 'Mark Batterson',
    read: true,
    favorite: false,
  },
  {
    title: 'Shelter in God',
    author: 'David Jeremiah',
    read: false,
    favorite: false,
  },
  {
    title: 'Jesus: The God Who Knows Your Name',
    author: 'Max Lucado',
    read: false,
    favorite: false,
  },
];

function message() {
  console.log('books');
}

// - In order to display the array, I need to bring it through that method
// - Pretty much it takes everything that it sees after the '=' sign and
//     - displays it.
// - document is a global object
// - getElementById() matches a HTML element with the same id that getElementById() contains
// - (So when the HTML looks at the div ^ it will look and match the name 'books')
// - Then it goes and fills that table with the mapping of the books
// - join('')-> A string used to separate one element of an array from the next
//     - in the resulting String. If omitted, the array elements are separated
//     - with a comma.
// - innerHTML returns the HTML inside of the getElementById

document.getElementById('books').innerHTML = books
  .map(
    (book) =>
      `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><input type="checkbox">${book.read}</input></td>
        <td>${book.favorite}</td>
      </tr>`
  )
  .join('');

document.getElementById('paragraph1').innerHTML = '<div>Victor</div>';
document.getElementById('paragraph1').innerHTML = 'Shcherbina';
document.getElementById('paragraph3').innerHTML = 'is the author';
document.getElementById('paragraph4').innerHTML = 'of this site';
// document.createElement("testElement") = "Hello";
const anElement = document.getElementsByTagName('p');

document.getElementById("paragraph3").innerHTML = 'This is a test, next word is: ' + anElement[0].innerHTML;