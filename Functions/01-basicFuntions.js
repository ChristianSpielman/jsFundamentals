/*
Functions

Functions are processes that we call upon to run an action. They can do the following:
    - take in an input to process, modify, or respond to(not required)
    -return a value(not required)
    -can be invoked (or called) as often as needed.
    */
// (1)   (2)   
function hi() {
    //(3)
    console.log('Hi!');
    //(1) function keyword- defines a function
    //(2) name of the function, followed by parenthesis, this is how we will call the function.
    //code goes here. This will be the "brains" of the function.
}

//Calling the function
//aka putting the fun in function
//to invoke (call) a function we will simply write it's name and put parenthesis after it.
hi()




let myName = 'Christian';

function myNameCap(){
    myName = myName.toUpperCase();
    //AVoid this if you can (until much later)
    //This is called Recursion
    //(calling a function within itself)
    //myNameCap()
    hi(); //calls previous function
}

myName

myNameCap();

console.log(myName);




function hi() {
    console.log('Hi!');
    }
    hi()

    let myName = 'Christian';
    
    function myNameCap(){
        myName = myName.toUpperCase();
     hi();
    }
    
    
    myNameCap();
    
    console.log(myName);



 /*
 Function declaration
 
 a chunck of code that performs a set chunk of code when it is invoked (or called)\
 */

 function funcOne() {
     console.log('This is the code we run in function one.');
 }
 funcOne()



 /* 
 Function Expresstions
 
 assigning a function to a variable is what we call an expression
 */

 let first =  function funcTwo(){
     console.log('Code being run in the function expression');
}
first();


let example = function() { //Functions do not always need names
console.log('What is my name?!?');
}
example();
console.log(typeof example);//Function
console.log(typeof example());//Undefined



/*
Anonymous Functions

anonymous functions are stored in memory but the runtime does not automatically create
a refrence to it
the main use would be to pass thses functions through another function.
maybe have a ternary where if something is true we run on function;
else we run a different function
*/

//common us would be to assign these to a variable
let anon = function() {//function has no name
    console.log('Anonymous Function');
}
anon();

//example of anonymous function
true || false ? 
function() {console.log('true')} : 
function() {console.log('false') }

/*
Parameters
we will be using funtions to pass in information and return a result

parameters will allow our functions to take in ourside information
*/

let exampleNum = 16;

function parameterFunc (num) {
    console.log(num +1);
    return num + 5
}
if(7<8){
    let exampleNum =7
parameterFunc(exampleNum);
}



//Example 2
let exampleNum = 16;

function parameterFunc (num) {
    console.log(num +1);
    return num + 5
}
parameterFunc(7);
parameterFunc('bruce');
parameterFunc('another test');
parameterFunc([1,2,3,4,5]);


//Example 3
function parameterFunc (num) {
    console.log(num +1);
    return num + 5 //sends back a value for the funtion when it is run
}
//return will essentially set the function = to something
let returnTest =5;
parameterFunc(returnTest); //6
console.log(parameterFunc(returnTest));//10

//Example 4
function parameterFunc (num) {
    console.log(num +1);
    return num + 5 //num now =5
}

let returnTest =15;
let myReturn = parameterFunc(returnTest)// myReturn 5 + 15(returnTest)
console.log('Return', myReturn);


//Example 5
let firstName ='Jane';
let lastName = 'Doe';

function greeting(first, last) {
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}
greeting(firstName);
greeting(lastName);
greeting();
greeting(firstName, lastName);
greeting(firstName, null);
greeting('',lastName);






function checkNumber(){ 
    for(x = 0; x <= 10; x++){
        if (x % 2 == 0){
            console.log(`${x} is an even number.`);
        } else if (x % 2 == 1){
            console.log(`${x} is an odd number`);
        }else {
            console.log('This is not a number!');
        }
    }
}
checkNumber()




for(x = 1; x <=100; x++){
    console.log(x);
    if(x % 3 == 0)
        console.log("Fizz");
    if(x % 5 == 0)
        console.log("Buzz");
}


for(let l = 1; l <= 100; l++){
    if (l % 15 == 0) {
        console.log('Fizz Buzz');
        } else if(l % 3 == 0) {
            console.log('Fizz');
        } else if(l % 5 == 0);{
            console.log('Buzz');
        } else {
            console.log(l);
        }
    }