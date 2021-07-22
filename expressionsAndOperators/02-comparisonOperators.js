//Comparison Operators

//Equal
'3' == 3;
console.log('3' == 3);

/*
Javascript is helpful and does something known as coercion when comparing values.
- coercion is the process of converting a value from one type to another.
-in the above example, javascript assumed that we were trying to check if 
'3' is equal to 3, even though one of our value is a string and one is an 
interger.
*/

//Strict Equal - This overrides javascripts coercion
console.log(3===3);
console.log('3'===3);

//Not Equal
console.log('3' != 3); // false

//Strict Not Equal
'3' !== 4
console.log('3' !== 4); //true

//Greater Than
3 > 2;

//Less Than
2 < 3;

//Greater Than or Equal to
3 >= 2; //Not to be confused with => (fat arrow function)

//Less than or equal to
2 <= 3;

// And 
2 && 3;

// Or
2 || 3