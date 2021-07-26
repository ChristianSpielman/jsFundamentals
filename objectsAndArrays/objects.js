/*
Objects

-objects are used to store multiple sets of data in the key/ value pair format
-denoted by {}
*/

let netflix = {
    //name:value
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo: {
            episodeInfo:[
                {
                    episode: 1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episode: 4,
                    episodeName: 'The Alliance'
                },
                {
                    episode: 5,
                    episodeName: 'Basketball'
                },
                {
                    episode: 6,
                    episodeName: 'Hot Girl' 
                }
            ]
        }
    }
}
// console.log(netflix);
// console.log(netflix.name);// dot notation: when we know the name of the key/ value info we want we will use dot notation
// console.log('All Data:', netflix);
// console.log('Just season info:', netflix.season1.seasonInfo);


//challenge console log any single episode name from season 1
console.log('Episode 2:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);
// console.log('Episode ${netflix.season1.seasonInfo.episodeInfo[4].episode}:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);


/* 
JSON Objects

-Json stands for Javascript object notation
-the JSON syntax is derived from JavaScript object syntax, but
the JSON format is text only.
-JSON exists as a string- useful when fetching data from a server
it needs to be translated into a native JavaScript object if we want to access
the data.
*/


//We can use some object methods to help us gather information we might not otherwise know
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//object.keys()
console.log(Object.keys(spaceJam)); //gives an array of the keys in an object
// console.log(Object.keys(spaceJam.toonSquad.duck)); will giv us the index numbers for the string of "Daffy Duck" (ex 1,2,3,4...)
console.log(Object.values(spaceJam.toonSquad));//gives us an array with the values of each key in an object.


/* 
Object Bracket Notation

-object bracket notation can allow us to find a value in an object we wouldn't be able to access using dot notation.
-we can also use object bracket notation to store a key in a variable and use that variable to access information
in an object
-this works because all keys names in an object are strings
*/

let garden ={
    vegetalbe: 'Zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10,
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

//Dot notation
console.log(garden.flower);//orchid

//Square Bracket Notation
console.log(garden['flower']);


let baking ={};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
console.log(baking);

//Example//
let garden ={
    vegetalbe: 'zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10,
}
console.log(baking[garden['vegetable']]);

//using square brackets can also be a good idea if the object's key has a space in the name

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);