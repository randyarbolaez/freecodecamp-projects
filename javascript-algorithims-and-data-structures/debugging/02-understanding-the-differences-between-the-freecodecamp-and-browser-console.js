/*
Values passed to console.log() in the text editor block run each set of tests as well as one more time for any function calls that you have in you code.

This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect to see only once may print out many more times depending on the number of tests and the values being passed to those tests.

If you would like to see only your single output and not have to worry about running through the test cycles, you can use console.clear().
*/

// Open your browser console
let outputTwo = 'This will print to the browser console 2 times';
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = 'Try to get this to log only once to the browser console';
// Use console.clear() in the next line to print the outputOne only once
console.clear();

// Use console.log() to print the outputOne variable
console.log(outputOne);
