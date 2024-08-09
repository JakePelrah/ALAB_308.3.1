
//////////////////////////// PART 1 ////////////////////////////

/* 
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
*/

// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {

    // if number is divisible by 3 and 5 log "Fizz Buzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: Fizz Buzz`)
    }

    // else if number is divisible by 3 log "Fizz"
    else if (i % 3 === 0) {
        console.log(`${i}: Fizz`)
    }

    // else if number is divisible by 5 log "Buzz"
    else if (i % 5 === 0) {
        console.log(`${i}: Buzz`)
    }

    // else number is not divisible by 3 or 5
    else {
        console.log(`${i}: Not divisible by 3 or 5 `)
    }
}


//////////////////////////// PART 2 ////////////////////////////

/* Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
*/

// declare an arbitrary number n
const n = 100

// https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript
// isPrime: returns true if number is prime
function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false
    }
    return n > 1
}

// create a loop that searches for the next prime number
for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {

        // as soon as you find the prime number, 
        // log that number and exit the loop.
        console.log(i)
        break
    }
}

// get the next prime number
function getNextPrime(n) {
    let x = n + 1
    while (!isPrime(x)) {
        x++
    }
    return x
}

// print current and next prime number
for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
        //log current and next prime number
        console.log(`current prime:${i}, next prime:${getNextPrime(i)}`)
    }
}

//////////////////////////// PART 3 ////////////////////////////

/*
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.
*/
const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
const testString = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232'

// global variables
let index = 0
let row = ''
let formattedRow = ''

// change myString to test different strings
const myString = testString

// get length of myString
const length = myString.length

// while current char index not equal to length of myString
while (index <= length) {

    // get char at current index
    let currentChar = myString[index]

    // if the current char is not a newline 
    // and is not the end of myString
    if (currentChar !== '\n' && index !== length) {

        // concat characters
        row += currentChar
    }

    else {
        // loop through chars in each row
        for (let j = 0; j < row.length; j++) {

            // get char at current index
            let currentChar = row[j]

            // if we encounter a comma
            if (currentChar === ',')

                // add a space after the comma
                formattedRow += ', '
            else
                // concat characters
                formattedRow += currentChar
        }

        // log the formatted row
        console.log(formattedRow)

        // clear variables so we can process the next row
        row = ''
        formattedRow = ''
    }
    // increment the index
    index++
}