let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // match h-s and 2-6 in combination
let result = quoteSample.match(myRegex);
console.log(result)