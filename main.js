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
  {
    title: 'The Pursuit of God',
    author: 'A. W. Tozer',
    read: true,
    favorite: true,
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

books.forEach((element) => {
  const tableRow = document.createElement('tr');
  const tableData1 = document.createElement('td');
  const tableData2 = document.createElement('td');
  const tableData3 = document.createElement('td');
  const tableData4 = document.createElement('td');

  tableData1.innerHTML = element.title;
  tableData2.innerHTML = element.author;
  if (element.read === true) {
    tableData3.innerHTML = '<input type="checkbox" checked=true/>';
  } else {
    tableData3.innerHTML = '<input type="checkbox"/>';
  } 
  if (element.favorite === true) {
    tableData4.innerHTML = '<input type="checkbox" checked=true/>';
  } else {
    tableData4.innerHTML = '<input type="checkbox"/>';
  }
  
  // if(element.read !== true) {
  //   tableData3.innerHTML = '<input type="checkbox" checked=false/>';
  //   console.log('then Im here');
  // }

  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableRow.appendChild(tableData3);
  tableRow.appendChild(tableData4);

  document.getElementById('testList').appendChild(tableRow);
});

// document.getElementById('books').innerHTML = books
//   .map(
//     (book) =>
//       `
//       <tr>
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td><input type="checkbox" checked=true>${book.read}</input></td>
//         <td>${book.favorite}</td>
//       </tr>`
//   )
//   .join('');

//What is the difference between innerText and innerHTML?

//ADD an element to the end of a doc
// const yoText = document.createElement('p');
// yoText.innerText = 'Yo what up';
// document.body.appendChild(yoText);

//ADD an element to the end of a element
// const para = document.createElement('p'); // <- creating the HTML element
// para.innerHTML = 'This is a paragraph'; // <- Adding to that element
// document.getElementById('myDIV').appendChild(para); // <- Adding that 'child' to the doc

//ADD a button
// const button = document.createElement('button');
// button.innerHTML = 'Press Me';
// document.body.appendChild(button); // <- Gotta have the body in there

//A list
// function testStuff() {
//   const theList = document.createElement('li');

//   const listItem = document.createTextNode('Books');
//   // const listItemTwo = document.createTextNode('Carrots');

//   theList.appendChild(listItem);
//   // theList.appendChild(listItemTwo);

//   document.getElementById('testList').appendChild(theList);
// }

document.getElementById('paragraph1').innerHTML = 'Victor';
document.getElementById('paragraph1').innerHTML = '<b>Shcherbina</b>';
document.getElementById('paragraph3').innerHTML = 'is the author';
document.getElementById('paragraph4').innerHTML = 'of this site';
// document.createElement("testElement") = "Hello";
// const anElement = document.getElementsByTagName('p');

// document.getElementById("paragraph3").innerHTML = 'This is a test, next word is: ' + anElement[0].innerHTML;
