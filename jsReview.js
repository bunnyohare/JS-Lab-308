/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back  in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable

let date = "5";  // init date to 5
console.log(date);
console.log(typeof date);
console.log("***** End of Step 1******");


// 2.) Change the value of this variable

date = "10"; // set date to 10

console.log(date);
console.log(typeof date);
console.log("***** End of Step 2******");

// 3.) Change the data type of this variable

date = 'today';

//date=Number(date);  // cast date as a number
console.log(date);
console.log(typeof date);
console.log("***** End of Step 3******");

// 4.) Create another variable and the one from above to concatenate

let tomorrow = 'Some Other Date'

//let secondVariable = " Is the best type of date!";
//let dateAndSecVar = date + secondVariable;
console.log(tomorrow);
console.log(typeof tomorrow);
console.log("***** End of Step 4******");

let wednesday =  'today ' + '& tomorrow'

console.log(tomorrow);
console.log(typeof tomorrow);
console.log("***** End of Step 4******");


// 5.) Use any of the variables above or create new ones and print using string interpolation

let thursday = 208;
console.log(thursday)
console.log(`date+thursday = ${date + " " + thursday}`);
console.log(`If ${wednesday} equals ${thursday}, 208 a good day!`);



// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Susmita

let text = "Susmita";

console.log (text.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Ciera

/* Unicode is an international character encoding standard that provides a unique number for every character across languages and scripts, making almost all characters accessible across platforms, programs, and devices. */

let name = "Ciera";
console.log (name.charCodeAt(2));
// let foundLetter= name.charCodeAt(2);
//console.log(foundLetter);


// Using fromCharCode() - make it readable for us :). You'll see!

console.log(String.fromCharCode(name.charCodeAt(2)));
//console.log(fromCharCode(foundLetter));

// Take your first and last name and concat()

let firstName = "Ellen ";
let lastName = "Mah";
let fullName = firstName + lastName;
console.log(fullName);

// Create a string and make it return true using startsWith()

console.log("Emanuel is a \"name\".".startsWith("E"));  // returns true
// Now use any variable with endsWith() and return false
console.log("Emanuel is a \"name\".".endsWith("x"));  // returns false

// Finish the following sentence. Use includes() and return true.
let maireg = 'Once upon a time Maireg looked up at the Moon, '

console.log(maireg.includes("M"));  //returs true

// Help! I'm looking for my cow! Using indexOf() help Manny find his cow. What's the index of cow?
let mannyHadALittleLambOopsCow = "Manny lives in a farm. Manny was overwhelmed with coding. Manny is stressed out. Manny fed the chickens this morning and watered his plants. He took his cow Betsy on a walk. Manny went home without Betsy. Manny went to bed that night, and realized he left Betsy."

console.log(mannyHadALittleLambOopsCow.indexOf("cow"));  // Located at index 34

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Ty in the String Universe.

let ty = "I am the Alpha Ty. I am the Omega Ty. We do not come in peace."

console.log(ty.lastIndexOf("Ty"));// Located at index 30


// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"

console.log(noWeCantTeo.length);  // Yes, we can!

// If only it was this easy to replace() my ex. LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

console.log(replaceGokuWithVegeta.replace("Goku", "Vegeta"));

// Randi has been forgetful lately. Let's help Randi by using search(), and find their iPhone. 

let randiIsLookingForiPhone = "iphone 1, iPhone 2, IPHONE 3, ifone 4"

console.log(randiIsLookingForiPhone.search("iPhone")); //found at index 10


// I guess we can share this pizza sentence. Use slice() to return "other half of pizza".
let pizzaSentence = "pizza, other half of pizza"

console.log(pizzaSentence.slice(7));  //prints other half of pizza to log

// Now using the pizza sentence, return only pizza (before the comma)

console.log(pizzaSentence.slice(0,5));  //prints pizza to log


// Okay, but who decided to go to this expensive restaurant? Brittany, Andrew, and Rockelle decided to split() the bill. Return an array separating Brittany, Andrew, and Rockelle.
let splitTheBill = "Brittany Andrew Rockelle"
console.log(splitTheBill.split(" "));  // prits array of names to log

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Brittany, Andrew, and Rockelle into pieces. Using splitTheBill, return an array separating all three by single characters. "B, r, i, ..."

console.log(splitTheBill.split(""));  // prits array of letters to log


// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Michael was angry today. Create a string with words that Michael would yell out. Now lowercase it, to tell Micahel to chill out. 

console.log(angry.toLowerCase());

// toUpperCase()
let coreySaidToPutSomeRespectToHisName = "corey feder"

console.log(coreySaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
let basicGreeting = "Hello World"

console.log(basicGreeting.substring(1,4));  //prints out ell to console.log

// Returns "JavaScript"
let ohReally = "JavaScript Substring"

console.log(ohReally.substring(0,10));


// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"

console.log(aslDays.substring(aslDays.length -7));


// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

let breathingRoom = "       If only I can use this for my love handles...       ";
console.log(breathingRoom.length); 

let testTrim = breathingRoom.trim();
console.log(testTrim.length); 
console.log(breathingRoom.trim());




// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Suresh"

console.log(a < b);
console.log(c > b);
console.log(d == d);

 
console.log(d != a);
console.log(a < 15);
console.log(a < b < c);
console.log(c > b > a != d);

