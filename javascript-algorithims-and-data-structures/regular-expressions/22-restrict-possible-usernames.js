/*
Change the regex userCheck to fit the constraints listed above.
*/

let username = 'JackOfAllTrades';
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);
