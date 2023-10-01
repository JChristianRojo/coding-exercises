/**
 * Determines if a number is oddish or evenish based on the sum of its digits.
 *
 * @param {number} number - The input number to check.
 * @returns {string} - Returns 'Oddish' if the sum of its digits is odd, 'Evenish' otherwise.
 */
function oddishOrEvenish(number) {
    // Convert the number to a string to iterate through its digits
    const numberString = number.toString();

    // Initialize a variable to store the sum of digits
    let digitSum = 0;

    // Iterate through each character (digit) of the string
    for (const digitChar of numberString) {
        // Convert the current digit character to a number and add it to the sum
        digitSum += parseInt(digitChar, 10);
    }

    // Check if the sum of digits is odd or even using the remainder operator (%)
    if (digitSum % 2 !== 0) {
        // Return 'Oddish' if the sum has a remainder when divided by 2
        return 'Oddish';
    }

    // Otherwise, return 'Evenish'
    return 'Evenish';
}

// Test cases
console.log(oddishOrEvenish(121)); // Should output 'Evenish'
console.log(oddishOrEvenish(111)); // Should output 'Oddish'