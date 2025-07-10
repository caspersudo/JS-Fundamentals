/**
 * Computes the factorial of a given integer recursively.
 * - Factorial of NaN is 1.
 * - Factorial of numbers less than 1 (including negative numbers) is 1.
 * @param {number} n - The integer for which to compute the factorial.
 * @returns {number} The factorial of n.
 */
const factorial = (n) => {
  // Base case: If n is NaN or less than or equal to 1, return 1.
  // This handles the 'NaN' input case and the base case for recursion (0! = 1, 1! = 1).
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
};

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first argument provided by the user
const arg = process.argv[2];

// Convert the argument to an integer.
// If the argument is not provided or is not a valid number,
// parseInt will return NaN, which is handled by the factorial function.
const num = parseInt(arg);

// Call the factorial function with the parsed number and print the result.
console.log(factorial(num));

