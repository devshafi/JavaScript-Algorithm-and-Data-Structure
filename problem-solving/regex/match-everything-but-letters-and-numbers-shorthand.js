let quoteSample = "The five boxing wizards jump quickly.";
// find all the non alphanumeric
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);