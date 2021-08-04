/*
    Array Destructuring

-allows us to "unpack" values from arrays or properties from objects
-similar syntax to array literals But is on the left side of the assignment opereator
    -this will define what values to unpack
-great for pulling information out of an array/object and assigning that data to its own variable
*/


const boardGames = ['Catan', 'Monopoly', 'Clue']
// console.log(boardGames[0]); //Catan

//const gameOne = boardGames[0];
//const gameTwo = boardGames[1]
//array destructuring syntax
const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
//if i dont define gameThree it will ignore the value
console.log(gameThree);


/*
    Rest Operator

    -using the rest operator will look almost exactly like using the spread operator

        -Spread expands an array into it's elements
        -Rest collects multiple elements and condenses them into one element
            -Rest Must be the last element defined using array destructuring
*/

const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {
    day: 'Thursday', answer: 42}]

let [charOne, charTwo, ...otherInfo] = hitchHikersGuide;// '...' creates new variable
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

// -------------------------------------------------------------------------------------
const harryPotter = ['Snape', 'Moaning Myrtle', 'Harry', 'Ron Weasley', 'Hermione', 'Dumbledore'];

// let [firstName, secondName, thirdName] = harryPotter
// console.log(firstName, secondName, thirdName);

// let [first, second, third, ...mainCharacters] = harryPotter
// console.log(first, second, third, mainCharacters);

let [, , ...mainCharacters] = harryPotter
console.log(mainCharacters);


/*
Object Destructuring
*/

const game = {
    title: 'Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']
}

const {title, developer, platforms} = game;
// console.log(title);

// console.log(developer);

// console.log(platforms);


const games = [
    {
        title: 'Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: ['PS4']  
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo Switch', 'PSVita', 'iOS', 'Android']
    }  
]

for({title, developer} of games){
    console.log(`${title} is developed by ${developer}`);  //for loop example
}

        //key:  varName
const [{title: gameOne, developer: devOne}, gameTwo, {title: gameThree}] = games;
console.log(gameOne, devOne);
console.log(gameTwo);
console.log(gameThree);