let exampleStr = "Let's have fun with regular expressions!";

// wildcard is called dot or period (.)
let unRegex = /un./; // match any word that contains 'un'
let result = unRegex.test(exampleStr);
console.log(result);