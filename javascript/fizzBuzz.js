const number = 100;

for (let i = 1; i < number; i++) {
    fizzBuzz(i);
}

function fizzBuzz(number) {
    if (number % 15 === 0) {
        // Check if the number is divisible by 3 and 5
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {
        // Check if the number is divisible by 3
        console.log('Buzz');
    } else if (number % 5 === 0) {
        // Check if the number is divisible by 5
        console.log('Fizz');
    } else {
        // Return the number if above condition are not met
        console.log(number);
    }

    return number;
}

console.log(fizzBuzz(number));