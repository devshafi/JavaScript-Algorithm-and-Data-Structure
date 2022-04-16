let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeioi]/gi; // ignore numbers and vowels
let result = quoteSample.match(myRegex);
console.log(result)