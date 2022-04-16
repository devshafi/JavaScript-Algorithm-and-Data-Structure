let repeatNum = "42 42 42";
// Change this line
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);
let test = repeatNum.match(reRegex)
console.log(test)