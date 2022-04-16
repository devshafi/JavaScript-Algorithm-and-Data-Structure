let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // match all the letters ignoring case
let result = quoteSample.match(alphabetRegex); 
console.log(result);