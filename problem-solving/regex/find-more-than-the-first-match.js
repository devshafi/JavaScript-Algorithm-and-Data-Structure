let twinkleStar = "Twinkle, twinkle, little star";
//To search or extract a pattern more than once, you can use the g flag.
// i flag is for ignoring case
let starRegex = /twinkle/gi; // find the pattern more than once with g
let result = twinkleStar.match(starRegex);
console.log(result);