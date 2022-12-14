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

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
    // -elements or items
// Do Arrays guarantee those things will be in order?
    // -yes, because they are given indexes
// What real-life thing could you model with an array?
    // -any list of items; for example, an array could hold a list of cars.

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["The future ain't what it used to be -Yogi Berra", "I have no special talent. I am only passionately curious -Albert Enstein", "All we have to decide is what to do with the time that is given us. -J.R.R. Tolkien"];

// C. Accessing elements
// Given the following array:
const randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
randomThings[0];
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);
console.log("");

// D. Change values
// Given the following array:
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);
console.log("");

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array:
const myArray = [5, 10, 500, 20];
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Aragorn");
// Remove the 5 from the beginning of the array.
myArray.shift();
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
// Remove the string of your choice from the end of the array.
myArray.pop();
// Reverse this array using Array.prototype.reverse().
myArray.reverse();
// Did you mutate the array?
    // Yes. The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array. -source: MDN
// What does mutate mean?
    // A mutable value is one that can be changed without creating an entirely new value. In JavaScript, objects and arrays are mutable by default, but primitive values are not ??? once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned. -source: MDN
// Did the .reverse()method return anything?
    // Yes. The reverse() method returns the reference to the original array, now reversed. Note that the array is reversed in place, and no copy is made. -source: MDN
console.log(myArray);
console.log("");

// F. Biggie Smalls
// Create a variable that contains an integer.
let int = 27;
// Write an if ... else statement that:
if(int < 100) {
    // console.log()s "little number" if the number is entered is less than 100.
    console.log("little number\n");
} else {
    // console.log()s big number if the number is greater than or equal to 100.
    console.log("big number\n");
}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
if (int < 5) {
    // console.log() little number if the number entered is less than 5.
    console.log("little number\n");
} else if (int > 10) {
    // If the number entered is more than 10, log big number.
    console.log("big number\n");
} else {
    // Otherwise, log "monkey".
    console.log("monkey\n");
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
console.log("");
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let thomsShirt = thomsCloset[0][0];
// In the same way, access one item from Thom's pants array.
let thomsPants = thomsCloset[1][1];
// Access one item from Thom's accessories array.
let thomsAccessory = thomsCloset[2][1];
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in his ${thomsShirt}, ${thomsPants} and ${thomsAccessory}!\n`);
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);
console.log("");

// IV. Functions

// A. printGreeting
    // Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
    // Like so?
    // console.log(printGreeting("Slimer"));
    // => Hello there, Slimer!
    // You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name, as an argument. The function should print the name and a message saying that that person is cool.
    // for example:
    // console.log(printCool("Captain Reynolds"));
    // => "Captain Reynolds is cool";
    const printCool = (name) => {
        return `${name} is cool.`;
    }
    console.log(printCool("Gandalf"));
    console.log("");

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
    // for example:
    // console.log(calculateCube(5));
    // => 125
    const calculateCube = (sideLength) => {
        let volume = Math.pow(sideLength, 3);
        return volume;
    }
    console.log(calculateCube(5));
    console.log("");

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
    // for example:
    // console.log(isVowel("a"));
    // => true
    const isVowel = (character) => {
        let char = character.toLowerCase();
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            return true;
        }
        return false;
    }
    console.log(isVowel("a")); // expected output: true
    console.log(isVowel("e")); // expected output: true
    console.log(isVowel("i")); // expected output: true
    console.log(isVowel("o")); // expected output: true
    console.log(isVowel("u")); // expected output: true
    console.log(isVowel("A")); // expected output: true
    console.log(isVowel("E")); // expected output: true
    console.log(isVowel("I")); // expected output: true
    console.log(isVowel("O")); // expected output: true
    console.log(isVowel("U")); // expected output: true
    console.log(isVowel("y")); // expected output: false
    console.log(isVowel("b")); // expected output: false
    console.log("");

// E. getTwoLengths
    // Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
    // for example:
    // console.log(getTwoLengths("Hank", "Hippopopalous"));
    // => [4, 13]
    const getTwoLengths = (string1, string2) => {
        let array = [string1.length, string2.length];
        return array;
    }
    console.log(getTwoLengths("Hello", "there")); // expected output: [5, 5]
    console.log("");

// F. getMultipleLengths
    // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
    // for example:
    // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
    // => [5, 4, 2, 2, 4]
    const getMultipleLengths = (stringsArray) => {
        let lengthsArray = [];
        stringsArray.forEach((string) => {
            lengthsArray.push(string.length);
        });
        return lengthsArray;
    }
    console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // expected output: [5, 4, 2, 2, 4]
    console.log("");

// G. maxOfThree
    // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
    // for example:
    // console.log(maxOfThree(6, 9, 1));
    // => 9
    // Did you use Google and find Math.max()? If so, great job! Very resourceful???keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
    const maxOfThree = (num1, num2, num3) => {
        let maxValue = (num1 > num2) ?
                       (num1 > num3 ? num1 : num3) :
                       (num2 > num3 ? num2 : num3);
        // below is the logic written as if statements.
        // if (num1 > num2) {
        //     maxValue = num1;
        // } else {
        //     maxValue = num2;
        // }
        // if (num3 > maxValue) {
        //     maxValue = num3;
        // }
        return maxValue;
    }
    console.log(maxOfThree(0, 0, 0)); // expected output: 0
    console.log(maxOfThree(-10, 10, 10)); // expected output: 10
    console.log(maxOfThree(1, 2, 3)); // expected output: 3
    console.log(maxOfThree(3, 2, 1)); // expected output: 3
    console.log(maxOfThree(2, 3, 1)); // expected output: 3
    console.log("");

// H. printLongestWord
    // Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
    // for example:
    // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
    // => "Peanutbutter"
    const printLongestWord = (stringsArray = []) => {
        if(!stringsArray?.length) return "";
        let longestString = "";
        longestString = stringsArray.reduce((acc, val) => {
            return acc.length >= val.length ? acc : val;
        });
        return longestString;
    }
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); // expected output: Peanutbutter
    console.log(printLongestWord()); // expected output: ""
    console.log(printLongestWord(["aaaa", "aa", "aa", "aaaaa", "acc", "aaaaaaaa"])); // expected output: aaaaaaaa
    console.log(printLongestWord(["aaaa", "aaaa", "aa", "zyx", "acc", "42"])); // expected output: aaaa
    console.log("");

// V. Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
    // Create an object called user.
    // Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
    const user = {
        name: "sarumon",
        email: "thewhitewizard@isengard.com",
        age: 1100,
        purchased: []
    }

// B. Update the user
    // Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
    user.email = "thewizard@isengard.com";
    // Our user has had a birthday! Without changing the original user object, increment the agev alue using the post fix operator. Hint: age++
    user.age++;

// C. Adding keys and values
    // You have decided to add your user's location to the data that you want to collect.
    // Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).
    user.location = "isengard";

// D. Shopaholic!
    // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
    user.purchased.push("carbohydrates");
    // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
    user.purchased.push("peace of mind");
    // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
    user.purchased.push("Merino jodhpurs");
    // Console.log just the "Merino jodhpurs" from the purchasedarray.
    console.log(user.purchased[2]);
    console.log("");

// E. Object-within-object
    // Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
    // If we want to give our user a friend with a nameand age, we could write:
    // user.friend = {
    //     name: "Grace Hopper",
    //     age: 85
    // }
    // When we console.log user, we would see the friend object added to our user object.
    // Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
    user.friend = {
        name: "sauron",
        age: 4500,
        location: "barad-dur",
        purchased: []
    }
    // Console.log just the friend's name.
    console.log(user.friend.name);
    console.log("");
    // Console.log just the friend's location.
    console.log(user.friend.location);
    console.log("");
    // CHANGE the friend's age to 55.
    user.friend.age = 55;
    // The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
    user.friend.purchased.push("The One Ring");
    // The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
    user.friend.purchased.push("A latte");
    // Console.log just "A latte" from the friend's purchased array.
    console.log(user.friend.purchased[1]);
    console.log("");

// F. Loops
    // Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
    user.purchased.forEach((item) => {
        console.log(item);
    });
    console.log("");
    // Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
    user.friend.purchased.forEach((item) => {
        console.log(item);
    });
    console.log("");

// G. Functions can operate on objects
    // Write a single function updateUser that takes no parameters. When the function is run, it should:
    // increment the user's age by 1
    // make the user's name uppercase
    // The function does not need a return statement, it will merely modify the user object.
    const updateUser = () => {
        user.age++;
        user.name = user.name.toUpperCase();
    }
    updateUser();
    console.log(user);
    console.log("");
    // Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
    const oldAndLoud = (person) => {
        person.age++;
        person.name = person.name.toUpperCase();
    }
    oldAndLoud(user);
    console.log(user);
    console.log("");

    // BONUS SECTION - Requirements Complete! Hungry for More?
    // Cat Combinator
    
    // 1. Mama cat
        // Define an object called cat1 that contains the following properties:
            // name
            // breed
            // age (a number)
        // console.log the cat's age
        // console.log the cat's breed
        const cat1 = {
            name: "Carolyn",
            breed: "tabby",
            age: 9
        }
        console.log(cat1.age);
        console.log(cat1.breed);
        console.log("");
    
    // 2. Papa cat
    // Define an object called cat2 that also contains the properties:
        // name
        // breed
        // age (a number)
        const cat2 = {
            name: "Simba",
            breed: "siamese",
            age: 12
        }
        
    // 3. Combine Cats!
        // The cats are multiplying!
        // Write a function combineCats that has two parameters: mama and papa. The function will take two arguments -- each a cat object.
        const combineCats1 = (mama, papa) => {
            console.log(mama);
            console.log(papa);
        }
        // Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
        // Example:
        // combineCats(cat1, cat2)
        // { name: "Joe", age: 19, breed: "Mog" }
        // { name: "Jam", age: 45, breed: "Siamese" }
        combineCats1(cat1, cat2);
        console.log("");
            // This is to demonstrate that functions can take objects as arguments.
                // You could also invoke the combineCats function by writing the objects straight into the parentheses:
                // combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

        // Make it so the combineCats function will return a combination of the two incoming cats.
        // The result should be an object wherein the:
            // name is a concatenation of the parents' names
            // the age is 1
            // the breed is each of the parents' breeds with a hyphen in between
        // Example:
        // console.log(combineCats(cat1, cat2));
        // Result:
        // { name: 'JoeJam', age: 1, breed: 'Mog-Siamese'}
        // This is to demonstrate that a function can return an object
        const combineCats2 = (mama, papa) => {
            return {
                name: mama.name + papa.name,
                age: 1,
                breed: mama.breed + "-" + papa.breed
            }
        }
        console.log(combineCats2(cat1, cat2));
        console.log("");
    
    // 4. Cat brain bender
    // If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:
        // catCombinator can use itself as its own argument.
    
    // What is the result of:
    console.log(combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2)));
    console.log("");

    // Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each of which are combineCats, each which have two arguments, each which are combineCats.
    // Your output should look something like:
    // { name: 'JoeJamJoeJamJoeJamJoeJam', age: 1, breed: 'Mog-Siamese-Mog-Siamese-Mog-Siamese-Mog-Siamese' }
    console.log(
        combineCats2(
            combineCats2(
                combineCats2(cat1, cat2), combineCats2(cat1, cat2)), combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2)
                )
            )
        );
    console.log("");