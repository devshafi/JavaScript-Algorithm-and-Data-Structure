function findLongestWordLength(str) {
    const strArr = str.split(" ");
    let longestStrLength = -1;
    strArr.forEach(element => {
        // update if current string length is greater than 
        // the previous string length
        if(element.length>longestStrLength){
            longestStrLength =  element.length;
        }
    });
    return longestStrLength;

  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));