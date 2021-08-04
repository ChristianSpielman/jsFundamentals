/* 
Spread Operator
*/

const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];
// console.log(copiedNames);

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo]; // "..." is the spread operator
nameOne.unshift('Justin') //add Justin
// console.log('Altered:', nameOne, 'Spread', copiedNamesSpread,);

//cannot use spread operater on its own
//...nameTwo

console.log(nameTwo); //console.log(['Adam', 'Hustin'])
console.log(...nameTwo);//console.log = Adam Hustin


/*
...numbers
*/

console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(prices));

console.log(Math.min(...prices));




/*
...objects
*/


const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo (from the matrix)',
        enemies: true
    }
];

const copiedPersons = [...persons];// "..." takes out of person array and makes new array

persons.push({name: 'Bill and or Ted', enemies: false});// adds to persons

copiedPersons[0].name = 'Birdperson'// changing anything in copied also changes original
console.log('original:', persons, 'copy;', copiedPersons);


/*
... & avoiding changing both the original and copied array
*/
const comics = [
    {
        title: 'Spider-Man',
        year: 1962
    },
    {
        title: 'Detective Comics',
        year: 1939
    },
];

const copiedComics = comics.map(comic => ({
    title: comic.title,
    year: comic.year,
}))

comics.push({title: 'Calvin and Hobbes', year: 1985 })
copiedComics[1].title = 'Detective Comics #27';

console.log('Or', comics, 'CP:', copiedComics);

/*

-primitive variable = primitive value
    let x = 10
    let y = 'abc'
    let z = null


    variables       values
    x               10
    y               'abc'
    z               null

-------------------------------------------------
let x = 10
let y = 'abc'

let a =x
let b= y

console.log(x,y,a,b) -> 10, 'abc', 10, 'abc'

 a = 5
 b = 'xyz' 
 console.log(x,y,a,b); //-> 10, 'abc', 5, 'xyz'



 // let x = 10
// let y = 'abc'

// let a =x
// let b= y

// console.log(x,y,a,b) //-> 10, 'abc', 10, 'abc'

//  a = 5
//  b = 'xyz' 
//  console.log(x,y,a,b); //-> 10, 'abc', 5, 'xyz'
 
-----------------------------------------------------------------------
-3 Data Types that are passed by reference:
    -Array
    -Function
    -Objects
        all three are technically objects

-non primitive variables are given a reference to the value they "contain" - this reference "points" to a location in memory
----------------------------------------------------------------------------------------------------
let arr =[]
arr.push(1)

Variables       Values      Address     Object
arr             <#001>       #001        []
arr             <#001>       #001        [1]

--------------------------------------------------------------------------------------------------------
let reference = [1]
let refCopy = reference

Variables       Values      Address     Object
reference       <#001>      #001        [1]
refCopy         <#001>              


reference.push(2)
console.log(reference, refCopy)

Variables       Values      Address     Object
reference       <#001>      #001        [1,2]
refCopy         <#001>              


let reference = [1]
let refCopy = reference

reference.push(2)
console.log(reference, refCopy)


*/
