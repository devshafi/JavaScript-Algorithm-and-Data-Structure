let movieName = "2001: A Space Odyssey";
// shorthand of [0-9]
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;
console.log(result);