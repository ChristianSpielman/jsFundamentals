const baseURL = 'https://api.spacexdata.com/v2/rockets';

// const searchForm = document.getElementsByTagName('form')[0];//an array
const searchForm = document.querySelector('form');//gets the first ul tag(the first tag/class/id combo we give it in the string)

searchForm.addEventListener('submit', fetchSpace)

/*Hoisting Mini Lesson 
JS will compile code reading from top to bottom, But it actually reads code twice.
the first time it reads code, it will store anything in memory such as variable names, functions(when using the keyword)
// */
// console.log(fetchSpace(1));// hoisting a function
// console.log(myVar1);//error:cannot access before initialization
// console.log(myVar2);// undefined
// myFunc()//error:cannot access before initialiization

// let myVar1 = 'Awesome';
// var myVar2 = 'Not Awesome';

// let myFunc =() => { console.log('Arrow test');}

function fetchSpace(e) {
    e.preventDefault();//this will stop the page from reloading when we submit our form. It prevents a default action by the browser.

    console.log('Clicked!');

    fetch(baseURL)//starts the proccess of 'fetching' or getting information from our resource
    // .then(/*function goes here */)
    .then(result => {//when we have a promise, we can call a method called 'then()' this will be given a callback function to 
        //send the result into
        // console.log(result);
        return result.json();//this will json-ify, or translate our result into json, which will be more eaily readable and accessible within
        //our app
    })//.then()also returns a promise,meaning if we want to continue to run code after one is done, we can just add another .then()
    .then(json => {
        // console.log(json);
        displayRockets(json)
    })
}

function displayRockets(data){
    console.log('Inside displayRockets', data);
    //how can we get each rocket's name to show up in the ul or to show up in the console
    
    data.forEach(rocket => {
        console.log(rocket.name);
        let listItem = document.createElement('li') //creates an empty <li></li> tag
        listItem.innerText = rocket.name; //change the text of the item. the tag now looks like this: <li>rocket name</li>
        spaceShips.appendChild()// will add one of our tags into another tag. in this case we are adding listItem into ul (spaceShips)
        
        /*
        container.appendChild(itemInContainer)*/
    });
}

//challenge:
//add a table to the html page andcomment out the ul
//comment out the above forEach loop and make a new one
//make a new row in each table for each rocket
//inside of each new row, add the name and cost of the rocket