/* 
    Conditionals

    Falsy Values:
        A falsy value is a value that is considered flase when encountered in a boolean context.
        There are 6 flasy values in JS. 
            -false
            -0
            "", '', ``,
            -null
            -undefined
            -NaN (not a number)

        What does this mean? Whenever JS is expecting a boolean value and is given one of these 6,
        it is evaluated as false

        side not: there are also Truthy values in js, which tend to be much less limited
        Examples inclue: 
        {}, 
        [], 
        42, (any number)
        "false" (any non-empty string)
        */

        /*
            If Statements 
            
            When we use comparison operators, we typically are asking if we can 
            move on to the next section of code. "If" something is true, do "this thing"
            */

            let light = 'on';
            //keyword   //expression
            if          (true) {
            //code to run if the expression evaluates to true
                console.log('Truthy Test');
            };

            //condition
            if(false){
                console.log('Falsey Test');
            }

            let light = 'on';
            if(light =='on'){
                console.log('The light is on'); //"=" changes value/ "==" compares values
            }

            let weather = 65;
            let rain = true;
            // && (for multiple comparisons)
            if (weather < 70 && rain ==true){
                console.log('Maybe wear a jacket');
            }

            //Challenge

            let batman = 'is the night';
            let bruce = true;
            // !bruce will check that bruce is not equal to true
            if (bruce == true && batman == 'is the night'){
                console.log('Batman!');
            }

            let temperture = 60;
            let rain = true;
            if(temperture <= 50 || rain == true){
                console.log('Grab a Coat!');
            }

            /*
            If Else 
            
            We can think of this as not only providing an answer if our condition evaluates to be true, 
            but also if it ends up being false
            
            */

            let today = 75;
            if(today < 70){
                //                  string interpolation (only work with ``)
                console.log(`It's ${today}, wear a jacket!`);
            } else{
                console.log(`It's ${today}. No jacket needed!`);
            }

            /*
                Else if

                this is a condition that will be checked if the above condition was not met
            */

                let cooktime = 46;
                if(cooktime === 45){
                    console.log('Let us feast!');
                } else if(cooktime > 45){
                    console.log(`It has been ${cooktime}?? Might need a glass of water with this one!`);
                } else if(cooktime >= 30){
                    console.log(`It has only ${cooktime} minutes. Wait another 5-15 minutes`);
                } else if(cooktime >= 20){
                    console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes`);
                }  else { //else if must go before else statements
                    console.log(`It has been only ${cooktime} minutes. Perhaps we could atleaset
                    try cooking`);
                }

                //Challenge

                let age = 22

                if(age <= 17){
                    console.log("Sorry, you're to young to do anything.");
                } else if(age >= 25){
                    console.log("You can rent a car!");
                } else if(age >= 21){
                    console.log("You can drink!");
                }else if(age >= 18){
                    console.log("You can vote!");
                }

                
                /*
                    Ternaries
                    
                    They are if/else statements bet they look weird!
                    */

                    let myName = 'Christian';

                    if(myName ===`Christian`) {
                        //if true run this
                        console.log(`Hi, ${myName}!`);
                    } else {
                        //else run this
                        console.log(`Not sure I Know ${myName}`);
                    }

                    //condition ? if true : else result
                    //condition             if true run this                else run this
                    myName === 'Christian' ? console.log(`Hi, ${myName}!`) : console.log(
                        `Not sure I know ${myName}.`);

                    let hero = 'Batman';
                    let villain = 'Mr. Freeze';
                    //condition                             if true run this
                    hero == 'Batman' && villain == 'Riddler' ? 
                    console.log('What has a head and a tail but no body') : 
                    hero == 'Batman' && villain == 'Joker' ?
                    console.log('Why so serious?') : 
                    hero =='Batman' && villain == 'Mr. Freeze' ? 
                    console.log('Ice to meet you!') : 
                    console.log(`${hero} is the night!`);

                    //Challenge

                    let lampOn = false;
                    let daytime = true;
                    lampOn == true && daytime != true ?
                    console.log('The lamp is on during the night') :
                    lampOn != true && daytime != true ?
                    console.log('The lamp is off during the night') :
                    lampOn == true && daytime == true ?
                    console.log('The lamp is on during the day') :
                    lampOn != true && daytime == true ?
                    console.log('The lamp is on during the day') :
                    console.log('What lamp?');// must end in else statement(can be null)

                /* 
                        Switch Statements

                        The switch statment executes a block of code depending on different cases
                        */

                        let student = 'Christian'

                        switch(student) {
                        //if student === 'Christian'
                        case 'Christian':
                            console.log(`${student} is a part of the Web Development Class.`);
                            break;
                        case 'Summer':
                            console.log(`${student} is a part of the Web Development Team.`);
                            break;
                        case 'Josh' :
                            console.log(`${student} is a part of the Software Development Team.`);
                            break;
                            //default = else statement
                            default:
                                console.log(`Sorry I'cant find what ${student} teaches at this time.`);
                        }


                        let staff = 'Jerome';

                        switch(staff) {
                            case 'Jerome':
                            case 'Summer':
                            case 'Levi':
                            case 'Adam':
                            case 'Hustin':
                                console.log(`${staff} is a part of the Web Development Team.`);
                                break;
                            case 'Josh':
                            case 'Amanda':
                            case 'Casey':
                            case 'Junior':
                                console.log(`${staff} is a part of the Software Development Team.`); 
                                break;
                            default:
                                console.log(`Sorry, I cant find what ${staff} teaches.`);
                        }

                        
                        let switchConditional = true;
                                                                    //or
                        switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean') {
                            case true:
                                console.log(`${switchConditional} is a string or boolean!`)
                                break;
                            default:
                                console.log(`${switchConditional} is NOT a string or boolean`);
                        }


                        //Challenge
                        
                        let grade = 100;

                        switch(true) {
                            case (grade >= 89):
                                console.log(`Your grade is ${grade}, you are passing with an A.`)
                                break;
                            case (grade >=79):
                                console.log(`Your grade is ${grade}, You are passing with a B.`)
                                break;
                            case (grade >=66):
                                console.log(`Your grade is ${grade}, you are passing with a C.`)
                                break;
                            case (grade >=59):
                                console.log(`Your grade is ${grade}, you are passing with a D.`)
                                break;
                            case (grade >=0):
                                console.log(`You are FAILING!`);
                            default:
                                console.log(`invalid`);
                                break;
                        }

                        //Ternary
                        let character = "Michael";
                        
                        character === "Michael" ? console.log(`That's what she said!`) :
                        character === "Dwight" ? console.log(`It's not weed! It's hemp!`) :
                        character === "Jim" ? console.log(`Bear. Beats. Battlestar Galactica`) :
                        console.log(`I have not seen this show.`);


                        //switch
                        let character = "Michael";

                        switch(true) {
                            case "Michael":
                                console.log(`That's what she said!`);
                                break;

                            case "Dwight":
                                console.log( `It's not weed! It's hemp!`);
                                break;

                            case  "Jim":
                                console.log(`Bears. Beats. Battlestar Galactica`);
                                break;
                            default:
                                console.log(`I have not seen this show.`);
                        }
                        