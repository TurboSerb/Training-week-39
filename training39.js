/* -----------------------------------------------------------------------------
    Task: A
    You are given a list (Array) named "tall."
    Write the code that will ensure the variable "sum" contains the sum of all the numbers in the list (i.e., tal1 + tal2 + tal3 + tal4 + ... and so on).
*/
console.log("Task: A");

const tall = [1, 2, 3, 4, 5];
let totalSum = 0; 

for (let i = 0; i < tall.length; i++) {
    totalSum += tall[i];  
}

console.log(totalSum);  

/* -----------------------------------------------------------------------------
    Task: B
    Below is a function "summer," which is incomplete; it should return the sum of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: B");

function summer(liste) {
    let total = 0;
    for (let i = 0; i < liste.length; i++) {
        total += liste[i];  
    }
    return total;  
}

const sum = summer(tall);

if (sum === 15) {
    console.log("🎉 Task B is most likely correct");
} else {
    console.log("😱 Task B has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
    Task: C
    You are given a list (Array) named "andreTall."
    Write the code that will ensure the variable "differans" contains the difference of all the numbers in the list (i.e., tal1 - tal2 - tal3 - tal4 - ... and so on).
*/
console.log("Task: C");

const andreTall = [6, 7, 8, 9];
let differans = andreTall[0];  

for (let i = 1; i < andreTall.length; i++) {
    differans -= andreTall[i];  
}

console.log(differans);  

/* -----------------------------------------------------------------------------
    Task: D
    Below is a function "differansier," which is incomplete; it should return the difference of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: D");

function differansier(liste) {
    let total = liste[0];  // Start with the first number
    for (let i = 1; i < liste.length; i++) {
        total -= liste[i];  // Subtract the remaining numbers
    }
    return total;  // Return the difference
}

const diff = differansier(andreTall);

if (diff === -18) {
    console.log("🎉 Task D is most likely correct");
} else {
    console.log("😱 Task D has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
    Task: E
    Create a function named "multipliser." This function should take (as a parameter) a list of numbers.
    The function should return the product of the numbers (i.e., tal1 * tal2 * tal3 * ... and so on).
*/
console.log("Task: E");

function multipliser(liste) {
    let product = 1;  
    for (let i = 0; i < liste.length; i++) {
        product *= liste[i];  
    }
    return product;  
}

const product = multipliser([2, 3, 4]);
console.log(product);  
