/*
-Populating and referring
-methods
-lenght
-iterating
*/

//Populating and Referring
            //0       1         2
let list=['orange', 'banana', 'oreos'];
console.log(list[1]);
/*
-when we call an array we can append or add square brackets onto the end of the array name with the index number
of the value we want to reference. This is known as Square Bracket Notation

-javascript starts counting at 0 so when we console bracket 'list[1]'
we should see banana
*/

let students=['Evan', 'Ricky', 'Kali', 'Richard','Matthew','Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 4]
console.log(students[9]);
console.log(typeof students);
console.log(students instanceof Array); //the instanceof operator is used to check the type of an object at run time. Remember arrays are technical objects

/*
Challenge
 */
let students=['Evan', 'Ricky', 'Kali', 'Richard','Matthew','Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 4]

console.log(students[4]);
console.log(students[7]);
console.log(students[9][2]);
console.log('Hello', students[9][2])//console log 2 things
console.log('Hello', students[9][2])//concatinate
console.log('Hello ${students[9][2]}')//interpolate

/*
Array methods
-we can call on multiple different array methods that will allow us to manipulate arrays as we need to.
*/

let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hotdog"];
//add to our array
food.push("pizza", "spring onion");//push()will add a value to the end of an array. multiple values seperated by a comma
console.log(food.push("spring onion"));//gives me the length of the array
console.log('push:', food[6]);
console.log(food);


//Remove from array
food.pop()//this should remove the last itme from the array
console.log('pop', food);


food.shift();//removes first value from an array
console.log('shift', food);

food.unshift('chicken', 'garlic');//add a value to the front of an array
console.log('unshift', food);

//postition to remove, how many to remove, and what to add
food.splice(2,1,'bananas');//remove and insert items from an array
console.log('splice:', food);

food.splice(1,0,'Ice Cream');
console.log('second splice', food);



//Length

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length);//11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);


/*
Iterating

for each- the forEach() method executes a provided function once for each element in an array
        - the forEach() method does the same thing as a for loop or a for of loop--> both 
                        iterate over the properties in an array
        -provide a callback function that has up to 3 arguments:
            1 the value
            2 the index
            3 the array object itself
*/


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo greem', 'fuscia', 'orange', 'periwinkle', 'ocre'];
for(let i = 0; i < colorList.length; i ++){
    console.log(colorList[i]);//runs list once
}

//how to make an arrow funciton
// let something = (color) => {/* code here */}
let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo greem', 'fuscia', 'orange', 'periwinkle', 'ocre'];
colorList.forEach(color => console.log(color));
//a callback function is a function that is either called or passesas a parameter to another function


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo greem', 'fuscia', 'orange', 'periwinkle', 'ocre'];
let logItem = item => console.log(item);
colorList.forEach(logItem);//lists each color


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo greem', 'fuscia', 'orange', 'periwinkle', 'ocre'];
colorList.forEach( (item, index) => {
    console.log(item);
    console.log(index);//shows each color(item), then index number
})