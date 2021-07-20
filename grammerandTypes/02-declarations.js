/*
what is a variable?

Variables are named containers for sorting data
We can thing of these containers as resources we can call upon later. Each 
variable allows us to store data, which could be a value or a function, that we 
will want to reference back to.

*/

let a = 2;

/*
-"let" is our keyword
-"a" is our name of our variable
-"=" is our assignment operator
-"2" is our variable's value
*/

let b = 1;
console.log(a+b); //what should we get? 3


/*
Restrictions with variables

-a variable must begin with a letter, underscore, or dollar sign.
-number may follow the above characters, but cannot come first in the name.
- javascript is case sensitive- 'hello' and 'Hello' are different variables.
-no spaces are allowed in variable names
-camelCase is best practice for naming varialbes in JS. This will help keep names
of varialbes readable
    ex:
        let myName = 'Christian';
        is easier to read than
        let myname = 'Christian';
*/

let startingWithLetter = 'test';
let _startingWithUnderScore = 'test';
let $startingWithDollarSign = 'test';
//let 5startingWithNumber = 'test'; //Cannot start a variable name with a number

console.log(startingWithLetter, _startingWithUnderScore, $startingWithDollarSign)

//ctrl + alt + n will run code runner(windows)
//ctrl + option = n will run code runner (Mac)

/*
    Keywords

    var, let, const

    -var: the 'old' keyword for variables. We will not use this 
    much but it is still used depending on the project and when it 
    was made. We will focus on let and const.

    -let: the 'new' keyword for variables which was introduced in 
    ES6 *newest verstion of ECMAScript, which is a standardization for JS.

    -const; also 'new' and declares an unchangeable or constant variable.
    the only limit to const variables is that once they are declared 
    their value will NEVER change

    */

    var variable = 'var variable';
    let letVariable = 'let variable';
    const constVariable = 'const variable';
    
    console.log(variable, letVariable, constVariable);

    /*
        Declarations are the left side of the assignment operator (=)
        within a variable
            -let x

        Initializations are the right side of the assignment operator (=)
        and sets the value of the variable
            -let x = 10
            10 would be the initialization
