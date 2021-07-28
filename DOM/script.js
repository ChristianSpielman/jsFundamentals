console.log('Hello fom the script file!');

//1
console.log(document);
console.log(document.body);
//using console.dir() to see the properties of the object instead of the html tag
console.dir(document.getElementById('testParagraph'));
document.getElementById('testParagraph').style.color = 'red';

let testPara= document.getElementById('testParagraph');
testPara.style.color = '#434c8c';
testPara.style.backgroundColor = 'lightBlue';

//This method will reach out to the html page and grab the first HTML element with the specific id passed into the method
//(in this case, testParagraph). This is important to know because if you have 2 elements with the same id, you will only get the first
//though you usually will not have 2 elements with the same id.


//2 querySelectorAll & innerText/innerHTML
// document.querySelectorAll('sampleClass')//<sampleClass>undefined
console.log(document.querySelectorAll('.sampleClass')) // gives us an array of all items with the class 'sampleClass' in a "NodeList"

console.log(document.querySelectorAll('p.sampleClass'));//gives us p tags with class='sampleClass'

document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!';//we use [] notation to select an index from the array
// even if there's only one element. innerText just refrences or changes the text inside of that element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    //pTag.innerText = 'My text has been changed using a forEach() method
    //pTag.textContent = 'My text has been changed using a forEach() method
    pTag.innerText = 'My text has been changed using a forEach() method!';
})

/*
Innertext vs InnerHTML vs textcontent

    -innerText will simply reference or allow us to change the text of a specified
    element. Will return visivle text in a "node".
    
    -textContent does the same thing that innerText does, but will return the full text of a "node"
    
    -InnerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML elment
    we are refrencing.
    */

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
console.log(document.getElementById('spanTest').innerHTML);


/*
addEventListener()
*/
// document.getElementById('clickThis').addEventListener('click', function(event) {
//     // now i can write code
//     // console.log(event);
//     console.log(event.target);
//     event.target.style.backgroundColor = '#031bf3'
//   })
  
  
  // ! addEventListener - keyup
  
  let input = document.getElementById('nameInput');
  
  input.addEventListener('keyup', e => {
    // console.log(e.target)
    console.log(e.target.value)
    // console.log(document.getElementsByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'Something has Changed!'
  
    if(e.target.value === ''){
      document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...';
    } else {
      document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
    }
  }) 


//challenge: move button into a variable and when you click the button it will turn blue, or if it is already blue it will turn red

let button = document.getElementById('clickThis')

button.addEventListener('click', ev => {
  console.log(ev.target.style.backgroundColor);
  if(ev.target.style.backgroundColor == 'blue'){
    ev.target.style.backgroundColor = 'red';
  } else {
    ev.target.style.backgroundColor = 'blue';
  }
})