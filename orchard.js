///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// In order to find the total acres picked for the entire week
// acres must be totaled for each individual apple variety.

// Calculate the total acres for Fuji with a for-loop that
// sums the entire week and stores in variable fujiTotal.
// The for-loop will loop through each value in the array and
// add all the values together.

let fujiTotal = 0;
for (let f = 0; f < fujiAcres.length; f++) {
    fujiTotal += fujiAcres[f];
}
console.log(`The total number of acres picked for Fuji: ${fujiTotal}`);

// Calculate the total acres for Gala with a for-loop that
// sums the entire week and stores in variable galaTotal.

let galaTotal = 0;
for (let g = 0; g < galaAcres.length; g++) {
    galaTotal += galaAcres[g];
}
console.log(`The total number of acres picked for Gala: ${galaTotal}`);

// Calculate the total acres for Pink with a for-loop that
// sums the entire week and stores in variable pinkTotal.

let pinkTotal = 0;
for (let p = 0; p < pinkAcres.length; p++) {
    pinkTotal += pinkAcres[p];
}
console.log(`The total number of acres picked for Pink: ${pinkTotal}`);

// Now to find total acres sum all the apple variety totals together
// store in variable totalAcres

let totalAcres = fujiTotal + galaTotal + pinkTotal;
console.log(`The total number of acres picked for the entire week: ${totalAcres}`);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// To calculate average number of acres picked per day
// must divide the total acres picked by the number of days (aka 7)

let averageDailyAcres = totalAcres / 7;
console.log(`Average acres picked per day: ${averageDailyAcres}`);



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// To make the while loop, the condition is while acresLeft is greater than 0
// so the loop will continue to run while that condition evaluates to true.
// While that condition is true, the code block within curly brackets will run.
// The code block adds 1 to each day of work needed, since any amount of acres
// remaining will require another day of work.
// The code block also deducts the average number of acres picked daily from
// the number of acres left, whose number will be stored as the new acresLeft and
// compared against the while loop's condition again.

while (acresLeft > 0) {
    days += 1;
    acresLeft = acresLeft - averageDailyAcres;
}

console.log(`The number of days needed to work: ${days}`);



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// Trying option 1: creating fujiTons by slicing fujiAcres
// to make a copy of the array. By entering no arguments in
// slice parentheses, the slice defaults to starting at index 0
// and taking values through to the end of the array.
// The for loop goes through fujiTons and replaces each value
// in the array with the original value multiplied by 6.5
// The multiplication could also be coded as
// fujiTons[fuji] *= 6.5

let fujiTons = fujiAcres.slice();
console.log(fujiTons);
for (let fuji = 0; fuji < fujiTons.length; fuji++) {
    fujiTons[fuji] = fujiTons[fuji] * 6.5;
}
console.log(fujiTons);

// Trying option 2: creating galaTons as an empty array
// Using the push method to add values into the array galaTons
// as a for loop goes through each value in galaAcres
// and multiplies that value by 6.5 to then push the result
// successively into galaTons

let galaTons = [];
for (let gala = 0; gala < galaAcres.length; gala++) {
    galaTons.push(galaAcres[gala] * 6.5);
}
console.log(galaTons);

// Trying option 1 again
// Using the slice method to make a copy of pinkAcres for pinkTons
// This time adding explicit arguments to specify that the copy
// start at index 0 of pinkAcres and proceed until index 7 since
// the end index is exclusive. In order to capture index 6 (the 7th
// value in the array), the end index must be increased by 1.
// A for loop goes through pinkTons and replaces each value with
// the value multiplied by 6.5

let pinkTons = pinkAcres.slice(0, 7);
console.log(pinkTons);
for (let pink = 0; pink < pinkTons.length; pink++) {
    pinkTons[pink] = pinkTons[pink] * 6.5;
}
console.log(pinkTons);


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// For each apple variety, to calculate the total number of tons,
// use a for loop to sum all the values in the array. 
// Assign the total tons to a new variable.
// Multiply the total tons by 2000 lbs and assign to a new variable.
// Repeat for each apple variety to find the total number of pounds.

let fujiTonsTotal = 0;
for (f = 0; f < fujiTons.length; f++) {
    fujiTonsTotal += fujiTons[f];
} 
console.log(`The total number of tons of Fuji: ${fujiTonsTotal}`);
let fujiPounds = fujiTonsTotal * 2000;
console.log(`Fuji: ${fujiPounds} pounds`);

let galaTonsTotal = 0;
for (g = 0; g < galaTons.length; g++) {
    galaTonsTotal += galaTons[g];
}
console.log(`The total number of tons of Gala: ${galaTonsTotal}`);
let galaPounds = galaTonsTotal * 2000;
console.log(`Gala: ${galaPounds} pounds`);

let pinkTonsTotal = 0;
for (p = 0; p < pinkTons.length; p++) {
    pinkTonsTotal += pinkTons[p];
}
console.log(`The total number of tons of Pink: ${pinkTonsTotal}`);
let pinkPounds = pinkTonsTotal * 2000;
console.log(`Pink: ${pinkPounds} pounds`);






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// In order to find the profit for each apple variety,
// multiply the variable storing the number of pounds
// by the variable storing the price per pound.

let fujiProfit = fujiPounds * fujiPrice;
console.log(`From selling Fuji, you will make $${fujiProfit}`);
let galaProfit = galaPounds * galaPrice;
console.log(`From selling Gala, you will make $${galaProfit}`);
let pinkProfit = pinkPounds * pinkPrice;
console.log(`From selling Pink, you will make $${pinkProfit}`);






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// To find the total profit from selling all the apples
// sum the profit variables for each apple variety and
// assign to the new variable totalProfit.

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`The total profit from selling all the apples is $${totalProfit}`);
