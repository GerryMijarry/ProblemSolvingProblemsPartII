// TODO Happy Numbers
// https://en.wikipedia.org/wiki/Happy_number
// A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
// Write a method that determines if a number is happy or sad

function isHappy(number) {
    let previouslySeenSums = new Set();
    
    while (number != 1) {
        let currentSum = 0;
        while(number > 0) {
            currentSum += (number % 10) * (number % 10)
            number = Math.floor(number/10);
        }
        if(!previouslySeenSums.has(currentSum)) {
            previouslySeenSums.add(currentSum);
            number = currentSum;
        } else {
            return false;
        }

    }
    return true;
    
}

console.log(isHappy(19));

// TODO Prime Numbers
// A prime number is a number that is only divisible by one and itself.
// Write a method that prints out all prime numbers between 1 and 100

function primesTo100 () {
    for(let j = 2; j < 100; j++) {
        let isPrime = true;
        for (let k = 2; k <= j - 1; k++) {
            if (j % k == 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            console.log(j);
        }
    }
}

primesTo100();

// TODO Fibonacci
// A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// Write a method that does the Fibonacci sequence starting at 1



// TODO HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs
