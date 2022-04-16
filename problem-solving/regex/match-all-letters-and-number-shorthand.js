let quoteSample = "The five boxing wizards jump quickly.";
// find all alpha numeric letters
// shorthand of [A-Za-z0-9_]
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)