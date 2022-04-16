let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // h occurs between 3 and 6 times
let result = ohRegex.test(ohStr);