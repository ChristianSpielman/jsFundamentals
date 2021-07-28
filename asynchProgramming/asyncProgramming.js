/*
Asynchronous Programming

-Generally, JS is read form top to bottom, performing each line of code one after another. This is known as scynchronous programming
    -ex. line 1 is run and completed before line 2 begins then line 3 etc...

-This can become an issue when we fetch or gather information from an outside source, from something such as an API.
If JS did not have the ability to run code asychronously, we would be forced to wait for our line of code to finish as it tried
to gather mountains of data from a database. Asynchronous code allows us to somewhat ignore the one line at a time rule.

-Asynchronous programing allows a program to do more than one thing at a time

-Makes it possible to run  long-running actions without stoppong the program to wait for a response.
*/

//Synchronous code
const secondSync =() => {
    console.log('Second Hello');
}

const firstSync =() =>{
    console.log('First Hello');
    secondSync()
    console.log('End');
}

firstSync()

//Asynchronous code

const networkRequest = () => {
    setTimeout(() => {
        //setTimeout is a method that will work in the browswer and node. JS we are using it to simulate a network request.
        // setTimeout has 2 parameters, the first is a callback function (a function that we pass into a parameter),
        //and the second is how much time to wait measured in milliseconds.
        console.log('Async Code');
    },2000)
}

console.log('Hello World');
networkRequest()
console.log('The End');

console.log('Hello World');
networkRequest();
console.log('The End');

/*
API
-application Program Interface
-an API is something tat will allow us to talk to other programs such as a database or a server, however,
the API itself is not a database or server it is the doce with acess points to the server.

-access to a server will come in the form of ENDPOINTS
    -endpoints direct us to sets of data

Rest API
REpresentational State Transfer
    -creates an object of requested data from the client, and sends values back as a response.

    Methods:
        CRUD
            Create(POST)
            Read(GET)
            Update (PUT)
            Delete (DELETE)


        Fetch()
        The Fetch method is an aychronous method and is part of the browser window, NOT JS. This method will start the process
        of 'fetching', or grabbing a resource from the network, and will return a promis which is fulfilled when the response 
        is available

        -Promis is an unknow value that will eventually be filled with either a value or a rejection (error)
            -Pending: initial state, neither fulfilled or rejected
            -fulfilled:meaning the operation completed successfully
            -Rejected: meaning the operation failed.
        */