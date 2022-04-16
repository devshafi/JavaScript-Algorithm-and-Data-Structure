let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // match 's' occurs one or more times consecutively
let result = difficultSpelling.match(myRegex);
console.log(result)