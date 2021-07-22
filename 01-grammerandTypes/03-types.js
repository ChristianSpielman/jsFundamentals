/*
    Data and structure types

    - primitive data types:
        -boolean
        -undefined
        -string
        -number
        -bigInt*
        -symbol*

    -null
    -object
    -function
*/

/*
    Boolean

    a boolean has to possible values: true and false
*/

let on = true;
let off = false;

console.log(on);
console.log(off);

/*
    Null

    a null value is an empty value. Think of it as an empty container that has space to fill.
    Note: null and undefined are two different things
*/

let empty = null;
console.log(empty);

/*
    Undefined
    No value has been assinged to a container and does'nt even act as an empty container

*/

let unkown;
let undef = undefined;

// Whats the difference between null and undefined?
/*
    -Null is like a container with nothing in it.
    -Undefined is a variable that has never been set/ created.
*/

/*
    Numbers

    Literally just numbers
*/

let degrees = 82;
console.log(degrees);

let precise= 999999999999999;//15 9's is the limit before java script rounds up
console.log(precise);

let rounded = 9999999999999999;//16 9's round up
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);//JS not good at small numbers

let whatIf = (0.2 * 10 + 0.1 * 10)/10;
console.log(whatIf)//workaround


/*
    Strings
    
    Strings represent text and are wrapped in either single or double quotes
*/

let doubleQuote = "Double Quote";
let singleQuote = "Single Quote";
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt = "I said, 'It is pretty cool right'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

//Numbers and Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

//We can use an operation called 'typeof' to return a string of the variable's type.

console.log(typeof addThese);//number
console.log(typeof addTheseAlso);//string

let addTest = 1050 + '100';
console.log(addTest);//if one type is a string answer will be string

/*
    Objects

    Objects are used to store many values instead of just one.
    consider them as a collection of different variables in one container
    denoted by curly brackets: {}
    */

    let frodo = {
        // an object has many properites inside of it
        race: 'Hobbit', //string
        //name: value
            //we must seperate properties in an object with a comma
        rings: 1, //number
        sting: true //boolean (true or false)
    }

    console.log(frodo);
    console.log(typeof frodo);//object
    console.log(frodo.rings);//dot notation

    /*
    Arrays
    
    Containers that hold a list of items
    denoted by square brackets []
    regardless of the data type, all items are sepereated by commas
    */

    let arrayList = ['position1', 'position2', 'position3'];
    console.log(arrayList);

    let anotherExample = ['muffins', 'pizza toppings', true, 17, false, null, undefined];
    console.log(anotherExample);
    console.log(anotherExample[0]); // square bracket notation

    console.log(typeof anotherExample);//an array is a type of object. 


    /*
        Addition vs concatenation
        
        JS sees the = symbol in two different ways
            -When we use it with numbers, it will use the built in math functionality
            -When we use it with strings, it will ignore the math, functionality, and concats, or combines, the two strings into one
    */

    let strings = 'one' + ' ' + 'is a number';
    console.log(strings);

    let concatDiff = 1050 + '100';
    console.log(concatDiff);
    console.log(typeof concatDiff);

    //CHALLENGE:
    let firstName = 'Christian';
    let lastName = 'Spielman';
    let houseNumber = 155;
    let streetName = 'Keller Dr.';
    let city = 'Greenfield';
    let state = 'Indiana';
    let zipCode = 46140;
    console.log(firstName, lastName + ',', houseNumber, streetName, city + ',', state, zipCode);


    /*
        String: Properites

        Properites are qualities associated with a data type
        strings have properties, or qualities associated with them.
        the length of a string is a property
    */

        let myName = 'Christian'
        console.log(myName.length);

    
    /*
        String: Methods

        Methods are tools that can help us manipulate data
        .property   .method()
        no parens   parens
    */

        let myNameIs = 'Christian';
        console.log(myNameIs.toUpperCase());

        let home = 'My home is in Greenfield';
        console.log('Includes:', home.includes('Greenfield'))

    //CHALLENGE


let sent = 'This sentence will be split into individual parts';
const str = 'This sentence will be split into individual parts';
const word = str.split(' ');
console.log(word);
