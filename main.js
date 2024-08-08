
// PART 1

/* Loop through all numbers from 1 to 100.
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


// PART 2
/* Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.

*/


// https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript
function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false
    }
    return n > 1
}

const n = 100
for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i)
        // break
    }

}
