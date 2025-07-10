const add = (a, b) => {
  return a + b;
};

// Get the command line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first argument provided by the user
// process.argv[3] is the second argument provided by the user
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert the arguments to integers.
// If an argument is not provided or is not a valid number,
// parseInt will return NaN.
// Adding NaN to any number (or another NaN) results in NaN,
// which matches the desired output behavior.
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Call the add function with the parsed numbers and print the result.
console.log(add(num1, num2));
