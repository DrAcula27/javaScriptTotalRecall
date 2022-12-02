// JavaScript Total Recall

/* I. Variables & Datatypes

A. Q + A

How do we assign a value to a variable?
-use the assignment operator, the = sign.

How do we change the value of a variable?
-use the = to reassign the varable to a new value.

How do we assign an existing variable to a new variable?
-use the = to assign the new variable to the old one, for example:
    let newVar = oldVar
    this assigns the value of oldVar to newVar.

Remind me, what are declare, assign, and define?
-declare: is the term used when you want to create a variable.
-assign: is the term used when you give a variable a value.
-define: is essentially the same as declaring.

What is pseudocoding and why should you do it?
-pseudocoding is the act of writing out what you want your code to do, step-by-step, in plain English (or whichever langugae you prefer).
-you should pseudocode because it helps you solve the problem by working through it logically.

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
-in general, you will spend more than 50% - 80% of your time thinking about the problem vs writing the code. */

/* B. Strings
For all other questions that involve writing code, you can solve them via the following instructions. */
    // 1. Create a variable called firstVariable.
    let firstVariable;

    // 2. Assign it the value of the string "Hello World".
    firstVariable = "Hello World";

    // 3. Change the value of this variable to some number.
    firstVariable = 27;

    // 4. Store the value of firstVariablein a new variable called secondVariable.
    let secondVariable = firstVariable;

    // 5. Change the value of secondVariableto any string.
    secondVariable = "string";

    // 6. What is the value of firstVariable?
    console.log(firstVariable); // expect 27

    // 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    // ex: Hello, my name is Jean Valjean
    let yourName = "Danielle";
    console.log(`Hello, my name is ${yourName}.`);

/* C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false || false || false || false || true);
console.log(false == false);
console.log(e == 'Kevin');
console.log(a * b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a < a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

/* D. The farm */
// 1. Declare a variable animal. Set it to be either "cow" or something else.
let animal = "dog";
// 2. Write code that will print out "mooooo" if the it is equal to cow.
if (animal == "cow") {
    console.log("mooooo\n");
} else {
    // 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
    console.log("Hey! You're not a cow.\n");
}
// 4. Commit.

/* E. Driver's Ed */
// Make a variable that holds a person's age; be semantic.
let personAge = 16;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge >= 16) {
    console.log("Here are the keys!\n");
} else {
    console.log("Sorry, you're too young.\n");
}

/* II. Loops
Remember: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++) */

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400.
for(let i = 10; i <= 400; i++) {
    console.log(`${i}\n`);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for(let i = 12; i <= 100; i += 3) {
    console.log(`${i}\n`);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100.
for(let i = 1; i <= 100; i++) {
    console.log(`${i}\n`);
}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for(let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} <-- is an even number\n`);
    } else {
        console.log(`${i}\n`);
    }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
    // I found a 5. High five!
    // I found a 10. High five!
for(let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!\n`);
    }
    // or, using ternary syntax:
    // let highFive = i % 5 == 0;
    // console.log(highFive ? `I found a ${i}. High five!` : i);
}
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
    // I found a 3. Three is a crowd
    // I found a 5. High five!
    // I found a 6. Three is a crowd
    // I found a 9. Three is a crowd
    // I found a 10. High five!
    for(let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(`I found a ${i}. Three is a crowd.\n`);
        } else if (i % 5 == 0) {
            console.log(`I found a ${i}. High five!\n`);
        }
        // or, using ternary syntax:
        // let crowd = i % 3 == 0, highFive = i % 5 == 0;
        // console.log(highFive ? `I found a ${i}. High five!` : crowd ? `I found a ${i}. Three is a crowd` : i);
    }
// For numbers divisible by both three and five, be sure your code prints both messages.
for(let i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(`I found a ${i}. High five! Three is a crowd.\n`);
    }else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd.\n`);
    } else if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!\n`);
    }
    // or, using ternary syntax:
    // let crowd = i % 3 == 0, highFive = i % 5 == 0;
    // console.log(crowd ? highFive ? `I found a ${i}. High five! Three is a crowd.` : `I found a ${i}. Three is a crowd` : highFive ? `I found a ${i}. High five!` : i);
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for(let i = 1; i <= 10; i++) {
    bank_account += i;
}
// Check your work! Your bank_account should have $55 in it.
console.log(`Your bank account has $${bank_account} in it.\n`);
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0;
for(let i = 0; i <= 100; i++) {
    bank_account += 2 * i;
}
// Check your work! Your bank_account should have $10,100 in it.
console.log(`Your bank account has $${bank_account} in it.\n`);