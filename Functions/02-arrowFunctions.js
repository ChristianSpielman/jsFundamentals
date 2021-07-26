/*
Arrow Functions

arrow functions are expressional functions that can be simplified into
one of two forms: Concise body and block body.
the main goal is to generate shorter syntax for writing a function.
*/

//Regular function
function regFunc(){
    console.log('just a regular function');
}
regFunc();
 
//Arrow function

    //1          2     3           4
let arrowFunc = () => console.log('function in one line'); arrowFunc();
/*1: a variable created to hold the value of our anonymous arrow
  -arrow functions are always anonymous
  2:Parameters are still capable of being added
  -parameters go in the () as they would with a normal function.
  But if we only have 1, no more no less, parameter we do not need ()
  if we have no parameters we are still required to put ().
  3:"how we see an arrow". This is JS syntax that says we are about
  to process a function.
  4:  The code the arrow function will run
*/

//Arrow function with parameter

let arrow = (x) => console.log(x); arrow(10);

//Concise vs Block body
/*When we have a simple return, or response, from our arrow function
it makes sense to write it in a concise , simplified way.
when we use a concise body arrow function, the return statement is 
implied (meaning we do not have to write it).
*/

let conciseBody = (x,y) => console.log(x + y);
conciseBody(1,2);

                            //return x+y
                            //implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody (1,2); // return sets conciseBody(1,2)=3
console.log(result);


let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`):
console.log(`${x} and ${y} are where we want them`);

slightlyComplexConcise(3,1);

    /*
    Block body
    - the 'return keyword Is required. we will include curly braces.
    Sometimes it will make sense to use block body if we need to do 
    multiple lines of code.
    */

    let blockArrow = (x,y) => {
        return `${x} and ${y} are in a block body arrow function`
        /*any code below the return statement in a function will be ignored.
        if we write code below it, it will not run*/
    }
    console.log(blockArrow(1,2));
    //variable will hold the value of the returned string
    let blockResponseReturn = blockArrow(1,2);

    console.log('Return Response:', blockResponseReturn);




    let blockArrow = (x,y) => {
        console.log('Function', `${x} and ${y} are in a block body arrow function`)
}
console.log(blockArrow(1,2));
let blockResponseReturn = blockArrow(1,2);

    console.log('Response:', blockResponse);

    
//! CHALLENGE
// Rewrite this below function as a concise body arrow function, the use hero and nock to call the function
/*
let hero = 'Robin Hood';
let nock = 1;

function shot(x,y) {
    y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);
};
shot(hero,nock);
let hero = 'Robin Hood';
let nock = 1;
let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);
shot(hero, nock);
*/
    let hero = 'Robin Hood';
    let nock = 1;

let shot = (x,y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);

shot(hero, nock);



//* Using a block body arrow function, pass the same variables but increase the number of shots until the second console.log is printed

let hero = 'Robin Hood';
let nock = 1;

//1 block body arrow function
//2 pass in 2 variables
// run the conditional
//4 repeat cod until the result  changes

let shoot = (x,y) => {

    for(y; y <= 3; y ++){
    if (y < 3) {
        console.log(`${x} only shot ${y} arrow...`)
        } else {
         console.log(`${x} shot ${y} arrows at the target!`)
        }
    };
}

shoot(hero, nock)



for ( let j= 0; j <5; j++){
    console.log(j + "")
}