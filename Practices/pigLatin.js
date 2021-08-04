function pigLatin(myString){

let vowels= ['a','e','i','o','u'];

let wordArray = myString.split(' ');

let newWordArray = [];//

for(let word of wordArray){
  // console.log(word[0]);
  if(word[0] == 'a'|| word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u'){
    // console.log(word);
    word = word + 'ay'
    //word += 'ay'
    // console.log(word);
    } else{
      let letters = word.split('')//split letters
      //  console.log(letters);
      let shift = letters.shift();//move first letter to end of word
      //  console.log(letters);
      letters.push(shift, 'ay');// adding 'ay'
      word = letters.join('');// put word back together
      newWordArray.push(word); //put word back into sentence
    }
  }
  console.log(newWordArray.join(' '));
}
pigLatin('The quick brown fox jumps over the lazy dog')





//
- Create a function that takes in strings
- In the function, translate a phrase into pig latin and print it to the console.
- If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
- It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/
/*
1. function ☑
2. variables in function
3. for loop(?)
4. if else (if vowel at certain spot else...)
5. console.log
6. call function
*/
// 1
function pigLatin(myString) {
console.log('PARAM:',myString);
let vowels = ['a', 'e', 'i', 'o', 'u'];
// if i get a sentence, how do i know when a word ends or begins
// 'the quick brown fox jumps over the lazy dog'
let wordArray = myString.split(' ');
let newWordArray = [];
for (let word of wordArray) {
// check if the first letter is a vowel or consonant
// first letter is consonant
// move it to the back and put an 'ay' after
// first letter is vowel
// just add an 'ay' at the end
// vowels.forEach(vowel => {
//   if(word[0] == vowel) {
//     // do stuff
//     // return;
//   }
// })
// console.log(word[0]);
if(word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u'){
  // console.log(word)
  // word = word + 'ay'
  word += 'ay'
  newWordArray.push(word);
} else {
  // put the first letter at the end
  // add an ay
  // remove the first letter
  let letters = word.split('');
  let shift = letters.shift();
  letters.push(shift, 'ay');
  word = letters.join('');
  newWordArray.push(word);
  // console.log(letters.join(''));
}
}
console.log(newWordArray.join(' '));
// console.log(wordArray.join(' '));
}
pigLatin('The quick brown fox jumps over the lazy dog');
// pigLatin('Hopw are we doing on this tuesdayt morning')
// RegEx (FOR NOTES ONLY)
var toPigLatin = function(str){
return str.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
};
console.log(toPigLatin('the frosty marshmallow'))