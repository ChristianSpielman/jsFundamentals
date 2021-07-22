//Loops
/* 
Loops allow us to go over a block of information or code in a determined amount of cycles. 
Its important to note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without writing alot of code.
*/


    /*
    Structure

    We have to setup our loops in a way that we can:
    1; See where we are in a loop
    2; consider what sort of condition we want to run against
    3; Note when we are done with that condition and can move onto the next iteration.

    We need to:
        1 Create an index
        2 run condition
        3 change to the indexing variable (execution of condition)
    */

    //? Lets count to 10;
    for( let i=0; i <=10; i ++){
        console.log(i);
    }

    /*
    We state our loop with a "for". Within this function we are injecting
    some parameters that JS will run against. index; condition, change index
    -> result

    Withing parameters we are stating our index declaration to 0.
    This is our baseline. We move on to asking if variable is <= 10.
    Take that set number and add one to it. Once that is processed,
    return that value (in this case console.log of that number).
    once our condition is met, we return false which ends our loop.

    This is important to note:
    for(<create an index variable); <run condition>;  <change index> {
        <return results>
        <cont. until condition is ment>
    }
    

    //? If we dont indicate what our condition is, the loop will not have a finish line, 
    and thus creating an infinite loop.

    Infinite Loop
    //for (let i =0; i++)//

    //No condition means that JS does'nt know when to stop and will never assume
    that information.
    */

    
    
    //!Challenge

    for(let i=2; i >=-10; i-=4){
        console.log(i);
    }

    
    //We aren't limited by positive or negative numbers. We can cycle through varaiables assigned with strings.
let word = "supercalifragilisticexpialidocious"
for(let b = 0; b < word.length; b++){
    console.log(b, word[b]); // .length is a method we can use in JS that helps us determine a value we may not know.
    console.log(`The letter ${word[b]} is in position: ${b}`); //! 1) We set of each index and are displaying that.
    //! 2) We set to display the value within the "object" of word. 
    // 2) We set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.
}
    
    
    
    


/*
    For in loops

    With for loops we are seeking an index value and running it
    against a condition. For In loops do not require an index number.
*/

    let city ={
        name: 'Indianapolis',
        pop: 877000,
        speedway: true
    }
        //let info
    for(info in city){
        console.log(info);
        console.log(city[info]);//city.info looks for city= {info: 'value'}
    }

/*
    For(variable in object){
        run code
    }
    */

//              0          1    2           3           4
    let list = ['milk', 'eggs','lunch meat', 'bread', 'bannanas'];
    /* let list ={
        0: milk
        1: eggs
        2: lunchmeat
        3: bread
        4: bannanas
        
    }
*/
    for(item in list){
    console.log(item);
    console.log(list[item]);
    }

//Challenge

            //012345
let myName = 'dwiGht';

let propCase; //empty variable

for(let index = 0; index <= myName.length -1; index++){//myName.length = 6 letters(1,2,3,4,5,6) use "<" to run 0-5, "<=" is six spaces.
    //code here
    //console.log(myName.split (' '));
    if(index===0){
        propCase = myName[index].toUpperCase();//propCase = 'D'// '()' add value to code
    }
    else {
        propCase += myName[index].toLowerCase();
    }
    
}
console.log(propCase);


/*
let myName = 'dwiGht';

let propCase;

for(let index = 0; index <= myName.length -1; index++){
    if(index===0){
        propCase = myName[index].toUpperCase()
    }
    else {
        propCase += myName[index].toLowerCase();
    }
    
}
console.log(propCase);
*/


//For in Version
//      x  =
let myName = 'dwIght';
    //(answer to loop)
let propCase;
//
for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() :
    propCase += myName[index].toLowerCase();
}
console.log(propCase);



/*
For Of Loop

In order to run a for of loop, the 'thing' must be numbered like an array
*/

let myObject = {
    string: 'Peter',
    boolean: true,
    number: 1
};

//Error
// for(item of myObject){
  //  console.log(item);
//}

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}


let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters){
    if(worker === 'Dwight'|| worker ==='Michael'){
    console.log(worker, 'works in the office');

}


/*
For(variable of iterable){
    code goes here
}

*an iterable is something that has nubmers assigned to it like an array,
where the first item is assigned a 0, the second a 1, and so on...[eg. Array, Strings]
*/

