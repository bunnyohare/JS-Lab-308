// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
//•	Check if all numbers are divisible by 5. Cache the result in a variable.
  let fiveMultiple = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0; 
  console.log(fiveMultiple);
  //•	Check if the first number is larger than the last. Cache the result in a variable.
 let firstLastComp =(n1 > n4);
 console.log(firstLastComp);

 /*•	Accomplish the following arithmetic chain:
o	Subtract the first number from the second number.
o	Multiply the result by the third number.
o	Find the remainder of dividing the result by the fourth number.
*/

let chain = (((n2 - n1) * n3) % n4);
console.log (chain);

/*•	Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.*/

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
// console.log(isOver25); // sanity test.
console.log(isUnder25);

const newIsValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

console.log(newIsValid);


/*
•	The distance of the trip, in total, is 1,500 miles.
•	Your car’s fuel efficiency is as follows:
o	At 55 miles per hour, you get 30 miles per gallon.
o	At 60 miles per hour, you get 28 miles per gallon.
o	At 75 miles per hour, you get 23 miles per gallon.
•	You have a fuel budget of $175.
•	The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
•	How many gallons of fuel will you need for the entire trip?
•	Will your budget be enough to cover the fuel expense?
•	How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
*/

const distance = 1500;
const mpgFiftyFive = 30;
const mpgSixty = 28;
const mpgSeventyFive = 23;
const budget = 175;
const gasPrice = 3;
const fiftyF = 55;
const sixty = 60;
const seventyF = 75;



let galPerTripFF = distance / mpgFiftyFive;
console.log(galPerTripFF +"gallons of gas at 55 mph");

let costFF = galPerTripFF * gasPrice;
console.log("$" + costFF + " to drive at 55mph.");

let timeFF = distance/fiftyF;
console.log("It will take " + timeFF +"hours for the trip at " + fiftyF + "miles per hour.")


let galPerTripS = distance / mpgSixty;
console.log(galPerTripS + " gallons of gas needed for optimum trip");

let costS = galPerTripS * gasPrice;
console.log("$" + costS + " to drive at 60mph. Best value for time within the given cost.");

let timeS = distance/sixty;
console.log("It will take " + timeS +"hours for the trip at " + sixty + "miles per hour.");

let galPerTripSF = distance/mpgSeventyFive;
console.log(galPerTripSF);

let costSF = galPerTripSF*gasPrice;
console.log("$" + costSF + " to drive at 75mph.  Too Expennsive");

let timeSF = distance/seventyF;
console.log("It would take " + timeSF +" hours for the trip at " + seventyF + " miles per hour if we had the budget for that speed.")


let gallonsNeeded = distance/mpgSixty;
console.log("We need " + gallonsNeeded + "gallons of gas to take the trip at 60mph.")

let travelTime = distance / sixty;
console.log("It will take " + travelTime + " hours to make the trip.")


