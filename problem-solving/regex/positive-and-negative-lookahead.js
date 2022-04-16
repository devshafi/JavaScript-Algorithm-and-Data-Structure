let sampleWord = "a22";
// must be at least 6 characters
// and two consecutive digits at any position
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
let sampleWordRes = sampleWord.match(pwRegex);
console.log(result)
console.log(sampleWordRes)