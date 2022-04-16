let myString = "Eleanor Roosevelt";
// check for Franklin D. or Eleanor at the starting of the string
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; 
let result = myRegex.test(myString);
console.log(result)