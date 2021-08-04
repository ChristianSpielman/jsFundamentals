//selecting the body tag from the document
// body = document.querySelector('body');
//console.log('Hello World');

//To create an H1
let header1 = document.createElement('h1')

//adding text to H1
header1.innerText = 'Our Favorite Books!'

// to display on the page
//using the document and using dot notation to get the body tag
document.body.appendChild(header1);
//parent(body).appendChild(child//header1)


const books = ['Lord of the Rings', 'The Richest man in Babylon', 'The Red Tent', 
'Sell Anything to Anyone', 'Pride and Prejudice', 'The Book of Joy', 'The Winds of Winter']

/*
<table>
    <tr>
        <th> Book Name</th>
        </tr>
        <tr>
            <td> book one</td>
        <tr>
        <tr>
    </tr>
    </table>
*/

//table to display our books
let table = document.createElement('table');
let headerRow = document.createElement('tr')
let tHeader = document.createElement('th')
tHeader.innerText = 'Book Names'; // <th> Book Names </th>

headerRow.appendChild(tHeader)//<tr> <th> Book Names </th> </tr>
table.appendChild(headerRow);// <table>  <tr> ... </tr> </table>
document.body.appendChild(table)// <body> <table ... </table>





books.forEach(function(current) { //for each loop example
//get some blokc of code
//this will run on each element of the array one time
console.log(current);

let row2 = document.createElement('tr')
let firstBook = document.createElement('td')
firstBook.innerText = current;
table.appendChild(row2)
row2.appendChild(firstBook);
});



//    initial     condition     iterator
for(let i = 0; i < books.length; i++) { //for loop example
    let row2 = document.createElement('tr');
    let firstBook = document.createElement('td');
    firstBook.innerText = books[i];
    table.appendChild(row2);
    row2.appendChild(firstBook);
}