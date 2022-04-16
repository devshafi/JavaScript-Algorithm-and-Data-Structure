let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // find all the vowels in the sentence with ignore case
let result = quoteSample.match(vowelRegex);
console.log(result) //