let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // match multiple patterns using OR (|)
let result = petRegex.test(petString);
console.log(result);